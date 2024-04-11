import { MessageType } from "@/types";
import styles from "./refMessage.module.css"
import Link from "next/link";

const  RefMessage = ({
    message
}:{
    message:MessageType|null
}) => {
    return (
        <div className={styles.container}>
            در پاسخ به
            {"   "}
            : 
            {"   "}
            <Link href={"/"+message?._id}>
                <span className={styles.sub} >
                    {message?.subject}
                </span>
            </Link>
        </div>
    )
};

export default RefMessage;