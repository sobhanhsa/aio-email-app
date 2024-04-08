import { MdAdd } from "react-icons/md";
import styles from "./sideBar.module.css"
import { IoLogOutOutline } from "react-icons/io5";
import LogoutButton from "../logoutButton/LogoutButton";

const  SideBar = () => {
    return (
        <div className={styles.container}>
            <div>
                <LogoutButton />
            </div>
            <div className={styles.compose}>
                نوشتن
                <MdAdd size={30} />

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