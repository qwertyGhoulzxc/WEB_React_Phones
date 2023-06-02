import {IUser} from "./IUser";

export interface AuthResponse{
    accessToken:string;
    refreshToken:string;
    user:IUser

}
export interface ReloadData{
    user:IUser
}

export interface ChangePass{
    changePassword:string;
    newPass:string
}