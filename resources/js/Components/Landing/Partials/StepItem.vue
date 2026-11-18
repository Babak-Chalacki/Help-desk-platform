<script setup>
defineProps({
    step: {
        type: Object,
        required: true, // { number, title, description }
    },
})
</script>

<template>
    <div class="relative text-center">
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white shadow-xl shadow-indigo-600/20">
            {{ step.number }}
        </div>

        <h3 class="mt-7 text-xl font-bold">{{ step.title }}</h3>

        <p class="mx-auto mt-3 max-w-xs leading-7 text-slate-600 dark:text-slate-400">
            {{ step.description }}
        </p>
    </div>
</template>
