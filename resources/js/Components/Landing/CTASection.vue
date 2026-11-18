<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <section id="about" class="px-6 pb-24 lg:px-8">
        <div class="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-indigo-600 px-8 py-16 text-center shadow-2xl shadow-indigo-600/20 sm:px-16">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to improve your support?
            </h2>

            <p class="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
                Bring your customer conversations and support workflow
                together in one place.
            </p>

            <Link
                href="/register"
                class="mt-9 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-indigo-700 transition hover:-translate-y-1 hover:bg-indigo-50"
            >
                Get started today →
            </Link>
        </div>
    </section>
</template>
