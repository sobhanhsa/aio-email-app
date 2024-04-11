import { UserType } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useGetRelatedMessages = (id:string) => {
    const [loading, setLoading] = useState(true);
    const [relatedMessages,setRelatedMessages] = useState<null | any[]>(null); 
    const [secondaryPerson,setSecondaryPerson] = useState<null | UserType>(null);

    const getRelatedMessages = async (id:string) => {
        setLoading(true);
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API+"/message/"+id,{
                credentials:"include"
            });
            if (!res.ok) throw new Error(res.status.toString());
            const data = await res.json();
            console.log("related messages : ",data.messages);
            setRelatedMessages(data.messages);
            setSecondaryPerson(data.secondaryPerson);

        } catch (error:any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRelatedMessages(id);
    },[]);

	return { relatedMessages, secondaryPerson,loading , getRelatedMessages};
};