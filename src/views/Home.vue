<template>
  <v-card>
    <v-card-text>
      {{clockObservable.clock}}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import ClockService from '@/ClockService';

export default Vue.extend({
  data: () => ({
    x: 1,
  }),
  async mounted() {
    console.log("Początek mounted");
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    });
    console.log("Koniec mounted");
  },
  computed: {
    clockObservable() {
      return ClockService.clockObservable;
    },
  },
});
</script>
