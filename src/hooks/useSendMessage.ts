import { useState } from "react";
import { toast } from "react-toastify";

type props = {
    receivers:string[]
    subject:string
    body:string
}
export const useSendMessage = () =>{
    const [isLoading,setIsLoading] = useState(false);
    const sendMessage = async(props:props) => {
        setIsLoading(true);
        try {
            const res = await fetch(
                process.env.NEXT_PUBLIC_API+"/message/send/"+props.receivers[0],
                {
                    headers:[["Content-Type","application/json"]],
                    method:"POST",
                    credentials:"include",
                    body:JSON.stringify({
                        subject:props.subject,
                        body:props.body
                    })
                }
            );
            if (!res.ok) throw new Error("خطایی رخ داد");
            
        } catch (err:any) {
            toast.error(err.message)
        } finally {
            setIsLoading(false);
        }
    }
    
    return {
        sendMessage,
        isLoading
    }
};