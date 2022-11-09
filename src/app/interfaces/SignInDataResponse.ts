import { IUser } from "./User"

export interface SignInDataResponse {
    user: IUser
    token: string
    tokenExpires: number
  }