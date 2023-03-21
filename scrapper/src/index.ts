import axios, { AxiosInstance, AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';
import { Class as Course, Season, Section, SectionType } from './models';

async function fetchCICSSchedule(year: number): Promise<{
    courses: Course[], sections: Section[]
}> {
    const res: AxiosResponse = await axios.get(`https://www.cics.umass.edu/content/spring-${year.toString().slice(-2)}-course-schedule`);
    const html = res.data;
    const $ = cheerio.load(html);
    let courses: Course[] = [];
    let sections: Section[] = [];
    let isCICS = true;
    $('tr').map((index, element) => {
        const isCourse = $(element).find('a').length > 0;
        const isInfo = $(element).find('th').first().text().trim() == 'INFO';
        if (isInfo) {
            isCICS = false;
        }
        const fields = Array.from($(element).find('td').map((index, element) => {
            return $(element).text();

        }));

        if (fields.length > 0 && isCICS) {

            if (isCourse) {

                const parts = fields[1].split('(');

                const course: Course = {
                    name: parts[0].trim(),
                    id: fields[0],
                    credits: Number.parseInt(parts[1].match(/\d+/g).join('')),
                    description: '',
                    prerequisites: []
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
                const professor = fields[5].replace('/n', '');
                const times = fields[3].includes('BY') || fields[3].length === 0 ? null : fields[3].split('-')

                const start = times ? convertTime12to24(times[0]) : null;
                const end = times ? convertTime12to24(times[1]) : null;

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
                    professorId: professor
                };
                sections.push(section);

            }
        }


    });
    return {
        courses, sections,
    }



}

const convertTime12to24 = (time12h: any) => {

    const [time, modifier] = time12h.trim().split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
}



const WEEK_DAYS: any = {
    'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5,
    'Sat': 6, 'Sun': 7
}

const SECTION_TYPES: any = {
    'LEC': SectionType.lecture, 'LAB': SectionType.lab, 'SEM': SectionType.seminar, 'DIS': SectionType.discussion, 'IND': SectionType.study, 'COL': SectionType.colloquium
}


fetchCICSSchedule(2023);
