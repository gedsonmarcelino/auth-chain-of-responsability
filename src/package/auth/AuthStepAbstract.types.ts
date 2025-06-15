export type TUser = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export type TAuthContext = {
  username?: string,
  password?: string,
  code?: string, 
  has2FA?: boolean,
  acceptedTerms?: boolean,
  user?: TUser
}
