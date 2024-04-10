import { useMessagesStore } from "@/store/useMessages";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
	const { messages, setMessages } = useMessagesStore();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(process.env.NEXT_PUBLIC_API+"/message",{
                    credentials:"include"
                });
				const data = await res.json();
				if (data.error) throw new Error(data.error);
                console.log(data);
				setMessages(data.messages);
			} catch (error:any) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
        getMessages();

	}, []);

	return { messages, loading };
};