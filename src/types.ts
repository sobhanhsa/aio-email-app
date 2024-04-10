export type UserType = {
    _id:string,
    createdAt:Date,
    updatedAt:Date,
    username:string,
    email:string,
    hash:string,
    messages:any[] | []
}

export type MessageType = {
    _id:string,
    createdAt:Date,
    updatedAt:Date,
    receivers:(string | UserType)[],
    sender:UserType,
    subject:string,
    body:string,
    isReplied:boolean,
    repliedTo?:string | MessageType
};