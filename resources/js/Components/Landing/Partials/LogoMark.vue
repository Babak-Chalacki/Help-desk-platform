<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'md', // 'sm' | 'md'
        validator: (v) => ['sm', 'md'].includes(v),
    },
})

const SIZES = {
    sm: { box: 'h-8 w-8 rounded-lg', icon: 'h-5 w-5', shadow: '' },
    md: { box: 'h-10 w-10 rounded-xl', icon: 'h-6 w-6', shadow: 'shadow-lg shadow-indigo-600/20' },
}

const s = computed(() => SIZES[props.size])
</script>

<template>
    <div :class="['flex items-center justify-center bg-indigo-600 text-white', s.box, s.shadow]">
        <svg :class="s.icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h8M8 14h5m-7 6h12a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v10a3 3 0 003 3z"/>
        </svg>
    </div>
</template>
