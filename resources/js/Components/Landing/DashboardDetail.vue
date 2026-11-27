<script setup>
import StatCard from '@/Components/Landing/Partials/StatCard.vue'
import TicketItem from '@/Components/Landing/Partials/TicketItem.vue'

import { ref } from 'vue'

const selectedPeriod = ref('This week')
const showPeriodFilter = ref(false)

const periods = ['Today', 'This week', 'This month', 'All']
const stats = [
    { label: 'Total tickets', value: 248, hint: '+12.5%', hintColor: 'emerald' },
    { label: 'Open tickets', value: 36, hint: 'Needs attention', hintColor: 'amber' },
    { label: 'Resolved', value: 212, hint: '85.4% rate', hintColor: 'emerald', wide: true },
]

const tickets = [
    { id: 1024, title: 'Login issue', status: 'pending', accent: 'indigo' },
    { id: 1023, title: 'Payment problem', status: 'resolved', accent: 'violet' },
    { id: 1022, title: 'Account settings', status: 'in_progress', accent: 'rose' },
    { id: 1022, title: 'Account settings', status: 'in_progress', accent: 'rose' },
]
</script>

<template>
    <div class="w-full overflow-hidden border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">



        <!-- Content -->
        <div class="p-3 sm:p-5 lg:p-8">

            <!-- Overview -->
            <div class="mb-5 sm:mb-7 flex items-center justify-between">
                <div>
                    <h3 class="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white">
                        Overview
                    </h3>

                    <p class="mt-1 text-xs sm:text-sm text-slate-400">
                        Welcome back, Alex
                    </p>
                </div>

                <div class="relative">
                    <button
                        @click="showPeriodFilter = !showPeriodFilter"
                        class="flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2
               text-xs sm:text-sm font-semibold text-indigo-600
               dark:bg-indigo-950 dark:text-indigo-300"
                    >
                        {{ selectedPeriod }}

                        <svg
                            class="h-4 w-4 transition-transform duration-200"
                            :class="{ 'rotate-180': showPeriodFilter }"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 9-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        v-if="showPeriodFilter"
                        class="absolute right-0 top-full z-20 mt-2 w-36 overflow-hidden
               rounded-xl border border-slate-200 bg-white shadow-lg
               dark:border-slate-700 dark:bg-slate-900"
                    >
                        <button
                            v-for="period in periods"
                            :key="period"
                            @click="selectedPeriod = period; showPeriodFilter = false"
                            class="flex w-full items-center justify-between px-3 py-2.5
                   text-left text-xs sm:text-sm transition-colors
                   hover:bg-slate-50 dark:hover:bg-slate-800"
                            :class="selectedPeriod === period
                ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-300'"
                        >
                            {{ period }}

                            <svg
                                v-if="selectedPeriod === period"
                                class="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m5 12 4 4L19 6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Statistics -->
            <div class="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
                <StatCard
                    v-for="stat in stats"
                    :key="stat.label"
                    v-bind="stat"
                />
            </div>

            <!-- Recent Tickets -->
            <div class="mt-6 sm:mt-8">
                <div class="mb-4 flex items-center justify-between">
                    <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        Recent tickets
                    </h4>

                    <span class="text-xs sm:text-sm font-medium text-indigo-600 cursor-pointer">
                        View all
                    </span>
                </div>

                <div class="space-y-3">
                    <TicketItem
                        v-for="ticket in tickets"
                        :key="ticket.id"
                        :ticket="ticket"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
