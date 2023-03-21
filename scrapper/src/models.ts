export interface Class {
    name: string;
    id: string;
    credits: number;
    description: string;
    prerequisites: number[]; // list of class # ids
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
    name: string;
    id: number;
    email: string;
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
    professorId: string;
}

