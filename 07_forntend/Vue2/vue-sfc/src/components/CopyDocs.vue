<template>
<p>
    {{ test }}
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
</p>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CopyDocs' ,
    props: {
        test:{
            type: String,
            required: true
        }
    }
});
</script>
<style scoped>
a {
  color: #42b983;
}
</style>