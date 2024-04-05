import { cookies } from "next/headers";
import Client from "./client";
import { redirect } from "next/navigation";

const AuthPage  = () => {
    if(cookies().get("user")) {
        redirect("/")
    }
    return (
        <div>
            <Client />
        </div>
    )
};

export default AuthPage;