import axios, { AxiosInstance, AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';
import { Course as Course, Season, Section, SectionType } from './models';
import { fetchCICSProfessor, fetchCICSSProfessors } from './progessor-scrapper';
import { getProfessorRating } from './rate-my-professor';


async function main() {
    fetchCICSSProfessors();
}
main();