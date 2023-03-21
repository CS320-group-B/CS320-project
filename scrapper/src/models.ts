export interface Class {
    name: string;
    id: number;
    description: number;
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
    discussion,
    lab
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
    start: Date;
    end: Date;
    year: number;
    season: Season;
    classId: number;
    type: SectionType;
    days: number[];
    location: string;
    professorId: number;
}

