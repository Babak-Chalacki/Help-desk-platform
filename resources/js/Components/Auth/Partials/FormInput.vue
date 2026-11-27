<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: { type: String, default: '' },
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    autocomplete: { type: String, default: null },
    required: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    error: { type: String, default: null },
})

defineEmits(['update:modelValue'])

const borderClass = computed(() =>
    props.error
        ? 'border-red-400 dark:border-red-500'
        : 'border-slate-200 dark:border-slate-700'
)
</script>

<template>
    <div>
        <label :for="id" class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
            {{ label }}
        </label>

        <div class="relative">
            <input
                :id="id"
                :name="id"
                :type="type"
                :value="modelValue"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :required="required"
                :autofocus="autofocus"
                :aria-invalid="error ? 'true' : 'false'"
                @input="$emit('update:modelValue', $event.target.value)"
                :class="[
                    'block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500',
                    borderClass,
                    $slots.suffix && 'pr-12',
                ]"
            />

            <div v-if="$slots.suffix" class="absolute inset-y-0 right-0 flex items-center pr-3">
                <slot name="suffix" />
            </div>
        </div>

        <p v-if="error" class="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
            {{ error }}
        </p>
    </div>
</template>
