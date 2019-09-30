<template>
  <v-container>
    <v-layout
      text-center
      wrap>
      <v-flex>
        {{msg}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class HelloWorld extends Vue{
  @Prop({required: true, type: String,})
  private msg!: string;
}
</script>
