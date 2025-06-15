import type { TUser } from "../../auth/types"

export type TAuthStore = {
    user: TUser,
    acceptTerms: () => void,
    updateUser: (user:TUser) => void
    clear: () => void
}