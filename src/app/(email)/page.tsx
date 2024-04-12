import SideBar from "@/components/sideBar/sideBar";
import styles from "./homePage.module.css"
import Message from "@/components/message/Message";
import Messages from "@/components/messages/Messages";

const  homePage = () => {
    return (
        <div className={styles.container}>
          <SideBar />
          <Messages/>
        </div>
    )
};

export default homePage;