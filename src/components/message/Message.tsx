import styles from "./message.module.css"

type MessageComponentProps = {
    sender:string
    subject:string
    date:string
}

const  Message = (props:MessageComponentProps) => {
    return (
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
    )
};

export default Message;