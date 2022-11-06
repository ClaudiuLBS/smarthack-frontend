<template>
    <div class="dashboard">
        <dashboard-nav></dashboard-nav>
        <dashboard-bot></dashboard-bot>
    </div>
</template>

<script>
// Elements
import DashboardNav from '../views/Dashboard/DashboardNav.vue';
import DashboardBot from '../views/Dashboard/DashboardBot.vue';

export default {
    components:{
        DashboardNav,
        DashboardBot,
    }
}
</script>

<style scoped>
    .dashboard{
        display: flex;
        height: 100vh;
    }
</style>