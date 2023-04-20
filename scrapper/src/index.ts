import axios, { AxiosInstance, AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';
import { runDatabase } from './database';
import { Course as Course, Season, Section, SectionType } from './models';
import { fetchCICSProfessor, fetchCICSSProfessors } from './scrappers/professor-scrapper';
import { getProfessorRating } from './scrappers/rate-my-professor';


// async function main() {
//     //fetchCICSSProfessors();

//     const professors = await fetchCICSSProfessors();
//     console.log(professors);
// }
// main();