<script setup>
import { Head } from '@inertiajs/vue3'
import AuthLayout from '@/Layouts/LandingLayout.vue'
import LoginForm from '@/Components/Auth/LoginForm.vue'
</script>

<template>
    <Head title="Sign in" />

    <AuthLayout>
        <section class="flex min-h-[calc(100vh-160px)] items-center justify-center px-6 py-10">
            <div class="w-full max-w-sm">
                <div class="mb-6">
                    <h1 class="text-3xl font-extrabold tracking-tight">
                        sign in to your account
                    </h1>

                    <p class="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                        Sign in to manage your support requests.
                    </p>
                </div>

                <LoginForm />
            </div>
        </section>
    </AuthLayout>
</template>
