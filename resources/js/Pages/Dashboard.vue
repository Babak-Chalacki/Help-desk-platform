<script setup>
import LandingLayout from "@/Layouts/LandingLayout.vue";
import {Head} from "@inertiajs/vue3";
import DashboardDetail from "@/Components/Landing/DashboardDetail.vue";
</script>

<template>
    <Head title="Dashboard" />

    <LandingLayout>

        <DashboardDetail></DashboardDetail>
    </LandingLayout>
</template>

<style scoped>

</style>
