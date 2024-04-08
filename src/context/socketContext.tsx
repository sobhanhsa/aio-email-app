"use client"

import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { useAuthContext } from "./authContext";
import {io,Socket} from "socket.io-client";

const SocketContext = createContext<null | any>(null);

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }:{children:ReactNode}) => {
	const [socket, setSocket] = useState<null | Socket>(null);
	const { authUser } = useAuthContext();

	useEffect(() => 
    {
		if (authUser) {
			const socket : Socket = io(process.env.NEXT_PUBLIC_API as string, {
				query: {
					userId: authUser._id,
				},
			});
			
			console.log("user id : ",authUser._id);
            console.log("socket :",socket);

			setSocket(socket);

			return () => {socket.close()};
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};