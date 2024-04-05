"use client"

import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./authPage.module.css"
import { toast } from "react-toastify";
import { AuthContext } from "@/context/authContext";


const authPage = () => {
    
    const [formInfo,setFormInfo] = useState({
        email:"",
        username:"",
        password:"",
        confirmPassword:"",
    });
    const [canSubmit,setCanSubmit] = useState(true);

    const [passwordError,setPasswordError] = useState<null | string>(null);

    useEffect(() => {
        if (formInfo.confirmPassword !== formInfo.password) {
            setCanSubmit(false)
        }
        else setCanSubmit(true)
    },[formInfo])

    type keysType = "email" | "username" | "password" | "confirmPassword";
    const submitHandler = async(e:FormEvent) => {
        e.preventDefault();
        if (!canSubmit) {
            setPasswordError("رمز ها مطابقت ندارند");
            return
        }else setPasswordError(null);
        console.log("fetching...");
        setCanSubmit(false);
        await fetch(process.env.NEXT_PUBLIC_API+"/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body:JSON.stringify({
                email:formInfo.email,
                username:formInfo.username,
                password:formInfo.password,
            })
        }).then((r) => {
            console.log("first then",r);
            if (!r.ok) {
                switch (r.status) {
                    case 422 :
                        throw new Error("اطلاعات نادرست")
                    case 403 :
                        throw new Error("ایمیل یا نام کاربری تکراری")
                    default:
                        throw new Error("از سمت سرور خطایی رخ داد")
                }
            };
            toast.success("اکانت ایومیل شما با موفقیت ایجاد شد");
        }).catch((err:{
            message:string
        }) => {
            let finalMessage = err.message;
            if (err.message.toUpperCase() === "FAILED TO FETCH") {
                finalMessage = "شکست در برقراری ارتباط";
            }
            toast.error(finalMessage);
        })
        setCanSubmit(true);
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    به ایومیل خوش اومدی
                </p>
                <form className={styles.form} onSubmit={submitHandler}>
                    <input className={styles.input} 
                        placeholder="ایمیل"type="email" 
                        required
                        name="email"
                        onChange={(e) => {
                            setFormInfo(prev  => {
                                prev[e.target.name as keysType] = e.target.value;
                                console.log(prev)
                                return {
                                    ...prev
                                }
                            })
                        }}
                    />
                    <input className={styles.input}
                        required
                        placeholder="نام کاربری" type="username"
                        name="username"
                        onChange={(e) => {
                            setFormInfo(prev  => {
                                prev[e.target.name as keysType] = e.target.value;
                                console.log(prev)
                                return {
                                    ...prev
                                }
                            })
                        }}
                    />
                    <input className={styles.input}
                        required
                        placeholder="رمز عبور"type="password"
                        name="password"
                        onChange={(e) => {
                            setFormInfo(prev  => {
                                prev[e.target.name as keysType] = e.target.value;
                                console.log(prev)
                                return {
                                    ...prev
                                }
                            })
                        }}
                    />
                    <input className={styles.input} 
                        required
                        placeholder="دوباره رمز عبور" type="password"
                        name="confirmPassword"
                        onChange={(e) => {
                            setFormInfo(prev  => {
                                prev[e.target.name as keysType] = e.target.value;
                                console.log(prev)
                                return {
                                    ...prev
                                }
                            })
                        }}
                    />
                    <p className={styles.inputError}>
                        {passwordError}
                    </p>
                    <button className={styles.button}>
                        ثبت نام
                    </button>
                </form>
            </div>   
        </div>
    )
};

export default authPage;