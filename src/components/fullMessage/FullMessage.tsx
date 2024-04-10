import { MessageType, UserType } from "@/types";
import styles from "./fullMessage.module.css"
import { MutableRefObject } from "react";

type props = {
    message:MessageType,
    secondaryPerson:{
        user:UserType,
        role:"sender"|"receiver"
    }
    selectedRef:null|MutableRefObject<any>
}

const  FullMessage = (props:props) => {
    return (
        <div 
            className={`${styles.container} ${props.selectedRef ? styles.selected : ""}`} 
            key={props.message._id} ref={props.selectedRef}
        >
            <p className={styles.subject}>
                {props.message.subject}
            </p>
            <p className={styles.date}>
                {props.message.createdAt?.toString().split("T")}
            </p>
            <p className={styles.secondaryPerson}>
                {props.secondaryPerson.role === "sender" 
                    ? "از"
                    : "به"
                }
                :
                {props.secondaryPerson.user.email}
            </p>
            <p className={styles.body}>
                {props.message.body}
            </p>
        </div>
    )
};

export default FullMessage;