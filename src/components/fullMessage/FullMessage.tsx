import { MessageType, UserType } from "@/types";
import styles from "./fullMessage.module.css"

type props = {
    message:MessageType,
    secondaryPerson:{
        user:UserType,
        role:"sender"|"receiver"
    }
}

const  FullMessage = (props:props) => {
    return (
        <div className={styles.container} key={props.message._id}>
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