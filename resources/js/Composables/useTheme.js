import { ref, onMounted } from 'vue'

const theme = ref('light')

export function useTheme() {
    const applyTheme = (value) => {
        theme.value = value

        document.documentElement.classList.toggle(
            'dark',
            value === 'dark'
        )

        localStorage.setItem('helpdesk-theme', value)
    }

    const toggleTheme = () => {
        applyTheme(theme.value === 'light' ? 'dark' : 'light')
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('helpdesk-theme')

        applyTheme(savedTheme === 'dark' ? 'dark' : 'light')
    })

    return {
        theme,
        toggleTheme,
    }
}
