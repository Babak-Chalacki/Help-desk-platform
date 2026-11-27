<script setup>
import { Link } from '@inertiajs/vue3'

const benefits = [
    'Organize every customer request in one workspace',
    'Assign tickets to the right agent in seconds',
    'Track response times and resolution rates',
]
</script>

<template>
    <aside class="relative hidden overflow-hidden bg-indigo-600 text-white lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div class="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div class="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl"></div>

        <Link href="/" class="relative flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h8M8 14h5m-7 6h12a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v10a3 3 0 003 3z"/>
                </svg>
            </div>

            <span class="text-lg font-bold tracking-tight">HelpDesk</span>
        </Link>

        <div class="relative max-w-md">
            <h2 class="text-4xl font-extrabold leading-tight tracking-tight">
                Start supporting your customers better.
            </h2>

            <ul class="mt-10 space-y-4">
                <li v-for="benefit in benefits" :key="benefit" class="flex items-start gap-3 text-indigo-100">
                    <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                        </svg>
                    </span>
                    <span class="leading-7">{{ benefit }}</span>
                </li>
            </ul>
        </div>

        <p class="relative text-sm text-indigo-200">
            © {{ new Date().getFullYear() }} Help Desk Platform
        </p>
    </aside>
</template>
