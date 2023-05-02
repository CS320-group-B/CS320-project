import { MongoClient } from 'mongodb';
import { Course, Professor, ProfessorLink, Section } from './models';
// or as an es module:
// import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://scrapper:6vmYzsTV3nMu6dl@cluster0.sbua2r4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let initialized = false;
export async function runDatabase() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');


    // the following code examples can be pasted here...

}

async function initializeDB() {
    // Use connect method to connect to the server
    if (!initialized) {
        await client.connect();
        initialized = true;
    }

}

export async function insertProfessors(professors: Professor[]) {
    await initializeDB();
    const db = client.db('public');
    const collection = db.collection('professors');
    await collection.insertMany(professors);
    return professors;
}

export async function deleteProfessors() {
    await initializeDB();
    const db = client.db('public');
    const collection = db.collection('professors');
    await collection.deleteMany({});
    return true;
}

export async function deleteSections() {
    await initializeDB();
    const db = client.db('public');
    const collection = db.collection('sections');
    await collection.deleteMany({});
    return true;
}

export async function insertCourses(courses: Course[]) {
    await initializeDB();
    const db = client.db('public');
    const collection = db.collection('courses');
    await collection.insertMany(courses);
    return courses;
}

export async function insertSesctions(sections: Section[]) {
    await initializeDB();
    const db = client.db('public');
    const collection = db.collection('sections');
    await collection.insertMany(sections);
    return sections;
}

export async function getProfessors(): Promise<Professor[]> {
    await initializeDB();
    const db = client.db('public');
    const collection = db.collection('professors');
    const array: any = await collection.find({}).toArray();
    return array;
}

export async function getProfessorLinks(): Promise<ProfessorLink[]> {
    await initializeDB();
    const db = client.db('public');
    const collection = db.collection('professors');
    const array: any[] = await collection.find({}).toArray();
    return array.map((professor) => {
        const { name, key } = professor;
        return { name, key };
    });
}

//6vmYzsTV3nMu6dl