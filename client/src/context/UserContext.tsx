import React from 'react'
import { createContext } from "react";
//import { getEnrollments, getCourse } from "../api_file/getEnrollments"; // someone is working on this
import { Semester, Track } from '../constants/Track';
import { User } from '../types/user';


export type UserDataType = {
    user: String; // for testing purposes, is a String instead of a User
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
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;
  





