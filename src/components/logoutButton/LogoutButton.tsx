"use client"

import { IoLogOutOutline } from "react-icons/io5";
import styles from "./logoutButton.module.css";
import { useContext } from "react";
import { AuthContext, useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

const LogoutButton  = () => {
    const router = useRouter();
    const {authUser,setAuthUser} = useAuthContext();
    const clickHandler = async() => {
        setAuthUser(null);
        await fetch(process.env.NEXT_PUBLIC_API + "/user/logout",{
            credentials: "include",
        });
        router.push("/auth?authMode=login");

    };
    return (
        <div className={styles.container} onClick={clickHandler}>
            <IoLogOutOutline size={35}/>
        </div>
    )
};

export default LogoutButton;