<template>
  <div class="output">
    <div class="content" v-for="i in 3" :key=i>
      <h3>{{ name }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      name: 'PHP',
      text: '1年半'
    }
  }
}
</script>
<style scoped>
div.output {
  text-align: center;
}

div.content {
  border-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: black;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
</style>
