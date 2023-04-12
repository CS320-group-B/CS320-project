import { deleteSections, getProfessorLinks, insertSesctions } from "../database";
import { Season } from "../models";
import { fetchCICSSchedule } from "../scrappers/schedule-scrapper";

async function main() {
    await deleteSections();
    const links = await getProfessorLinks();
    const { sections } = await fetchCICSSchedule(2023, Season.spring, links);
    await insertSesctions(sections);
    console.log('Sections scraped');
}
main();