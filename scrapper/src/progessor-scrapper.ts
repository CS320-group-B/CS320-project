import { Season, Course, Professor } from "./models";
import { fetchCICSPage, getSeasonName, multiIncludes } from "./util";
import * as cheerio from 'cheerio';
import { getProfessorRating } from "./rate-my-professor";




export async function fetchCICSSProfessors(): Promise<any> {

    const html = await fetchCICSPage('https://www.cics.umass.edu/people/all-faculty-staff', 'No connection');
    const $ = cheerio.load(html);

    let professors: Professor[] = [];
    let links = [];
    let cons = true;
    $('.views-row').map(async (_, element) => {
        const name = $(element).find('.field-content a').text().trim();
        const link = $(element).find('.field-content a').attr('href');
        const position = $(element).find('.views-field-field-position').text().trim();
        if (multiIncludes(position, ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer', 'Teaching'])) {


            let email = $(element).find('.views-field-field-email').text().replace('E:', '').trim();
            email = email.length > 0 ? email : null;


            let phone = $(element).find('.views-field-field-phone').text().replace('P:', '').trim();
            phone = phone.length > 0 ? phone : null;
            let office = $(element).find('.views-field-field-location').text().replace('O:', '').trim();
            office = office.length > 0 ? office : null;

            const professor: Professor = {
                name: {
                    first: name.split(',')[0].trim(),
                    last: name.split(',')[1].trim()
                },
                email: email,
                phone: phone,
                tags: [],
                office: office,
                ... await fetchCICSProfessor(link),
                ...await getProfessorRating(name.replace(',', '')),
                id: name.replace(',', '').toLowerCase()

            }
            console.log(professor);
            professors.push(professor);
        }

    });


}

export async function fetchCICSProfessor(link: string): Promise<any> {
    let webpage = `https://www.cics.umass.edu${link}`;

    const html = await fetchCICSPage(webpage, 'No connection');
    const $ = cheerio.load(html);
    let website = $('.field-name-field-link a').attr('href') || null;
    const interests = $("div.label-above:contains('Interests')").parent().next().text().trim();
    const research = $("div.label-above:contains('Research')").parent().next().text().trim();
    const activities = $("div.label-above:contains('Activities & Awards')").parent().next().text().trim();
    return {
        website: website,
        webpage: webpage,
        interests: interests,
        research: research,
        activities: activities
    }

}