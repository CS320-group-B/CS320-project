export interface Course {
    name: string;
    id: string;
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
    id: string;
    email: string | null;
    phone: string | null;
    office: string | null;
    website: string | null;
    webpage: string | null;
    courses: string[];
    activities: string[];
    biography: string | null;

    research: string | null;
    rating: number | null;
    difficulty: number | null;
    reviews: number | null;
    tags: string[];

}


export enum SectionType {
    lecture,
    discussion, colloquium, study,
    lab, seminar
}
export interface Enrollment {
    id: number;
    studentId: number;
    sectionId: number;
    date: Date;
}

export enum Season {
    fall, spring, winter, summer
}

export interface Section {
    start: string;
    end: string;
    year: number;
    season: Season;
    id: number;
    classId: string;
    type: SectionType;
    days: number[];
    location: string;
    professors: string[];
}
