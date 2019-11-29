<template>
  <v-app>
    <v-content>
      <home></home>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    msg: 'Marko',
  }),
});
</script>
