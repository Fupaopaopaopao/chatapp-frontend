import { create } from 'zustand'
import axiosInstance from '../lib/axios'
import toast from 'react-hot-toast'

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: false,
  isSigningUp: false,
  isLoggingOut: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true })
    try {
      const response = await axiosInstance.get('/api/auth/checkAuth')
      set({ authUser: response.data })
    } catch (error) {
      console.log(`Error checking auth: ${error.message}`)
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true })
    try {
      const res = await axiosInstance.post('/api/auth/signup', data)
      set({ authUser: res.data })
      toast.success('Account created successfully')
      // get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({ isSigningUp: false })
    }
  },

  logout: async () => {
    set({ isLoggingOut: true })
    try {
      await axiosInstance.post('/api/auth/logout')
      set({ authUser: null })
      toast.success('Account logout successfully')
      // get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({ isLoggingOut: false })
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosInstance.post('/api/auth/login', data)
      set({ authUser: res.data })
      toast.success('Logged in successfully')

      // get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({ isLoggingIn: false })
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true })
    try {
      const res = await axiosInstance.put('/api/auth/profile', data)
      set({ authUser: res.data })
      toast.success('Profile updated successfully')
    } catch (error) {
      console.log('error in update profile:', error)
      toast.error(error.response.data.message)
    } finally {
      set({ isUpdatingProfile: false })
    }
  },
}))
