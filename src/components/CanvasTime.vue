<template>
  <div ref="canvas">
    <canvas id="canvas" width="500" height="500" :class="isanimated ? 'animated flipInX' : ''"></canvas>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  props: {
    isanimated: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      isDay: '',
      weekday: [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
    }
  },
  watch: {
    isDay () {
      if (this.isDay) {
        document.querySelector('body').setAttribute('style', 'background-color: rgba(255,245,247,1)')
        document.getElementById('table').firstChild.setAttribute('style', 'fill: #fff')
      } else {
        console.log(1)
        document.querySelector('body').setAttribute('style', 'background-color: rgba(3,22,52,1)')
        document.getElementById('table').firstChild.setAttribute('style', 'fill: rgba(3,22,52,1)')
      }
    }
  },
  mounted () {
    this.TimeCanvas()
    this.isDay = true
  },
  methods: {
    TimeCanvas () {
      const that = this
      const ctx = document.getElementById('canvas').getContext('2d')
      ctx.lineWidth = 17
      ctx.shadowBlur = 15
      ctx.strokeStyle = '#00ffff'
      ctx.shadowColor = '#00ffff'
      function degToRad (degree) {
        const factor = Math.PI / 180
        return degree * factor
      }
      function renderTime () {
        // 时间
        const now = new Date()
        const today = now.toDateString()
        let time = now.toLocaleTimeString()
        const day = now.getDay()
        const hrs = now.getHours()
        const min = now.getMinutes()
        const sec = now.getSeconds()
        const mil = now.getMilliseconds()
        const smoothsec = sec + (mil / 1000)
        const smoothmin = min + (smoothsec / 60)
        ctx.fillRect(0, 0, 500, 500)
        // 设置小时
        ctx.beginPath()
        ctx.arc(250, 250, 200, degToRad(270), degToRad((hrs * 30) - 90))
        ctx.stroke()
        // 设置分钟
        ctx.beginPath()
        ctx.arc(250, 250, 170, degToRad(270), degToRad((smoothmin * 6) - 90))
        ctx.stroke()
        // 设置秒
        ctx.beginPath()
        ctx.arc(250, 250, 140, degToRad(270), degToRad((smoothsec * 6) - 90))
        ctx.stroke()
        // 设置星期
        ctx.font = '25px Helvetica'
        if (that.isDay) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        } else {
          ctx.fillStyle = 'rgba(00, 255, 255, 1)'
        }
        ctx.fillText(that.weekday[day], 150, 200)
        // 设置日期
        ctx.font = '25px Helvetica'
        if (that.isDay) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        } else {
          ctx.fillStyle = 'rgba(00, 255, 255, 1)'
        }
        ctx.fillText(today, 150, 250)
        // 设置时间
        ctx.font = '25px Helvetica Bold'
        if (that.isDay) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        } else {
          ctx.fillStyle = 'rgba(00, 255, 255, 1)'
          time = '晚上' + time.substring(2, time.length)
        }
        ctx.fillText(time + ':' + mil, 150, 300)
        if (that.isDay) {
          if (hrs < 18 && hrs >= 6) {
            const gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300)
            gradient.addColorStop(0, '#fff')
            gradient.addColorStop(1, 'rgba(255,245,247,1)')
            ctx.strokeStyle = 'rgba(49,75,130,1)'
            ctx.shadowColor = '#03303a'
            ctx.fillStyle = gradient
            that.isDay = true
          } else {
            that.isDay = false
          }
        } else {
          if (hrs >= 18 || hrs < 6) {
            const gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300)
            ctx.strokeStyle = '#00ffff'
            ctx.shadowColor = '#00ffff'
            gradient.addColorStop(0, '#03303a')
            gradient.addColorStop(1, 'rgba(3,22,52,1)')
            ctx.fillStyle = gradient
            this.isDay = false
          } else {
            that.isDay = true
          }
        }
      }
      setInterval(renderTime, 40)
    }
  }
}
</script>

<style>
#canvas {
  position: absolute;
  top: 10vh;
  right: 20vh;
  width: 20vw;
}
#canvas.flipInX{
  animation-delay:2s;
}
#canvas.flipInX{
  animation-delay:2s;
}
@media (max-width: 768px) {
  #canvas {
    right: 25vw;
    width: 50vw;
  }
}
</style>
