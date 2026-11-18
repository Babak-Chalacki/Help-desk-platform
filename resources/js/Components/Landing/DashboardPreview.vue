<script setup>
import StatCard from '@/Components/Landing/Partials/StatCard.vue'
import TicketItem from '@/Components/Landing/Partials/TicketItem.vue'

const stats = [
    { label: 'Total tickets', value: 248, hint: '+12.5%', hintColor: 'emerald' },
    { label: 'Open tickets', value: 36, hint: 'Needs attention', hintColor: 'amber' },
    { label: 'Resolved', value: 212, hint: '85.4% rate', hintColor: 'emerald', wide: true },
]

const tickets = [
    { id: 1024, title: 'Login issue', status: 'pending', accent: 'indigo' },
    { id: 1023, title: 'Payment problem', status: 'resolved', accent: 'violet' },
    { id: 1022, title: 'Account settings', status: 'in_progress', accent: 'rose' },
]
</script>

<template>
    <div class="relative">
        <div class="absolute -inset-4 rounded-3xl bg-indigo-500/10 blur-2xl"></div>

        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">

            <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                <div class="flex items-center gap-2">
                    <span class="h-3 w-3 rounded-full bg-red-400"></span>
                    <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span class="h-3 w-3 rounded-full bg-green-400"></span>
                </div>

                <span class="text-xs font-medium text-slate-400">Support Dashboard</span>
            </div>

            <div class="p-6">
                <div class="mb-6 flex items-center justify-between">
                    <div>
                        <h3 class="font-bold">Overview</h3>
                        <p class="mt-1 text-xs text-slate-400">Welcome back, Alex</p>
                    </div>

                    <div class="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
                        This week
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <StatCard v-for="stat in stats" :key="stat.label" v-bind="stat" />
                </div>

                <div class="mt-6">
                    <div class="mb-4 flex items-center justify-between">
                        <h4 class="text-sm font-bold">Recent tickets</h4>
                        <span class="text-xs font-medium text-indigo-600">View all</span>
                    </div>

                    <div class="space-y-3">
                        <TicketItem v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
