import React from 'react'
import { createContext, useContext, useState, PropsWithChildren} from "react";


type UserContextType = {
    userState: number;
    setUserState: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext<UserContextType | null>(null)

type Props = {
    children: React.ReactNode
}

export const UserContextProvider = ({ children }:Props) => {
    const [userState, setUserState] = React.useState(0);
    return(
        <UserContext.Provider value={ {userState, setUserState} }>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext 