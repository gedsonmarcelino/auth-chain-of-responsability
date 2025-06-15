import { create } from 'zustand'
import type { TUser } from '../../auth/types'
import type { TAuthStore } from './types'

const initialValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  acceptedTerms: false,
}

export const useAuthStore = create<TAuthStore>((set) => ({
  user: initialValues,
  acceptTerms: () => set((state) => ({ user : {
    ...state.user,
    acceptedTerms: true
  }})),
  updateUser: (user:TUser) => set(() => ({ user })),
  clear:() => set(() => ({ user: initialValues}))
}))