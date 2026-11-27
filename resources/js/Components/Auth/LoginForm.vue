<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import FormInput from '@/Components/Auth/Partials/FormInput.vue'
import PasswordInput from '@/Components/Auth/Partials/PasswordInput.vue'
import PrimaryButton from '@/Components/Auth/Partials/PrimaryButton.vue'

const props = defineProps({
    action: { type: String, default: '/login' },
})

const form = useForm({
    email: '',
    password: '',
})

const submit = () => {
    form.post(props.action, {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <form class="space-y-5" novalidate @submit.prevent="submit">

        <FormInput
            id="email"
            v-model="form.email"
            type="email"
            label="Email address"
            placeholder="you@company.com"
            autocomplete="username"
            required
            autofocus
            :error="form.errors.email"
        />

        <PasswordInput
            id="password"
            v-model="form.password"
            label="Password"
            placeholder="Enter your password"
            autocomplete="current-password"
            required
            :error="form.errors.password"
        />

        <PrimaryButton :processing="form.processing">
            Sign in
        </PrimaryButton>

        <p class="text-center text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?
            <Link href="/register" class="font-semibold text-indigo-600 transition hover:text-indigo-700">
                Create one
            </Link>
        </p>
    </form>
</template>
