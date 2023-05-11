import React from 'react'
import { createContext, useEffect } from "react";
//import { getEnrollments, getCourse } from "../api_file/getEnrollments"; // someone is working on this
import { Semester, Track } from '../constants/Track';
import { User } from '../types/user';


/* 
  * Note: To use, go to the file you want to use the context in:
  * import { useContext } from 'react'
  * import { UserContext } from '../context/UserContext';
  * { userData, setUserData } = useContext(UserContext);
  * You can then use userData, which is an object that has the user, and the track
  * If you want to change the userData, you can use setUserData(newValue)
*/


export type UserDataType = {
    user: User; // for testing purposes, is a String instead of a User
    track: any;
  };
  
  type UserContextType = {
    userData: UserDataType | null;
    setUserData: React.Dispatch<React.SetStateAction<UserDataType | null>>;
  };
  
  export const UserContext = createContext<UserContextType>({
    userData: {} as UserDataType | null,
    setUserData: (() => {}) as React.Dispatch<
      React.SetStateAction<UserDataType | null>
    >,
  });
  
  type Props = {
    children: React.ReactNode;
  };
  
  export const UserContextProvider = ({ children }: Props) => {
    const [userData, setUserData] = React.useState<UserDataType | null>(null);

    useEffect(() => {
      // this happens when the component is changed
      // i.e page reloads, goes to a different page
      console.log("userContextProvider reloaded")

      /*
      const fromStorage = localStorage.getItem("userData")

      if (fromStorage !== null) {
        setUserData(JSON.parse(fromStorage));
      }
      */

      

    });

    
    useEffect(() => {
      // this happens when userData is changed 
      // i.e setUserData is called somewhere
      console.log("userData changed")

      //localStorage.setItem("userData", JSON.stringify(userData))


    }, [userData]);


    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;
  





