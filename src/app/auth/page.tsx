"use client"

import { FormEvent, useEffect, useState } from "react";
import styles from "./authPage.module.css"

const  authPage = () => {
    const [formInfo,setFormInfo] = useState({
        email:"",
        username:"",
        password:"",
        confirmPassword:"",
    });
    const [canSubmit,setCanSubmit] = useState(true);

    useEffect(() => {
        if (formInfo.confirmPassword !== formInfo.password) setCanSubmit(false)
        else setCanSubmit(true)
    },[formInfo])

    type keysType = "email" | "username" | "password" | "confirmPassword";
    const submitHandler = (e:FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return
        console.log("fetching...")
        setCanSubmit(false);
        fetch(process.env.NEXT_PUBLIC_API+"/signup",{
            method:"POST",
            body:JSON.stringify(formInfo)
        }).then((r) => {
            console.log(r);
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
                    <button className={styles.button}>
                        ثبت نام
                    </button>
                </form>
            </div>   
        </div>
    )
};

export default authPage;