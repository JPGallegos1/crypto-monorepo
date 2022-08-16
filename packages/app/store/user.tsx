import { zustandStorageConfig } from 'app/constants'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface IAuth {
  isLoggedIn: boolean
}

interface ISession extends IAuth {
  email: string
  setSession: (val: string) => void
  removeSession: () => void
}

export const useSession = create<ISession>()(
  persist((set, get) => ({
    email: '',
    isLoggedIn: false,
    setSession: (val: string) =>
      set({ email: get().email + val, isLoggedIn: true }),
    removeSession: () => set({ email: '', isLoggedIn: false }),
    zustandStorageConfig,
  }))
)
