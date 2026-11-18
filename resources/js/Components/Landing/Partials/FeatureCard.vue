<script setup>
defineProps({
    feature: {
        type: Object,
        required: true, // { icon, title, description }
    },
})
</script>

<template>
    <div
        class="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-900"
    >
        <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
            <svg v-if="feature.icon === 'ticket'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5V3H5a2 2 0 00-2 2v4a3 3 0 010 6v4a2 2 0 002 2h10v-2m0-14h4a2 2 0 012 2v4a3 3 0 000 6v2a2 2 0 01-2 2h-4m0-16v16"/>
            </svg>
            <svg v-else-if="feature.icon === 'users'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-5.5-3.72M9 20H2v-2a4 4 0 017-2.65M16 3.13a4 4 0 010 7.75M8 11a4 4 0 100-8 4 4 0 000 8z"/>
            </svg>
            <svg v-else-if="feature.icon === 'chart'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18M18 17V9m-5 8V5M8 17v-4"/>
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>
            </svg>
        </div>

        <h3 class="text-lg font-bold">{{ feature.title }}</h3>

        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {{ feature.description }}
        </p>
    </div>
</template>
