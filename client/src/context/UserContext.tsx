import React from 'react'
import { createContext } from "react";
import { getEnrollments, getCourses } from "../api_file/getEnrollments"; // someone is working on this



export const createTrackFromEnrollments = (enrollments:any) => {
    const track = {semesters: []};
    enrollments.forEach((enrollment:any) => {
        // if an object with the matching year and season exists in the array
        //   access it; else create a new object
        // use the course key to get the course to get the name of the course?
        // and add it to the classes array

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






