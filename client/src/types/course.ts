export interface TCourse {
    name: string;
    id: string;
    credits: number;
    number: string;
    professors: string[];
    subject: string;
    description: string;
    prerequisites: { options: string[] }[]; // list of class # ids
}