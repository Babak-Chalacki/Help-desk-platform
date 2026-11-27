import { ref } from 'vue'

const STORAGE_KEY = 'helpdesk-theme'

// Shared state: every component that calls useTheme() sees the same value.
const theme = ref('light')
let initialized = false

const readInitialTheme = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved === 'dark' || saved === 'light') return saved
    } catch (e) {
        // localStorage may be unavailable
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
}

const applyTheme = (value) => {
    document.documentElement.classList.toggle('dark', value === 'dark')
}

const setTheme = (value) => {
    theme.value = value
    applyTheme(value)

    try {
        localStorage.setItem(STORAGE_KEY, value)
    } catch (e) {
        // ignore
    }
}

export function useTheme() {
    if (!initialized && typeof window !== 'undefined') {
        initialized = true
        theme.value = readInitialTheme()
        applyTheme(theme.value)
    }

    const toggleTheme = () => setTheme(theme.value === 'light' ? 'dark' : 'light')

    return { theme, setTheme, toggleTheme }
}
