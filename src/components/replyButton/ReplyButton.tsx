import { FaReply } from "react-icons/fa";
import styles from "./replyButton.module.css"
import Link from "next/link";

const  ReplyButton = ({id}:{id:string}) => {
    return (
        <Link href={"/compose?isReplied=true&repliedTo="+id}>
            <div className={styles.container}>
                <FaReply />   
            </div>
        </Link>
    )
};

export default ReplyButton;