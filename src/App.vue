<template>
  <div id="app">
    <!-- 导航栏 -->
    <!-- <nav id="nav-header" class="navbar">
      <div class="song">
        <p id="f" @click='fade' class="animated_zoomInLeft">{{this.$store.state}}</p>
      </div>
    </nav> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('checkIsPc')
  },
  methods: {
    fade () {
      console.log(1)
      // this.$('#f').addClass('animated_zoomOutRight')
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
