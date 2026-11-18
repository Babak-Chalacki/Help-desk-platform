<script setup>
import { computed } from 'vue'

const props = defineProps({
    label: { type: String, required: true },
    value: { type: [String, Number], required: true },
    hint: { type: String, default: null },
    hintColor: {
        type: String,
        default: 'emerald', // 'emerald' | 'amber'
    },
    wide: { type: Boolean, default: false },
})

const HINT_COLORS = {
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
}

const hintClass = computed(() => HINT_COLORS[props.hintColor] ?? HINT_COLORS.emerald)
</script>

<template>
    <div :class="['rounded-xl bg-slate-50 p-4 dark:bg-slate-800', wide && 'col-span-2 sm:col-span-1']">
        <p class="text-xs text-slate-500 dark:text-slate-400">{{ label }}</p>
        <p class="mt-2 text-2xl font-bold">{{ value }}</p>
        <p v-if="hint" :class="['mt-1 text-xs', hintClass]">{{ hint }}</p>
    </div>
</template>
