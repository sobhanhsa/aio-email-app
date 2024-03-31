import SideBar from "@/components/sideBar/sideBar";
import styles from "./homePage.module.css"

const  homePage = () => {
    return (
        <div className={styles.container}>
          <SideBar />
          <div className={styles.messages}>
            <div className={styles.message}>
              <div className={styles.textContainer}>
                <p className={styles.sender}>
                  sobhan
                </p>
                :
                <p className={styles.subject}>
                  سلام یره گه
                </p>
              </div>
              <p className={styles.date}>
                2024/5/3
              </p>
            </div>
            <div className={styles.message}>
              <div className={styles.textContainer}>
                <p className={styles.sender}>
                  sobhan
                </p>
                :
                <p className={styles.subject}>
                  سلام یره گه
                </p>
              </div>
              <p className={styles.date}>
                2024/5/3
              </p>
            </div>
          </div>
        </div>
    )
};

export default homePage;