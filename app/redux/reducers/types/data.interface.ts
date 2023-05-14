export interface IData {
  accessToken: string
  refreshToken: string
  user: IUser
}

interface IUser {
  email: string
  id: string
  phonenumber: string
  isActivated: boolean
}
//return
export interface Payload {
  password:string;
  email?: string;
  phonenumber?:string;
}