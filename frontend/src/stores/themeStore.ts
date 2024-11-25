/* eslint-disable @unicorn/filename-case */
import { create } from 'zustand'
import { useEffect } from 'react'

// Create store
export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: true, // Default to dark mode
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
  initializeTheme: () => {
    set({ isLoading: true })
    const storedTheme = localStorage.getItem('theme') // Initialize theme from localStorage
    const isDark = storedTheme === 'dark'
    set({ isDarkMode: isDark, isLoading: false })
  },
  toggleDarkMode: () =>
    set((store) => {
      const newMode = !store.isDarkMode
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return { isDarkMode: newMode }
    }),
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}))

// Initialize theme mode and manage <html> class
export const useThemeInitialize = () => {
  const { isDarkMode, initializeTheme } = useThemeStore()

  // Initialize theme mode from localStorage
  useEffect(() => {
    initializeTheme()
  }, []) // Run only once when mounted

  // Synchronize <html> class with theme mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])
}

// Store type
interface ThemeStore {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
  initializeTheme: () => void
  toggleDarkMode: () => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}
