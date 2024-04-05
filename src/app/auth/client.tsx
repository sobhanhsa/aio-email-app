"use client"

import SignupForm from "@/components/signupForm/SignupForm";
import styles from "./authPage.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Client = () => {

    const signupSwitch = "قبلا ثبت نام کردی ؟ ";
    const loginSwitch = "هنوز ثبت نام نکردی؟";

    const {replace} = useRouter();
    
    const searchParams = useSearchParams();
    
    const path = usePathname();
    
    const params = new URLSearchParams(searchParams);

    const authMode = params.get("authMode") || "signup";

    const handleSwitch = () => {
        params.set("authMode",authMode === "signup" ? "login" : "signup");
        replace(`${path}?${params}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    به ایومیل خوش اومدی
                </p>
                <SignupForm />
                <p className={styles.switch} onClick={handleSwitch}>
                    {
                        authMode === "signup" ? signupSwitch : loginSwitch
                    }
                </p>
            </div>   
        </div>
    )
};

export default Client;