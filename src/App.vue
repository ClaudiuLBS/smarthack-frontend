<template>
  <home-header></home-header>
  <kick-mute-form-bot></kick-mute-form-bot>
  <message-form-bot></message-form-bot>
  <user-dashboard></user-dashboard>
  <music-add-form-bot></music-add-form-bot>
</template>

<script>
import HomeHeader from './views/HomeHeader.vue';
import KickMuteFormBot from './views/KickMuteFormBot.vue';
import MessageFormBot from './views/MessageFormBot.vue';
import UserDashboard from './components/UserDashboard.vue';
import MusicAddFormBot from './views/MusicAddFormBot.vue';

export default {
  name: 'App',
  components: {
    HomeHeader,
    MessageFormBot,
    UserDashboard,
    KickMuteFormBot,
    MessageFormBot, 
    MusicAddFormBot
  }
}
</script>
