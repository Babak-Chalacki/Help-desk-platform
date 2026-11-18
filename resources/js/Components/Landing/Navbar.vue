<script setup>
import { Link } from '@inertiajs/vue3'
import LogoMark from '@/Components/Landing/Partials/LogoMark.vue'

defineProps({
    theme: {
        type: String,
        default: 'light',
    },
})

defineEmits(['toggle-theme'])
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

            <Link href="/" class="flex items-center gap-3">
                <LogoMark />

                <span class="text-lg font-bold tracking-tight">
                    Help<span class="text-indigo-600">Desk</span>
                </span>
            </Link>

            <div class="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
                <a href="#features" class="transition hover:text-indigo-600">Features</a>
                <a href="#how-it-works" class="transition hover:text-indigo-600">How it works</a>
                <a href="#about" class="transition hover:text-indigo-600">About</a>
            </div>

            <div class="flex items-center gap-3">

                <!-- THEME TOGGLE -->
                <button
                    @click="$emit('toggle-theme')"
                    type="button"
                    aria-label="Toggle theme"
                    class="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                    <!-- Moon (shown in light mode) -->
                    <svg v-if="theme === 'light'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>

                    <!-- Sun (shown in dark mode) -->
                    <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </button>

                <Link
                    href="/login"
                    class="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 sm:block"
                >
                    Sign in
                </Link>

                <Link
                    href="/register"
                    class="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                    Get started
                </Link>
            </div>
        </nav>
    </header>
</template>
