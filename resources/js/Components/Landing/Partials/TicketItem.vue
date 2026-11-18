<script setup>
import { computed } from 'vue'
import StatusButton from '@/Components/Landing/Partials/StatusButton.vue'

const props = defineProps({
    ticket: {
        type: Object,
        required: true, // { id, title, status, accent }
    },
})

const ACCENTS = {
    indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
    violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
    rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
}

const accentClass = computed(() => ACCENTS[props.ticket.accent] ?? ACCENTS.indigo)
</script>

<template>
    <div class="flex items-center justify-between rounded-xl border border-slate-100 p-3 dark:border-slate-800">
        <div class="flex items-center gap-3">
            <div :class="['flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold', accentClass]">#</div>
            <div>
                <p class="text-sm font-semibold">{{ ticket.title }}</p>
                <p class="text-xs text-slate-400">Ticket #{{ ticket.id }}</p>
            </div>
        </div>

        <StatusButton :status="ticket.status" />
    </div>
</template>
