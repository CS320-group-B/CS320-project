import React from 'react'
import { createContext } from "react";
import { getEnrollments, getCourse } from "../api_file/getEnrollments"; // someone is working on this
import { Semester, Track } from '../constants/Track';
/*
const courseSchema = mongoose.Schema({
    name: String,
    key: String,
    credits: Number,
    number: String,
    professors: [{"professor_key": String}],
    subject: String,
    description: String,
    prerequisites: [{"prerequisite_key": String}]
});

const enrollmentSchema = mongoose.Schema({
    id: String,
    year: Number,
    season: String,
    student_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    course_key: { type: String, required: true },
    date: Date
});

export const track: Track = {
    semesters: [
        {
            year: 2022,
            season: "Fall",
            classes: [
                "COMPSCI 220",

                "MATH 235",
                "COMPSCI 230",
                "KIN 110"
            ]
        },
    ]
}

*/


export const createTrackFromEnrollments = async (enrollments:any) => {
    const track:Track = {semesters: []};
    enrollments.forEach(async (enrollment:any) => {
        // if an object with the matching year and season exists in the array
        //   access it; else create a new object
        // use the course key to get the course to get the name of the course?
        // and add it to the classes array

        const year = enrollment.year;
        const season = enrollment.season;
        const index = track.semesters.findIndex(x => x.year === year && x.season === season);
        const className = await getCourse(/* parameters here after api_file is completed */);

        if (index === -1) {
            track.semesters.push({
                year: year,
                season: season,
                classes: [className]
            });
        } else {
            track.semesters[index].classes.push(className);
        }

    });

    return track;
}


export interface UserDataInterface {
    user: string;
    track: any;
  }

export const UserContext = createContext({
    userData: {} as Partial<UserDataInterface>,
    setUserData: {} as React.Dispatch<React.SetStateAction<Partial<UserDataInterface>>>,
});

type Props = {
    children: React.ReactNode
}

export const UserContextProvider = ({ children }:Props) => {
    const [userData, setUserData] = React.useState({} as Partial<UserDataInterface>);
    return(
        <UserContext.Provider value={ {userData, setUserData} } >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext 






