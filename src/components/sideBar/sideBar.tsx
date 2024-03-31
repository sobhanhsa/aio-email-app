import styles from "./sideBar.module.css"

const  SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.compose}>
                نوشتن
                {/* <MdAdd /> */}

            </div>
            <div className={styles.cats}>
                <div className={styles.catItem}>
                صندوق ورودی
                </div>
            </div>
        </div>
    )
};

export default SideBar;