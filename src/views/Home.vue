<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-item :key="index" v-for="(user, index) in users">
          <v-list-item-avatar>
            <v-img :src="user.avatar"></v-img>
          </v-list-item-avatar>
          {{user.fullName}}
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import {Component} from 'vue-property-decorator';
import User from '@/models/User';
import {UsersApi} from '@/api/UsersApi';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private users: User[] = [];

  async mounted() {
    this.users = await UsersApi.getAllUsers();
  }
};
</script>
