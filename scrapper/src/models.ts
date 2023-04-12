export interface Course {
    name: string;
    key: string;
    credits: number;
    number: string;
    professors: string[];
    subject: string;
    description: string;
    prerequisites: { options: string[] }[]; // list of class # ids
}

export interface Track {
    requirements: number[]; // list of class # ids
    credits: number; // min number of credits
}


export interface Student {
    name: string;
    id: number;
    email: string;
}

export interface Professor {
    name: { first: string, last: string };
    key: string;
    avatar: string | null;
    email: string | null;
    phone: string | null;
    office: string | null;
    website: string | null;
    webpage: string | null;
    activities: string[];
    biography: string | null;
    research: string | null;
    rating: number | null;
    difficulty: number | null;
    reviews: number | null;

}

export interface ProfessorLink {
    name: { first: string, last: string };
    key: string;
}


export enum SectionType {
    lecture = 'lecture',
    discussion = 'discussion', colloquium = 'colloquium', study = 'study',
    lab = 'lab', seminar = 'seminar'
}
export interface Enrollment {
    id: number;
    studentId: number;
    sectionId: number;
    date: Date;
}

export enum Season {
    fall = 'fall', spring = 'spring', winter = 'winter', summer = 'summer'
}

export interface Section {
    start: string;
    end: string;
    year: number;
    season: Season;
    key: number;
    courseKey: string;
    type: SectionType;
    days: number[];
    location: string;
    professors: string[];
}

