"use client"

import { useMessagesStore } from "@/store/useMessages";
import styles from "./SelectedMessagesSinglePage.module.css"
import { MessageType, UserType } from "@/types";
import { useAuthContext } from "@/context/authContext";
import FullMessage from "@/components/fullMessage/FullMessage";
import { useEffect, useRef } from "react";
import { useGetRelatedMessages } from "@/hooks/useGetRelatedMessages";

const  SelectedMessagesSinglePage = ({params}:{
    params:{
        id:string
    }
}) => {
    const selectedMassageRef = useRef(null);

    const {
        relatedMessages,
        loading,
        secondaryPerson
    } = useGetRelatedMessages(params.id);


    
    useEffect(()=> {
        (selectedMassageRef.current as any)
        ?.scrollIntoView({ behavior: "instant" , block:"center"});
    },[relatedMessages]);
    
    if (!loading && !relatedMessages) {
        return <div>
            چنین پیامی یافت نشد
        </div>
    }
    return (
        <div className={styles.container}>
            {
                relatedMessages?.map((msg:MessageType) => {
                    console.log("map : ",msg._id.toString() === params.id);
                    // secondary person role!
                    const sPRole = msg.sender
                        ._id.toString() === secondaryPerson?._id.toString() 
                            ? "sender"
                            : "receiver"
                    
                    return (
                        <FullMessage
                            key={msg._id}
                            message={msg}
                            secondaryPerson={{
                                user:secondaryPerson as UserType,
                                role:sPRole
                            }}
                            selectedRef={msg._id.toString() === params.id 
                                ? selectedMassageRef 
                                : null
                            }
                        />
                    )
                })
            }
        </div>
    )
};

export default SelectedMessagesSinglePage;