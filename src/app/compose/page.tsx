import SendButton from "@/components/sendButton/SendButton";
import styles from "./composePage.module.css"

const  ComposePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <input className={styles.EmailInput} type="email" placeholder="به" />
                <input className={styles.input} type="text" placeholder="موضوع" />
                <textarea className={styles.body} rows={10} placeholder="متن"
                    
                />  
                <SendButton  isLoading={false}/>
            </div>
        </div>
    )
};

export default ComposePage;