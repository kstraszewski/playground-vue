<template>
  <v-app>
    <v-content>
      <HelloWorld :msg="msg"/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    msg: 'Marko',
  }),
});
</script>
