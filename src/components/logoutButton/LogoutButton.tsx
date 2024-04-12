"use client"

import { IoLogOutOutline } from "react-icons/io5";
import styles from "./logoutButton.module.css";
import { useContext } from "react";
import { AuthContext, useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { SlLogout } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";

const LogoutButton  = ({
    size
}:{
    size:number
}) => {
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
            <BiLogOut  size={size} />
        </div>
    )
};

export default LogoutButton;