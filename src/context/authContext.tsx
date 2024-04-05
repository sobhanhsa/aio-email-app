"use client"

import { UserType } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";
import {useCookies} from "next-client-cookies";

export const AuthContext = createContext<null | any>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }:{children:ReactNode}) => {
    const cookies = useCookies();


    const stringedUser = cookies.get("user");

	const [authUser, setAuthUser] = useState(
        stringedUser ? JSON.parse(stringedUser as string) || null : null
    );

    console.log("authuser state:",authUser);

	return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};