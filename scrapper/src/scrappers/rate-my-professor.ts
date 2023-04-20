import ratings, { ITeacherFromSearch, ITeacherPage } from '@mtucourses/rate-my-professors';

const UMASS_ID = 'U2Nob29sLTE1MTM=';


interface RateMyProfessorData {
    rating: number | null,
    difficulty: number | null,
    reviews: number | null
}
export async function getProfessorRating(name: string): Promise<RateMyProfessorData> {
    const teachers = await ratings.searchTeacher(name, UMASS_ID);
    for (let t of teachers) {
        const teacher = await ratings.getTeacher(t.id);
        if (teacher.department == 'Computer Science') {
            const data = {
                rating: teacher.avgRating,
                difficulty: teacher.avgDifficulty,
                reviews: teacher.numRatings
            };

            return data;
        }
    }
    return {
        rating: null,
        difficulty: null,
        reviews: null
    };




}