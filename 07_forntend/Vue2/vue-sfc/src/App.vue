<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <RefLinks></RefLinks>
  <CopyDocs :test=test></CopyDocs>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import RefLinks from './components/RefLinks.vue';
import CopyDocs from './components/CopyDocs.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    RefLinks,
    CopyDocs
  },
  setup () {
      const test = ref('テスト');
      return { test };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
