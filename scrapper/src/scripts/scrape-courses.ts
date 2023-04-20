import { getProfessorLinks, insertCourses } from "../database";
import { Season } from "../models";
import { fetchCICSSCourses } from "../scrappers/course-scrapper";

async function scrapeCourses() {
    const links = await getProfessorLinks();

    const courses = await fetchCICSSCourses(2023, Season.spring, links);

    await insertCourses(courses);
    console.log('Courses scraped');
}

async function main() {
    scrapeCourses();
}
main();