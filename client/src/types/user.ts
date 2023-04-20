export type User = {
    id: string;
    name: string;
    bio: string;
    email: string;
    createdAt: string;
    avatar: string;
    graduation: {
        year: number,
        season: string,
    },
    subfield: string,
    major: string,
    taken_courses: string;
    planned_courses: string;
}