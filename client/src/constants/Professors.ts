import json from './Professors.json';

export interface Professor {
    name: { first: string, last: string };

    key: string;
    avatar: string | null;
    email: string | null;
    phone: string | null;
    office: string | null;
    website: string | null;
    interests: string | null;
    webpage: string | null;
    activities: string | null;
    research: string | null;
    rating: number | null;
    difficulty: number | null;
    reviews: number | null;

}
export const professors: Professor[] = json.data;