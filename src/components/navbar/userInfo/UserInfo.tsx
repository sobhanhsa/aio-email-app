"use client"

import LogoutButton from "@/components/logoutButton/LogoutButton";
import styles from "./userInfo.module.css"
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useAuthContext } from "@/context/authContext";

const  UserInfo = () => {

    const [isOpen,setIsOpen] = useState(false);
    const {authUser} = useAuthContext();

    return (
        <>
            {
                authUser 
                && 
                (
                    <div className={styles.container} onClick={() => {setIsOpen(p => !p)}}>
                        <FaUser size={15} className={styles.userIcon}/>

                        <p className={styles.username}>
                            {authUser.username}
                        </p>
                        {/* <p className={styles.email}>
                            sobhan@me.com
                        </p> */}
                        {isOpen && <LogoutButton size={20}/>}   
                    </div>
                )
            }
        </>
    )
};

export default UserInfo;