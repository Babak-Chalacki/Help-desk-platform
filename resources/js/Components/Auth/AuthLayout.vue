
<script setup>
import { ref, onMounted, watch } from 'vue'
import { Link } from '@inertiajs/vue3'

const theme = ref('light')

onMounted(() => {
    try {
        const savedTheme = localStorage.getItem('helpdesk-theme')

        theme.value = savedTheme === 'light' || savedTheme === 'dark'
            ? savedTheme
            : window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    } catch {
        theme.value = 'light'
    }
})

watch(theme, (value) => {
    document.documentElement.classList.toggle('dark', value === 'dark')

    try {
        localStorage.setItem('helpdesk-theme', value)
    } catch {
        // Storage may be unavailable.
    }
})

function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
    <div
        class="min-h-screen bg-slate-50 text-slate-900 transition-colors
               duration-300 dark:bg-slate-950 dark:text-white"
    >
        <header class="absolute inset-x-0 top-0 z-10">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <Link href="/" class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center
                                rounded-xl bg-indigo-600 text-white shadow-lg
                                shadow-indigo-600/20">
                        <svg
                            class="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8
                                     8.5 8.5 0 0 1-7.6 4.7
                                     8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7
                                     a8.38 8.38 0 0 1-.9-3.8
                                     8.5 8.5 0 0 1 4.7-7.6
                                     8.38 8.38 0 0 1 3.8-.9h.5
                                     a8.48 8.48 0 0 1 8 8v.5Z"
                            />
                        </svg>
                    </div>

                    <span class="text-xl font-bold tracking-tight">
                        Help<span class="text-indigo-600">Desk</span>
                    </span>
                </Link>

                <button
                    type="button"
                    @click="toggleTheme"
                    class="rounded-xl border border-slate-200 p-2.5
                           text-slate-600 transition hover:bg-slate-100
                           dark:border-slate-800 dark:text-slate-300
                           dark:hover:bg-slate-900"
                    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
                >
                    <svg
                        v-if="theme === 'dark'"
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42
                                 m11.3 11.3 1.42 1.42M2 12h2m16 0h2
                                 M4.93 19.07l1.42-1.42
                                 m11.3-11.3 1.42-1.42" />
                    </svg>

                    <svg
                        v-else
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472
                                 c.405-.022.617.463.402.807
                                 a6.5 6.5 0 0 0 8.268 8.268
                                 c.344-.215.829-.003.803.397Z" />
                    </svg>
                </button>
            </div>
        </header>

        <main class="relative flex min-h-screen items-center justify-center
                     overflow-hidden px-4 py-28 sm:px-6">

            <div class="pointer-events-none absolute -left-32 top-20
                        h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl">
            </div>

            <div class="pointer-events-none absolute -right-32 bottom-10
                        h-96 w-96 rounded-full bg-violet-500/10 blur-3xl">
            </div>

            <div class="relative z-10 w-full max-w-7xl">
                <slot />
            </div>
        </main>

        <footer class="absolute bottom-0 w-full py-5 text-center">
            <p class="text-xs text-slate-400">
                © {{ new Date().getFullYear() }} HelpDesk. All rights reserved.
            </p>
        </footer>
    </div>
</template>
