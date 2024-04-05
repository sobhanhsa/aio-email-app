import Message from "@/components/message/Message";
import styles from "./messages.module.css"

const  Messages = () => {
    return (
        <div className={styles.container}>
            <Message sender="sobhan"
                subject="سلام یرگه"
                date="2024/02/11"
            />
            <Message sender="sobhan"
                subject="سلام یرگه"
                date="2024/02/11"
            />
            <Message sender="sobhan"
                subject="سلام یرگه"
                date="2024/02/11"
            />   
        </div>
    )
};

export default Messages;