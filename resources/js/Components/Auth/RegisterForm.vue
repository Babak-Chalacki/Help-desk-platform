<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import FormInput from '@/Components/Auth/Partials/FormInput.vue'
import PasswordInput from '@/Components/Auth/Partials/PasswordInput.vue'
import PrimaryButton from '@/Components/Auth/Partials/PrimaryButton.vue'

const props = defineProps({
    action: { type: String, default: '/register' },
})

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(props.action, {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <form class="space-y-5" novalidate @submit.prevent="submit">
        <FormInput
            id="name"
            v-model="form.name"
            label="Full name"
            placeholder="Alex Johnson"
            autocomplete="name"
            required
            autofocus
            :error="form.errors.name"
        />

        <FormInput
            id="email"
            v-model="form.email"
            type="email"
            label="Email address"
            placeholder="you@company.com"
            autocomplete="username"
            required
            :error="form.errors.email"
        />

        <PasswordInput
            id="password"
            v-model="form.password"
            label="Password"
            placeholder="At least 8 characters"
            required
            :error="form.errors.password"
        />

        <PasswordInput
            id="password_confirmation"
            v-model="form.password_confirmation"
            label="Confirm password"
            placeholder="Repeat your password"
            required
            :error="form.errors.password_confirmation"
        />

        <PrimaryButton :processing="form.processing">
            Create account
        </PrimaryButton>

        <p class="text-center text-sm text-slate-600 dark:text-slate-400">
            Already have an account?
            <Link href="/login" class="font-semibold text-indigo-600 transition hover:text-indigo-700">
                Sign in
            </Link>
        </p>
    </form>
</template>
