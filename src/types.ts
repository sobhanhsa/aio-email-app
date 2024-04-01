export type UserType = {
    _id:string,
    createdAt:Date,
    updatedAt:Date,
    username:string,
    email:string,
    hash:string,
    messages:any[] | []
}