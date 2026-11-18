<script setup>
import LogoMark from '@/Components/Landing/Partials/LogoMark.vue'
</script>

<template>
    <footer class="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-sm text-slate-500 dark:text-slate-400 md:flex-row lg:px-8">

            <div class="flex items-center gap-2">
                <LogoMark size="sm" />

                <span class="font-bold text-slate-900 dark:text-white">
                    HelpDesk
                </span>
            </div>

            <p>© {{ new Date().getFullYear() }} Help Desk Platform. All rights reserved.</p>

            <a href="#" class="transition hover:text-indigo-600">
                Privacy Policy
            </a>

        </div>
    </footer>
</template>
