import { useAuthContext } from "@/context/authContext";
import { MessageType, UserType } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useGetMessage = (id:string) => {

    const [loading, setLoading] = useState(false);
    const [message,setMessage ] = useState<null | MessageType>(null);
    const [secondaryPerson,setSecondaryPerson] = useState<null | UserType>(null);

    const { authUser } = useAuthContext();


    const getMessage = async () => {
        setLoading(true);
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API+"/message/"+id,{
                credentials:"include"
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            console.log(data);
            setMessage(data.reqMessage);
        } catch (error:any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMessage();
    },[])
    
    useEffect(() => {
        setSecondaryPerson((prev) => {
            if (!message) return prev
            console.log("useGetMessage-hook : ",message);
            return (
                message.sender._id.toString() === authUser._id.toString()
                    ? message.receivers[0]
                    : message.sender
            )
        }
        );
    },[message])


	return { message, loading , secondaryPerson};
};