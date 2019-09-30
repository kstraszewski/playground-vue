import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $sync<T>(key: keyof this, value: T): void;
  }
}
