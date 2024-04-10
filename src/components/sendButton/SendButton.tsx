import styles from "./sendButton.module.css"

const  SendButton = ({
    isLoading
}:{
    isLoading:boolean
}) => {
    return (
        <button className={`${styles.container} ${isLoading && styles.loader}`}>
            ارسال   
        </button>
    )
};

export default SendButton;