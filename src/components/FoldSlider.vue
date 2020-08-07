<template>
  <div class="sliders no-select" :class="{ 'left-to-right': left2right }">
    <div
      v-for="(img, i) in imgs"
      :key="i"
      class="slider"
      :class="{ active: locIdx === i }"
      @mouseenter="changeSlider(i)"
      @mousemove="changeSlider(i)"
      @mouseleave="onMouseleave(i)"
      >
      <a class="big">
        <img :src="img.big" alt="">
        <div class="text">
          <h3 class="mb19"> </h3>
        </div>
      </a>
      <div class="small">
        <img :src="img.small" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'debounce';

export default  {
  data() {
    return {
      locIdx: 0,
      left2right: true,
      time : null,
      updateStatus: []
    }
  },
  props: ['imgs'],

  methods: {
    changeSlider() {},
    onMouseleave() {
      this.time = Date.now();
    }

  },
  created() {
    const TIME_GAP = 100;
    function changeSlider(idx) {
      if (!this.time || Date.now() - this.time < TIME_GAP) return;
      this.left2right = idx > this.locIdx;
      this.locIdx = idx;
    }
    this.changeSlider = debounce((changeSlider), TIME_GAP, false);
  }
}
</script>

<style lang="less" scoped>
@timeSpan: 0.25s;

.iconnew {
  width: 32px;
  height: 32px;
}
.sliders {
  display: inline-flex;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 30px 20px -20px rgba(0, 0, 0, 0.3);
  &.left-to-right{
    .slider.active {
      .small {
        // left: 0;

      }
    }

  }
  .slider {
    position: relative;
    overflow: hidden;
    transition: width @timeSpan ease-in-out;
    .big {
      transition: all @timeSpan ease-in-out;
      position: absolute;
      &::before {
        display: none;
        content: ' ';
        height: calc(100% - 40px);
        position: absolute;
        right: 24px;
        top: 0;
        border-right: 1px solid #fff;
        opacity: .5;
      }
      img {
        width: 100%;
      };
      .iconnew {
        position: absolute;
        bottom: 26%;
        right: 22%;
      }
      .text {
        color: #fff;
        text-align: right;
        h3 {
          color: #fff;
        }
        span {
          display: inline-block;
          color: #fff;
          border: 1px solid #fff;
          padding: 0 24px;
          height: 32px;
          line-height: 32px;
        }
      }
    }
    .small {
      transition: all @timeSpan ease-in-out;
      position: absolute;
      left: 0;
      .iconnew {
        position: absolute;
        bottom: 9%;
        right: 30%;
        transform: rotate(-90deg);
      }

      .text {
        position: absolute;
        display: flex;
        height: 100%;
        width: 477px;
        top: 0;
        right: 0;
        h3 {
          flex: 1;
        }
        .line {
          flex: 1;
          position: relative;
          top: 8px;
          border-top: 1px solid #fff;
          opacity: .5;
        }
      }
    }
    &.active {
      .big {
      }
      .small {
      }
    }
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
    img {
      width: 100%;
    }
  }
}

@media (max-width: 1366px) {
  .sliders {
    .slider {
      width: 120px;
      .big {
        width: 400px;
        left: -120px;
      }
      &.active {
        width: 400px;
        .big {
          left: 0;
        }
        .small {
          width: 120px;
          left: -120px;
        }
      }
    }
  }
}

@media (min-width: 1366px) {
  .sliders {
    .slider {
      width: 12000/1366vw;;
      .big {
        width: 40000/1366vw;
        left: -12000/1366vw;
      }
      .small {
        width: 12000/1366vw;;
      }
      &.active {
        width: 40000/1366vw;
        .big {
          left: 0;
        }
        .small {
          left: -12000/1366vw;;
        }
      }
    }
  }
}
</style>
