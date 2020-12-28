<template>
<!-- 首页 -->
<div class="home" :style="'height:' + height" @wheel.prevent="scrollBarWheel">
  <!-- 首屏 -->
  <div class="init">
    <div class="top">
      <img src="~assets/img/logo.jpg" alt="logo">
    </div>
    <div class="bottom">
      <div class="msg">关注、提升web前段技术</div>
    </div>
    <div class="linebg">
      <div class="line"></div>
    </div>
  </div>
  <!-- 第一屏 -->
  <div id="1" :class="index === 1 ? 'slide active': 'slide'" :style="'height:' + height">
    <div class="card">
      <bongo-cat/>
      <canvas-time/>
    </div>
  </div>
  <!-- 第二 -->
  <div id="2" :class="index === 2 ? 'slide active': 'slide'" :style="'height:' + height">
    <div class="card">
      <div class="card-img" id="img01"></div>
        <div class="card-content">
        <p class="card-theme">图片说明</p>
        <h2 class="card-header">详细内容</h2>
        <p class="card-para">by Eugene Purcell</p>
        <a href="" class="card-link">Read</a>
      </div>
    </div>
  </div>
  <!-- 第三 -->
  <div id="3" :class="index === 3 ? 'slide active': 'slide'" :style="'height:' + height">
    <div class="card">
      <div class="card-img" id="img01"></div>
        <div class="card-content">
        <p class="card-theme">图片说明</p>
        <h2 class="card-header">详细内容</h2>
        <p class="card-para">by Eugene Purcell</p>
        <a href="" class="card-link">Read</a>
      </div>
    </div>
  </div>
  <div class="prevnext">
    <button class="pn-btn" id="prev" @click="prevSlide"></button>
    <button class="pn-btn" id="next" @click="nextSlide"></button>
  </div>
</div>
</template>

<script>
import BongoCat from 'components/BongoCat.vue'
import CanvasTime from 'components/CanvasTime.vue'
export default {
  name: 'Home',
  components: {
    BongoCat,
    CanvasTime
  },
  data () {
    return {
      height: '',
      index: 1
    }
  },
  mounted () {
    console.log(this)
  },
  created () {
    // 设置高度
    this.setHeight()
    // 初始化轮播
    this.initSlide()
  },
  methods: {
    prevSlide () {
      if (this.index > 1) {
        this.index--
      }
    },
    nextSlide () {
      const homeSlide = document.getElementsByClassName('slide')
      if (this.index < homeSlide.length) {
        this.index++
      }
    },
    // 初始化轮播
    initSlide () {
      const activeSlide = document.getElementsByClassName('active')
      const homeSlide = document.getElementsByClassName('slide')
      const slideNavPrev = document.getElementById('prev')
      const slideNavNext = document.getElementById('next')
      console.log(activeSlide + '------' + homeSlide + '------' + slideNavPrev + '------' + slideNavNext)
    },
    // 获取浏览器高度
    setHeight () {
      this.height = window.innerHeight + 'px'
    },
    // 监听滚轮
    scrollBarWheel (e) {
      e = e || window.event
    }
  }
}
</script>
<style>
@import "../assets/css/style.css";
.home {
  overflow: hidden;
}
.slide {
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.card {
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fff;
}
.card-img {
  background-position: center;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.card-content {
  padding: 10% 5%;
  box-sizing: border-box;
  width: 50%;
  background: #0A0A0A;
}
.card-theme {
  font-weight: 900;
  font-size: 1.7vmin;
  text-transform: uppercase;
  font-family: Poppins;
  letter-spacing: 10px;
  color: grey;
}
.card-header {
  font-weight: 700;
  font-size: 54px;
  text-transform: capitalize;
  line-height: 1;
  margin: 3vmin 0 3.5vmin;
  color: #fff;
  font-family: Poppins;
}
.card-para {
  font-size: 1.6vmin;
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 2.5vmin;
  color: #fff;
  font-family: Poppins;
}
.card-link {
  color: #fff;
  font-family: Poppins;
  font-size: 1.8vmin;
  display: block;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.card-link:after {
  content: " →";
}
/*前后导航按钮样式*/
.prevnext {
  z-index: 111;
  position: absolute;
  width: 4vmin;
  height: 8vmin;
  right: 2%;
  bottom: 0;
  top: 80%;
  color: black;
  margin: auto 0;
}
.pn-btn {
  color: black;
  width: 100%;
  height: 50%;
  border: 0;
  background-color: transparent;
  font-size: 20px;
}
#prev, #next {
  position: relative;
  cursor: pointer;
}
#prev:focus, #next:focus {
  outline: none;
}
#prev:hover:after, #next:hover:after {
  opacity: 1;
}
#prev:after, #next:after {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}
#prev:after {
  content: "↑";
}
#next:after {
  content: "↓";
}
.bounceInDown {
  animation-delay:2.2s;
}
#canvas.flipInX{
  animation-delay:2s;
}
/* 首屏样式 */
.init {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
}
.init .top {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  background: rgba(255,255,255,1);
  color:rgba(49,75,130,1);
  animation: leaveTop 2s ease-out forwards;
}
.init .top img{
  width: 400px;
  height: 70px;
  position: absolute;
  left: 50%;
  bottom: 12px;
  margin-left: -200px;
}
.init .linebg{
  width: 100%;
  height: 6px;
  position: absolute;
  top: 50%;
  margin-top: -3px;
}
.init .linebg .line{
  width: 0%;
  height: 6px;
  margin: 0 auto;
  background: rgba(49,75,130,1);
  animation: initLine 1s ease-out forwards;
}
.init .bottom{
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background: rgba(255,255,255,1);
  color:rgba(49,75,130,1);
  animation: leaveBottom 2s ease-out forwards;
}
.init .bottom .msg{
  width: 600px;
  height:100px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -300px;
  font-size:2.8em;
  line-height:100px;
  font-weight: lighter;
}
@keyframes leaveTop{
  0% {
    top: 0;
    color: rgba(49,75,130,1);
  }
  50% {
    top: 0;
    color: rgba(49,75,130,1);
  }
  100% {
    top: -50%;
    color: rgba(49,75,130,0);
  }
}
@keyframes initLine {
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  95% {
    width: 99%;
    background: rgba(49,75,130,1);
  }
  100% {
    width: 100%;
    background: rgba(49,75,130,0);
  }
}
@keyframes leaveBottom{
  0% {
    bottom: 0;
    color: rgba(49,75,130,1);
  }
  50% {
    bottom: 0;
    color: rgba(49,75,130,1);
  }
  100% {
    bottom: -50%;
    color: rgba(49,75,130,0);
  }
}
/* 手机端 */
@media (max-width: 768px) {
  .init .top img {
    width: 200px;
    height: 35px;
    margin-left: -100px;
  }
  .init .bottom .msg {
    width: 300px;
    height:50px;
    margin-left: -150px;
    font-size:1.4em;
    line-height:50px;
  }
}
</style>
