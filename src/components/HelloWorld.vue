<template>
  <v-container>
    <v-layout
      text-center
      wrap>
      <v-flex>
        {{msg}}
      </v-flex>
      <v-btn depressed primary @click="respond()">Respond</v-btn>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class HelloWorld extends Vue{
  @Prop({required: true, type: String,})
  public msg!: string;

  public respond(){
    this.$sync<string>('msg', `${this.msg} Polo`);
  }
}
</script>
