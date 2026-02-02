import { create } from 'zustand'
import axiosInstance from '../lib/axios'

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  checkAuth: async () => {
    
    try {
      const response =
        await axiosInstance.get('/api/auth/checkAuth')
      console.log(response.data)
      set({ authUser: response.data })
    } catch (error) {
      console.log(`Error checking auth: ${error.message}`)
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },
}))
