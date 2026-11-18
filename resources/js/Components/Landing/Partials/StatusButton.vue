<script setup>
import { computed } from 'vue'

const props = defineProps({
    // e.g. 'pending' | 'resolved' | 'in_progress'
    status: {
        type: String,
        required: true,
    },
    // optional override for the default text
    label: {
        type: String,
        default: null,
    },
})

// Full class names are required here: Tailwind cannot detect dynamic classes like `bg-${color}-50`.
const STATUSES = {
    pending: {
        label: 'Pending',
        classes: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    },
    resolved: {
        label: 'Resolved',
        classes: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    },
    in_progress: {
        label: 'In progress',
        classes: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    },
}

const FALLBACK_CLASSES = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'

// short or alternative names
const ALIASES = {
    pend: 'pending',
    resolve: 'resolved',
    done: 'resolved',
    progress: 'in_progress',
}

const key = computed(() => {
    const normalized = props.status.toLowerCase().trim().replace(/[\s-]+/g, '_')
    return ALIASES[normalized] ?? normalized
})

const config = computed(() => STATUSES[key.value] ?? null)

const text = computed(() => props.label ?? config.value?.label ?? props.status)
const classes = computed(() => config.value?.classes ?? FALLBACK_CLASSES)
</script>

<template>
    <span :class="['rounded-full px-3 py-1 text-xs font-semibold', classes]">
        {{ text }}
    </span>
</template>
