export interface ForgetPasswordData{
    lang:string,
    phone:number
}

export interface ChangePasswordData{
    user_id:number,
    code:string,
    password:string
}
