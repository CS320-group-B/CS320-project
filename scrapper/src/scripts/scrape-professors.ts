import { deleteProfessors, insertProfessors } from "../database";
import { fetchCICSSProfessors } from "../scrappers/professor-scrapper";

async function scrapeProfessors() {
    await deleteProfessors();
    const professors = await fetchCICSSProfessors();
    await insertProfessors(professors);
    console.log('Professors scraped');
}

async function main() {
    await scrapeProfessors();
}
main();