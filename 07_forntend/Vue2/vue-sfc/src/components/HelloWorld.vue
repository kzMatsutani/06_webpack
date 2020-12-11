<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CopyDocs :test="test"></CopyDocs>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref} from 'vue';
import CopyDocs from './CopyDocs.vue';

export default defineComponent({
  name: 'HelloWorld',
  component: { CopyDocs },
  props: {
    msg: String,
  },
  setup() {
      const test = ref('test');
      return { test };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
