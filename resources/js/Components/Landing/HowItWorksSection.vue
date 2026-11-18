<script setup>
import SectionHeading from '@/Components/Landing/Partials/SectionHeading.vue'
import StepItem from '@/Components/Landing/Partials/StepItem.vue'

const steps = [
    {
        number: '01',
        title: 'Create a ticket',
        description: 'Submit your support request with all the details your team needs.',
    },
    {
        number: '02',
        title: 'Get assigned',
        description: 'Your ticket gets organized and assigned to the right support agent.',
    },
    {
        number: '03',
        title: 'Get it resolved',
        description: 'Follow updates and communicate until your issue is resolved.',
    },
]
</script>

<template>
    <section id="how-it-works" class="py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">

            <SectionHeading
                eyebrow="How it works"
                title="Three steps to better support"
            />

            <div class="mt-16 grid gap-12 md:grid-cols-3">
                <StepItem
                    v-for="step in steps"
                    :key="step.number"
                    :step="step"
                />
            </div>

        </div>
    </section>
</template>
