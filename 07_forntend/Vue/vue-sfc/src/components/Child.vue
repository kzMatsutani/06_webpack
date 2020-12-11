<template>
<h1>{{ message }}</h1>
<button @click="handleClick">Click</button>
</template>
<script>
import { defineComponent ,computed } from 'vue';
export default defineComponent ({
    name: 'Child',
    props: {
        message: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            default: 0
        }
    },
    setup(props, context) {
        const handleClick = () => {
            context.emit('child-event', props.count + 1)
        }
        return { count, handleClick};
    }
});
</script>
<style scoped>
h3[data-v-469af010] {
  margin: 40px 0 0;
}
ul[data-v-469af010] {
  list-style-type: none;
  padding: 0;
}
</style>