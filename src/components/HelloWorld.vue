<template>
  <v-container>
    <home></home>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from "@/views/Home.vue";
import {Component} from "vue-property-decorator";

@Component({
  components: {
    Home,
  },
})
export default class HelloWorld extends Vue{

}
</script>
