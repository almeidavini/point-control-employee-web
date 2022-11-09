import { ICompany } from "./company"

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  role: string
  firstAccess: boolean
  companyCnpj?: string | null
  createdAt: Date
  updatedAt: Date
  company?: ICompany
}