import { Season, Course, Section, SectionType } from "./models";
import { fetchCICSPage, getSeasonName, WEEK_DAYS, SECTION_TYPES, convertTime12to24 } from "./util";
import * as cheerio from 'cheerio';

export async function fetchCICSSchedule(year: number, season: Season): Promise<{
    courses: Course[], sections: Section[]
}> {

    const html = await fetchCICSPage(`https://www.cics.umass.edu/content/${getSeasonName(season)}-${year.toString().slice(-2)}-course-schedule`, 'Wrong year or season');
    const $ = cheerio.load(html);

    let courses: Course[] = [];
    let sections: Section[] = [];
    let isCICS = true;
    $('tr').map((_, element) => {
        const isCourse = $(element).find('a').length > 0;
        const isInfo = $(element).find('th').first().text().trim() == 'INFO';
        if (isInfo) {
            isCICS = false;
        }
        const fields = Array.from($(element).find('td').map((_, element) => {
            return $(element).text();

        }));

        if (fields.length > 0 && isCICS) {

            if (isCourse) {

                const parts = fields[1].split('(');

                const course: Course = {
                    professors: [],
                    name: parts[0].trim(),
                    id: fields[0],
                    credits: Number.parseInt(parts[1].match(/\d+/g).join('')),
                    description: '',
                    prerequisites: [],
                    number: '',

                    subject: ''
                };
                courses.push(course);

            } else {
                const info = fields[0];
                const id = Number.parseInt(fields[1].replace('#', ''));
                const weekDays = fields[2].match(/.{1,3}/g)?.map((e: string) => WEEK_DAYS[e]) ?? [];
                const type: SectionType = SECTION_TYPES[Object.keys(SECTION_TYPES).find(e => {

                    return info.includes(e);
                })];
                const location = fields[4];
                const professors = fields[5].replace('/n', '').split(',').map(e => e.trim());
                const times = fields[3].includes('BY') || fields[3].length === 0 ? null : fields[3].split('-')

                const start = times ? convertTime12to24(times[0]) : null;
                const end = times ? convertTime12to24(times[1]) : null;
                courses[courses.length - 1].professors = professors;
                const section: Section = {
                    start: start,
                    end: end,
                    year: year,
                    id: id,
                    season: Season.fall,
                    classId: courses[courses.length - 1].id,
                    type: type,
                    days: weekDays,
                    location: location,
                    professors: professors
                };
                sections.push(section);
            }
        }
    });

    return {
        courses, sections,
    }

}
