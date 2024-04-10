"use client"

import Link from "next/link"
import styles from "./message.module.css"

type MessageComponentProps = {
    sender:string
    subject:string
    date:string
    id:string
}

const  Message = (props:MessageComponentProps) => {
    return (
        <Link href={"/"+props.id} key={props.id}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.sender}>
                        {props.sender}
                    </p>
                    :
                    <p className={styles.subject}>
                        {props.subject}
                    </p>
                </div>
                <p className={styles.date}>
                    {props.date}
                </p>
            </div>
        </Link>
    )
};

export default Message;