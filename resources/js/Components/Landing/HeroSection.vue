<script setup>
import { Link } from '@inertiajs/vue3'
import DashboardPreview from '@/Components/Landing/DashboardPreview.vue'
</script>

<template>
    <section class="relative overflow-hidden">
        <div class="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div class="absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

        <div class="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

            <div>
                <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300">
                    <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
                    Customer support, simplified
                </div>

                <h1 class="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                    Support your
                    <span class="text-indigo-600">customers</span>
                    better.
                </h1>

                <p class="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                    Manage support requests, collaborate with your team,
                    and deliver exceptional customer experiences from
                    one powerful platform.
                </p>

                <div class="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                        href="/register"
                        class="rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
                    >
                        Start for free
                        <span class="ml-2">→</span>
                    </Link>

                    <a
                        href="#features"
                        class="rounded-xl border border-slate-200 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        Explore features
                    </a>
                </div>

                <div class="mt-12 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div class="flex -space-x-2">
                        <div class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-xs font-bold text-indigo-700 dark:border-slate-950">JD</div>
                        <div class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-xs font-bold text-violet-700 dark:border-slate-950">AM</div>
                        <div class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-xs font-bold text-emerald-700 dark:border-slate-950">MK</div>
                    </div>

                    <span>One platform. Better support.</span>
                </div>
            </div>

            <DashboardPreview />

        </div>
    </section>
</template>
