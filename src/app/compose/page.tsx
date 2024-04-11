import RepliedForm from "@/components/composePage/repliedForm/RepliedForm";
import styles from "./composePage.module.css"

import RegularForm from "@/components/composePage/Form/RegularForm";

const  ComposePage = async({
    searchParams
}:{
    searchParams?: { [key: string]: string | string[] | undefined }
}) => {

    const isReplied = (
        searchParams?.isReplied &&
        searchParams?.repliedTo && true
    ) ?? false;

    //ref-message id
    const repliedTo = searchParams?.repliedTo;

    let refMessage = isReplied 
        ? (await fetch(process.env.NEXT_PUBLIC_API+"/message/"+repliedTo) as any)
            .reqMessage
        : null;
    // console.log("compose-server-component : ",isReplied);

    return (
        <div className={styles.container}>
            {
                !isReplied && !repliedTo
                ? (
                    <RegularForm />
                )
                : (     
                    <RepliedForm refMessage={refMessage}/>
                )
            }
        </div>
    )
};

export default ComposePage;