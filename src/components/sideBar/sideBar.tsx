import { MdAdd } from "react-icons/md";
import styles from "./sideBar.module.css"
import { IoLogOutOutline } from "react-icons/io5";
import LogoutButton from "../logoutButton/LogoutButton";
import Link from "next/link";

const  SideBar = () => {
    return (
        <div className={styles.container}>
            <div>
                <LogoutButton />
            </div>
            <Link href={"/compose"}>
                <div className={styles.compose}>
                    نوشتن
                    <MdAdd size={30} />

                </div>
            </Link>
            <div className={styles.cats}>
                <div className={styles.catItem}>
                صندوق ورودی
                </div>
            </div>
        </div>
    )
};

export default SideBar;