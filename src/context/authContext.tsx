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

	const [authUser, setAuthUser] = useState(
        JSON.parse(cookies.get("user") as string) || null
    );

    console.log(authUser);

	return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};