<script setup>
import { ref, watch, onMounted } from 'vue'
import Navbar from '@/Components/Landing/Navbar.vue'
import Footer from '@/Components/Landing/Footer.vue'

const STORAGE_KEY = 'helpdesk-theme'

const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'

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

const theme = ref(getInitialTheme())

const applyTheme = (value) => {
    document.documentElement.classList.toggle('dark', value === 'dark')
}

const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

watch(theme, (value) => {
    applyTheme(value)

    try {
        localStorage.setItem(STORAGE_KEY, value)
    } catch (e) {
        // ignore
    }
})

onMounted(() => applyTheme(theme.value))
</script>

<template>
    <div class="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar :theme="theme" @toggle-theme="toggleTheme" />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>
