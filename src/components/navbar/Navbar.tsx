import { MdMoveToInbox } from "react-icons/md";
import styles from "./navbar.module.css"
import Link from "next/link";
import dynamic from "next/dynamic";

const NOSSRUserInfo = dynamic(
    () => import('./userInfo/UserInfo'), { ssr: false }
);


const  Navbar = () => {
    return (
        <div className={styles.container}>
            <NOSSRUserInfo />
            <Link href="/">
                <MdMoveToInbox size={25} />
            </Link>
        </div>
    )
};

export default Navbar;