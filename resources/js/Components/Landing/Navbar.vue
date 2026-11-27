<script setup>
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import LogoMark from '@/Components/Landing/Partials/LogoMark.vue'
import ThemeToggle from '@/Components/Landing/Partials/ThemeToggle.vue'

const page = usePage()

// Shared by Laravel through HandleInertiaRequests: auth.user is null for guests
const user = computed(() => page.props.auth?.user ?? null)
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
                <ThemeToggle />

                <!-- Logged in -->
                <Link
                    v-if="user"
                    href="/dashboard"
                    class="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                    Dashboard
                </Link>

                <Link
                    v-if="user"
                    href="/logout"
                    class="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"                >
                    Logout
                </Link>

                <!-- Guest -->
                <template v-else>
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
                        Sign up
                    </Link>
                </template>
            </div>
        </nav>
    </header>
</template>
