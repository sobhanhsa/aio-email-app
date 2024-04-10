"use client"

import { useMessagesStore } from "@/store/useMessages";
import styles from "./SelectedMessagesSinglePage.module.css"
import { MessageType, UserType } from "@/types";
import { useAuthContext } from "@/context/authContext";
import FullMessage from "@/components/fullMessage/FullMessage";

const  SelectedMessagesSinglePage = ({params}:{
    params:{
        id:string
    }
}) => {
    const {messages} = useMessagesStore();
    const selectedMessage = messages.find(msg => msg._id === params.id);
    if (!selectedMessage) {
        return (<div>
            چنین پیامی وجود ندارد
        </div>)
    }
    const {authUser}:{authUser:UserType} = useAuthContext();
    const secondaryPerson : UserType = selectedMessage?.sender !== authUser 
    ? selectedMessage.sender
    : selectedMessage.receivers[0];
    const relatedMessages = messages.filter((msg:MessageType) => {
        return ( msg.sender._id === secondaryPerson._id 
            || msg.receivers[0]._id === secondaryPerson._id) 
    });
    console.log("singlePage :",secondaryPerson);
    console.log("singlePage-messages :",messages);
    return (
        <div className={styles.container}>
            {
                relatedMessages.map(msg => {
                    // secondary person role!
                    const sPRole = msg.sender === secondaryPerson 
                        ? "sender"
                        : "receiver"
                    return (
                        <FullMessage
                            key={msg._id}
                            message={msg}
                            secondaryPerson={{
                                user:secondaryPerson,
                                role:sPRole
                            }}
                        />
                    )
                })
            }
        </div>
    )
};

export default SelectedMessagesSinglePage;