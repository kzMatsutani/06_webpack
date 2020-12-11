<template>
    <child @child-event="parentEvent" :count="num" />
</template>
<script>
import { defineComponent, ref } from 'vue';
import Child from './Child.vue';

export default defineComponent({
    name: 'parent',
    components: { Child },
    setup() {
        const num = ref(0);
        const parentEvent = (newVal) => {
            num.value = newVal;
        }
        return { parentEvent, num};
    }
})
</script>