<template>
  <div id="app">
 
    <h1>Hello <a href='https://github.com/vuejs/vite' target='__blank'>Vite</a> and <a href='https://github.com/vueuse/vueuse' target='__blank'>VueUse</a>!</h1>

    <h3>Mouse: {{x}} x {{y}}</h3>
    <h3>
      Counter: {{count}}
      <a @click='inc()' style='margin-right:10px'>+</a>
      <a @click='dec()'>-</a>
    </h3>

    <br><br>
    <p><a href='https://github.com/vueuse/vueuse-vite-starter' target='__blank'>Source</a></p>
    <p><a href='https://vueuse-vue3-example.netlify.app/' target='__blank'>Webpack Example</a></p>
  </div>
</template>

<script setup >
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

// const { x, y } = window.VueUse.useMouse() // 原始vueUse不能用
const { count, inc, dec } = window.VueUse.useCounter()
</script>

<style scoped>
html, body, h1, h2, h3, p {
  font-family: 'Noto Serif', serif;
  user-select: none;
}
#app {
  text-align: center;
  color: rgba(0,0,0,0.4);
}
img {
  width: 500px;
}
a {
  color: #41b883;
  text-decoration: none;
  cursor: pointer;
}
</style>