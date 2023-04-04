import axios, { AxiosResponse } from "axios";
import { SectionType, Season } from "./models";

export const convertTime12to24 = (time12h: any) => {

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



export const WEEK_DAYS: any = {
    'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5,
    'Sat': 6, 'Sun': 7
}

export const SECTION_TYPES: any = {
    'LEC': SectionType.lecture, 'LAB': SectionType.lab, 'SEM': SectionType.seminar, 'DIS': SectionType.discussion, 'IND': SectionType.study, 'COL': SectionType.colloquium
}


export function getSeasonName(season: Season): string {
    switch (season) {
        case Season.fall:
            return 'Fall';
        case Season.spring:
            return 'Spring';
        case Season.summer:
            return 'Summer';
        case Season.winter:
            return 'Winter';
    }
}

export async function fetchCICSPage(url: string, errorMessgae: string): Promise<string> {
    try {
        const res: AxiosResponse = await axios.get(url);

        const html = res.data;
        return html;
    } catch (e) {
        throw new Error(errorMessgae);

    }
}

export function multiIncludes(str: string, substrings: string[]): boolean {
    for (const substring of substrings) {
        if (str.includes(substring)) {
            return true;
        }
    }
    return false;
}