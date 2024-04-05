"use client"

import SignupForm from "@/components/signupForm/SignupForm";
import styles from "./authPage.module.css"

const Client = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    به ایومیل خوش اومدی
                </p>
                <SignupForm />
            </div>   
        </div>
    )
};

export default Client;