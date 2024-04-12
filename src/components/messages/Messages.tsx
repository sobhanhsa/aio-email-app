"use client"

import Message from "@/components/message/Message";
import styles from "./messages.module.css"
import { useMessagesStore } from "@/store/useMessages";
import { MessageType } from "@/types";
import { useListenMessages } from "@/hooks/useListenMessages";
import { useGetMessages } from "@/hooks/useGetMessages";

const  Messages = () => {
    useListenMessages();
    useGetMessages();
    const {messages}:{messages:MessageType[]} = useMessagesStore();
    console.log(messages)
    return (
        <div className={styles.container}>
            {
                messages.map((msg:MessageType) => (
                    <Message
                        isReplied={msg.isReplied}
                        id={msg._id}
                        key={msg._id}
                        sender={msg.sender.username}
                        subject={msg.subject}
                        date={msg.createdAt.toString().slice(0,10)}
                    />
                ))
            }
        </div>
    )
};

export default Messages;