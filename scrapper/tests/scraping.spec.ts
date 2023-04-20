import 'jest';
import { fetchCICSSchedule } from '../src/scrappers/schedule-scrapper';

import { fetchCICSProfessor, fetchCICSSProfessors } from "../src/scrappers/professor-scrapper";
import { Season } from '../src/models';

describe('scraping', () => {
    test('professors', async () => {
        const professor = await fetchCICSProfessor('/faculty/directory/adrion_richards');
        expect(professor).toBeDefined();
        return;
    });

    test('sections', async () => {
        const { sections } = await fetchCICSSchedule(2023, Season.spring, []);
        expect(sections.find(s => s.courseKey === 'COMPSCI 240')).toBeDefined();
        return;
    });


})