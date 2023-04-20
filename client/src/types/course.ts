export interface Course {
    name: string;
    key: string;
    credits: number | null;
    number: string;
    professors: string[];
    subject: string;
    description: string;
    prerequisites: { options: string[] }[];
}