import { Season, Course } from "./models";
import { fetchCICSPage, getSeasonName } from "./util";
import * as cheerio from 'cheerio';


export async function fetchCICSSCourses(year: number, season: Season): Promise<Course[]> {

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
        const rawPreReqs = rawdescription.split('Prerequisites:')[1] || null;
        const description = rawdescription.split('Prerequisites:')[0].trim() || null;

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




        }).filter(e => e)).filter(a => a.length > 0).map(e => ({ options: e })) || [];

        const course: Course = {
            professors: instructors,
            name: title,
            id: `${subject} ${number}`,
            subject: subject,
            credits: 0,
            description: description,
            prerequisites: prerequisites,
            number: number,

        }
        courses.push(course);
    });

    return courses;

}