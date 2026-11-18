<script setup>
import SectionHeading from '@/Components/Landing/Partials/SectionHeading.vue'
import FeatureCard from '@/Components/Landing/Partials/FeatureCard.vue'

const features = [
    {
        icon: 'ticket',
        title: 'Smart Ticket Management',
        description: 'Organize, prioritize, and manage all customer requests in one centralized workspace.',
    },
    {
        icon: 'users',
        title: 'Team Collaboration',
        description: 'Keep your team connected and make resolving customer issues easier.',
    },
    {
        icon: 'chart',
        title: 'Performance Insights',
        description: 'Track response times, resolution rates, and your support team performance.',
    },
    {
        icon: 'shield',
        title: 'Secure by Design',
        description: 'Protect customer information with structured access and secure workflows.',
    },
]
</script>

<template>
    <section id="features" class="border-t border-slate-100 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-900/50">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionHeading
                eyebrow="Features"
                title="Everything your support team needs"
                description="Powerful tools designed to make customer support more organized, efficient, and reliable."
            />

            <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <FeatureCard
                    v-for="feature in features"
                    :key="feature.title"
                    :feature="feature"
                />
            </div>
        </div>
    </section>
</template>
