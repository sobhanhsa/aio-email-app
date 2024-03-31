import SideBar from "@/components/sideBar/sideBar";
import styles from "./homePage.module.css"
import Message from "@/components/message/Message";

const  homePage = () => {
    return (
        <div className={styles.container}>
          <SideBar />
          <div className={styles.messages}>
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
        </div>
    )
};

export default homePage;