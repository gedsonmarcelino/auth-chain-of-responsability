export type TUser = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  acceptedTerms: boolean,
}

export type TAuthContext = {
  username?: string,
  password?: string,
  code?: string, 
  hasMFA?: boolean,
  user?: TUser
}
