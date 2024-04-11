"use client"

import styles from "./regularForm.module.css"
import SendButton from "@/components/sendButton/SendButton";

import { useSendMessage } from "@/hooks/useSendMessage";
import { useState, ChangeEvent, FormEvent } from "react";

const  RegularForm = () => {
    const {sendMessage,isLoading} = useSendMessage();
    const [formInfo,setFormInfo] = useState({
        receivers:[],
        subject:"",
        body:""
    });

    type FormKeysType = "receivers" | "body" | "subject";

    const inputOnChange = (e:ChangeEvent<any>) => {
        setFormInfo(prev  => {
            if (Array.isArray(prev[e.target.name as FormKeysType])) {
                (prev[e.target.name as FormKeysType] as any[]) = [e.target.value];
            } else {
                prev[e.target.name as FormKeysType] = e.target.value;
            }
            console.log(prev)
            return {
                ...prev
            }
        })
    };


    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        sendMessage(formInfo);
    };
    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <input className={styles.EmailInput} 
                required
                name="receivers"
                type="email"
                placeholder="به" 
                onChange={inputOnChange}
            />
            <input className={styles.input} 
                required
                type="text"
                name="subject"
                placeholder="موضوع" 
                onChange={inputOnChange}
            />
            <textarea className={styles.body}
                required
                name="body"
                rows={10}
                placeholder="متن" 
                onChange={inputOnChange}
            />  
            <SendButton  isLoading={isLoading}/>
        </form>
    )
};

export default RegularForm;