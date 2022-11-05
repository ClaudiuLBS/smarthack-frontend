<template>
  <home-header></home-header>
  <create-bot-form></create-bot-form>
  <message-form-bot></message-form-bot>
</template>

<script>
import HomeHeader from './views/HomeHeader.vue';
import CreateBotForm from './views/KickMuteFormBot.vue';
import MessageFormBot from './views/MessageFormBot.vue';

export default {
  name: 'App',
  components: {
    HomeHeader,
    CreateBotForm,
    MessageFormBot
  }
}
</script>
