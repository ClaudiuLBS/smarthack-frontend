<template>
  <message-feature></message-feature>
  <kick-feature></kick-feature>
  <music-feature></music-feature>
  <user-dashboard></user-dashboard>
</template>

<script>
import KickFeature from './views/Features/KickFeature.vue';
import MessageFeature from './views/Features/MessageFeature.vue';
import UserDashboard from './components/UserDashboard.vue';
import MusicFeature from './views/Features/MusicFeature.vue';

export default {
  name: 'App',
  components: {
    MessageFeature,
    UserDashboard,
    KickFeature,
    MusicFeature
  }
}
</script>
