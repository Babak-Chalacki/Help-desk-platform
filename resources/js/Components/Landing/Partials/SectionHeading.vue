<script setup>
defineProps({
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: null },
})
</script>

<template>
    <div class="mx-auto max-w-2xl text-center">
        <span class="text-sm font-bold uppercase tracking-widest text-indigo-600">{{ eyebrow }}</span>

        <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {{ title }}
        </h2>

        <p v-if="description" class="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            {{ description }}
        </p>
    </div>
</template>
