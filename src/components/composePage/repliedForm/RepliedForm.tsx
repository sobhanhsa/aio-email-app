
"use client"

import styles from "./repliedForm.module.css"
import SendButton from "@/components/sendButton/SendButton";
import { MessageType, UserType } from "@/types";

import { useSendMessage } from "@/hooks/useSendMessage";
import { useState, ChangeEvent, FormEvent } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useAuthContext } from "@/context/authContext";

const  RepliedForm = ({refMessage}:{refMessage:MessageType|null}) => {
    // if this component renders
    // we are sure that we have "RepliedTo" query

    const searchParams = useSearchParams();
    const repliedMsgId = searchParams.get("repliedTo");

    if (!refMessage) {
        throw new Error("refmessage is null");
    }

    const {authUser}:{authUser:UserType} = useAuthContext();

    const secondaryPerson : UserType= refMessage.sender._id.toString() === authUser._id.toString()
        ? refMessage.receivers[0]
        : refMessage.sender;
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
        sendMessage({
            ...formInfo,
            receivers:[secondaryPerson.email],
            isReplied:true,
            repliedTo:refMessage._id
        });
    };

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            
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