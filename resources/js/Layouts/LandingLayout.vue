<script setup>
import Navbar from '@/Components/Landing/Navbar.vue'
import Footer from '@/Components/Landing/Footer.vue'
import { useTheme } from '@/Composables/useTheme'

// Initializes the theme (reads localStorage / system preference) and applies it.
useTheme()
</script>

<template>
    <div class="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>
