<template>
  <div id="app">
    <FoldSlider :imgs="imgs" />
  </div>
</template>

<script>
import FoldSlider from './components/FoldSlider.vue'
// import FoldSlider from '../dist/main.common'
// import '../dist/main.css'

export default {
  name: 'App',
  components: {
    FoldSlider
  },
  data() {
    const { BASE_URL } = process.env;
    return {
      imgs: [
        {
          big: BASE_URL + 'img/1l.jpg',
          small: BASE_URL + 'img/1s.jpg',
        },
        {
          big: BASE_URL + 'img/2l.jpg',
          small: BASE_URL + 'img/2s.jpg',
        },
        {
          big: BASE_URL + 'img/3l.jpg',
          small: BASE_URL + 'img/3s.jpg',
        },
        {
          big: BASE_URL + 'img/4l.jpg',
          small: BASE_URL + 'img/4s.jpg',
        }
      ]
    }
  }
}
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
