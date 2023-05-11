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
  setUserData: (() => { }) as React.Dispatch<
    React.SetStateAction<UserDataType | null>
  >,
});

type Props = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = React.useState<UserDataType | null>(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};




export default UserContext;






