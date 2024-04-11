
"use client"

import styles from "./repliedForm.module.css"
import SendButton from "@/components/sendButton/SendButton";
import { MessageType, UserType } from "@/types";

import { useSendMessage } from "@/hooks/useSendMessage";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useAuthContext } from "@/context/authContext";
import { useGetMessage } from "@/hooks/useGetMessage";
import RefMessage from "@/components/refMessage/RefMessage";

const  RepliedForm = ({id}:{id:string}) => {
    // if this component renders
    // we are sure that we have "RepliedTo" query

    const {message:refMessage,loading:getLoading,secondaryPerson}:{
        message:MessageType|null,
        loading:boolean,   
        secondaryPerson:UserType|null
    } = useGetMessage(id);

    const {sendMessage,isLoading} = useSendMessage();

    const [formInfo,setFormInfo] = useState({
        subject:"",
        body:""
    });

    type FormKeysType = "body" | "subject";

    const inputOnChange = (e:ChangeEvent<any>) => {
        setFormInfo(prev  => {
            
            prev[e.target.name as FormKeysType] = e.target.value;
            
            console.log(prev)
            return {
                ...prev
            }
        })
    };


    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        secondaryPerson && refMessage && sendMessage({
            ...formInfo,
            receivers:[secondaryPerson.email],
            isReplied:true,
            repliedTo:refMessage._id
        });
    };

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <RefMessage message={refMessage} />
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

export default RepliedForm;