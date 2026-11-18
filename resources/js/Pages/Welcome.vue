<script setup>
import { Head } from '@inertiajs/vue3'
import LandingLayout from '@/Layouts/LandingLayout.vue'
import HeroSection from '@/Components/Landing/HeroSection.vue'
import FeaturesSection from '@/Components/Landing/FeaturesSection.vue'
import HowItWorksSection from '@/Components/Landing/HowItWorksSection.vue'
import CTASection from '@/Components/Landing/CTASection.vue'
</script>

<template>
    <Head title="Help Desk Platform" />

    <LandingLayout>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
    </LandingLayout>
</template>
