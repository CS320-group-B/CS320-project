import * as cheerio from 'cheerio';
import * as fs from 'fs';
import { Season, Course, ProfessorLink } from "../models";
import { fetchCICSPage, getSeasonName, multisplit } from "../util";

import { getProfessorLinks, insertCourses } from '../database';

export async function fetchCICSSCourses(year: number, season: Season, professorIds: ProfessorLink[]): Promise<Course[]> {

    const html = await fetchCICSPage(`https://www.cics.umass.edu/content/${getSeasonName(season)}-${year.toString().slice(-2)}-course-descriptions`, 'No connection');
    const $ = cheerio.load(html);

    let courses: Course[] = [];


    $('h2 a').map((_, element) => {

        const headerElement = $(element).parent();
        const header = headerElement.text().trim();
        const number = header.split(':')[0].trim().split(' ')[1].trim();
        const subject = header.split(':')[0].trim().split(' ')[0].trim();

        const title = header.split(':')[1].trim();

        const instructors = headerElement.next().text().replace('Instructor(s):', '').split(',').map(e => e.trim());
        const rawdescription = headerElement.next().next().text().trim();
        const rawPreReqs = multisplit(rawdescription, ['Prerequisites:', 'Prerequisite:'])[1];
        const rawCredit = rawdescription.slice(-10).match(/([0-9]+) credit/);
        const credit = rawCredit ? parseInt(rawCredit[1]) : null;

        const description = multisplit(rawdescription, ['Prerequisites:', 'Prerequisite:', '4 credits', '3 credits', '2 credits', '1 credit'])[0].trim().replace('..', '').trim();
        const prerequisites = rawPreReqs?.split('and ').map(e => e.trim().split('or ').map(e => {
            const polishedText = e.replace(/[a-z]/g, '').split('.')[0].split(',')[0].trim();

            const match1 = polishedText.match(/^([A-Z]+ [0-9]+)/);
            if (match1) {
                return match1[1];
            } else {
                const match2 = polishedText.match(/^([A-Z]+? [A-Z]+ [0-9]+)/);

                if (match2) {
                    return match2[1];
                }
                return null;
            }




        }).filter((e: any) => e)).filter(a => a.length > 0).map(e => ({ options: e })) || [];

        const course: Course = {
            professors: instructors.map(e => professorIds.find(p => {
                const n1 = p.name.last.toLowerCase();
                const n2 = e.split(' ')[1].toLowerCase().trim();

                return n1 === n2;
            })?.key ?? e.replace(' ', '-').toLowerCase()).filter(e => e),
            name: title,
            key: `${subject} ${number}`,
            subject: subject,
            credits: credit,
            description: description,
            prerequisites: prerequisites,
            number: number,

        }
        courses.push(course);
    });

    return courses;

}
