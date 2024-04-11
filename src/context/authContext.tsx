"use client"

import { UserType } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

export const AuthContext = createContext<null | any>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }:{children:ReactNode}) => {
    
    const stringedUser = typeof window !== "undefined" 
        ? localStorage.getItem("user")
        : false
    ;

	const [authUser, setAuthUser] = useState(
        stringedUser ? JSON.parse(stringedUser as string) || null : null
    );

    typeof window !== "undefined" && !authUser && localStorage.removeItem("user");

    console.log("authuser state:",authUser);

	return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};