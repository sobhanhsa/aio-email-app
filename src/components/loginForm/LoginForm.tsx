import { toast } from "react-toastify";
import styles from "./loginForm.module.css"
import { FormEvent, useEffect, useState } from "react";

const  LoginForm = ({
    pushFunc
}:{
    pushFunc:(route:string)=>void
}) => {
    
    const [formInfo,setFormInfo] = useState({
        emailOrUsername:"",
        username:"",
        password:"",
    });
    const [canSubmit,setCanSubmit] = useState(true);

    const [passwordError,setPasswordError] = useState<null | string>(null);

    type keysType = "emailOrUsername" | "password";
    const submitHandler = async(e:FormEvent) => {
        e.preventDefault();
        if (!canSubmit) {
            setPasswordError("رمز ها مطابقت ندارند");
            return
        }else setPasswordError(null);
        console.log("fetching...");
        setCanSubmit(false);
        await fetch(process.env.NEXT_PUBLIC_API+"/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body:JSON.stringify({
                email:formInfo.emailOrUsername.includes("@") 
                    ? formInfo.emailOrUsername
                    : ""
                ,
                username:formInfo.emailOrUsername.includes("@") 
                    ? "" 
                    : formInfo.emailOrUsername
                ,
                password:formInfo.password,
            })
        }).then((r) => {
            console.log("first then",r);
            if (!r.ok) {
                switch (r.status) {
                    case 422 :
                        throw new Error("اطلاعات نادرست")
                    case 403 :
                        throw new Error("ایمیل یا نام کاربری تکراری")
                    case 400 :
                        throw new Error("چنین حسابی وجود ندارد")
                    default:
                        throw new Error("از سمت سرور خطایی رخ داد")
                }
            };
            return r.json()
        }).then((body) => {
            localStorage.setItem("user",JSON.stringify(body.user));
            pushFunc("/");
        }).catch((err:{
            message:string
        }) => {
            let finalMessage = err.message;
            if (err.message.toUpperCase() === "FAILED TO FETCH") {
                finalMessage = "شکست در برقراری ارتباط";
            }
            toast.error(finalMessage);
        })
        setCanSubmit(true);
    };
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submitHandler}>
                    <input className={styles.input} 
                        placeholder="ایمیل یا نام کاربری"type="text" 
                        required
                        name="emailOrUsername"
                        onChange={(e) => {
                            setFormInfo(prev  => {
                                prev[e.target.name as keysType] = e.target.value;
                                console.log(prev)
                                return {
                                    ...prev
                                }
                            })
                        }}
                    />
                    
                    <input className={styles.input}
                        required
                        placeholder="رمز عبور"type="password"
                        name="password"
                        onChange={(e) => {
                            setFormInfo(prev  => {
                                prev[e.target.name as keysType] = e.target.value;
                                console.log(prev)
                                return {
                                    ...prev
                                }
                            })
                        }}
                    />
                    <p className={styles.inputError}>
                        {passwordError}
                    </p>
                    <button className={styles.button}>
                        ورود
                    </button>
                </form>   
        </div>
    )
};

export default LoginForm;