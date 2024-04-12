import { MdMoveToInbox } from "react-icons/md";
import styles from "./navbar.module.css"
import UserInfo from "./userInfo/UserInfo";
import Link from "next/link";

const  Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <UserInfo />
                <Link href="/">
                    <MdMoveToInbox size={25} />
                </Link>
            </div>
        </>
    )
};

export default Navbar;