<template>
  <div
    ref="list"
    class="list"
    :class="{ 'zoom-down-cursor': isPopoutCoverActive }"
  >
    <slot :togglePopup="togglePopup" />
    <transition name="fade">
      <div v-if="isPopoutCoverActive" class="cover" @click="closePopup" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopoutCoverActive: false,
    }
  },
  beforeCreate() {
    this.isPopout = false
    this.lastestAnimationId = null

    this.imageWrapperEl = null
    this.imageEl = null
    this.imageStyle = null
    this.imageWrapperStyle = null
    this.originalImageStyleText = ''
    this.originalImageWrapperStyleText = ''
    this.imageStyleForOriginalPosition = null

    this.basicImageStyle = {
      position: 'absolute',
      transition: 'all 2s',
    }
  },
  methods: {
    togglePopup({
      imageWrapperEl = this.imageWrapperEl,
      imageEl = this.imageEl,
    }) {
      if (!this.isPopout) {
        this.imageWrapperEl = imageWrapperEl
        this.imageEl = imageEl
        this.originalImageStyleText = imageEl.style.cssText
        this.originalImageWrapperStyleText = imageWrapperEl.style.cssText
        this.openPopup()
      } else {
        this.closePopup()
      }
    },
    openPopup() {
      const imageWrapperRect = this.imageWrapperEl.getBoundingClientRect()
      const imageRect = this.imageEl.getBoundingClientRect()
      const listRect = this.$refs.list.getBoundingClientRect()

      this.addRecoverListener()
      this.isPopout = true
      this.isPopoutCoverActive = true
      this.imageStyle = {
        position: 'absolute',
        transition: 'all .2s',
        zIndex: 9999,
        top: `${-listRect.y + imageWrapperRect.y}px`,
        height: `${imageWrapperRect.height}px`,
        width: `${imageWrapperRect.width}px`,
        left: `${imageWrapperRect.x - listRect.x}px`,
      }
      this.imageStyleForOriginalPosition = this.imageStyle
      this.imageWrapperStyle = {
        height: `${imageRect.height}px`,
        width: `${imageRect.width}px`,
      }

      Object.assign(this.imageEl.style, this.imageStyle)
      Object.assign(this.imageWrapperEl.style, this.imageWrapperStyle)

      this.$nextTick(() => {
        this.getBgImageSourceSizeAndExecute(this.imageEl, (imageCtx) => {
          const imageRatio = imageCtx.height / imageCtx.width
          const displayImageWidth = Math.min(imageCtx.width, window.innerWidth)
          const displayImageHeight = Math.min(
            displayImageWidth * imageRatio,
            window.innerHeight * 0.85
          )
          this.imageStyle = {
            position: 'absolute',
            transition: 'all .2s',
            zIndex: 9999,
            top: `${-listRect.y +
              window.innerHeight / 2 -
              displayImageHeight / 2}px`,
            width: `${displayImageWidth}px`,
            height: `${displayImageHeight}px`,
            left: `${(window.innerWidth - displayImageWidth) / 2 -
              listRect.x}px`,
            cursor: 'zoom-out',
          }

          Object.assign(this.imageEl.style, this.imageStyle)
        })
      })
    },
    closePopup() {
      this.removeRecoverListener()
      this.imageStyle = this.imageStyleForOriginalPosition
      Object.assign(this.imageEl.style, this.imageStyle)
      Object.assign(this.imageWrapperEl.style, this.imageWrapperStyle)
      this.isPopoutCoverActive = false

      // 建立動畫組合，防止錯誤的 setTimeout 觸發
      this.lastestAnimationId = new Date().getTime()
      const setTimeoutId = this.lastestAnimationId

      setTimeout(() => {
        if (this.lastestAnimationId !== setTimeoutId) return

        this.isPopout = false
        this.imageEl.style.cssText = this.originalImageStyleText
        this.imageWrapperEl.style.cssText = this.originalImageWrapperStyleText
      }, 200)
    },
    getBgImageSourceSizeAndExecute(imageEl, callback) {
      const imageUrl = imageEl.style.backgroundImage
        .replace('url(', '')
        .replace(')', '')
        .replace(/"/gi, '')
      const img = new Image()
      img.onload = function() {
        callback(this)
      }
      img.src = `${imageUrl}`
    },
    addRecoverListener() {
      document.addEventListener('scroll', this.closePopup)
    },
    removeRecoverListener() {
      document.removeEventListener('scroll', this.closePopup)
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;

  &.zoom-down-cursor {
    cursor: zoom-out;
  }
}

.cover {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 999;
  left: 0;
}

.fade-enter-active {
  transition: opacity 0.25s;
}

.fade-leave-active {
  transition: opacity 0.25s;

  .cover-close {
    display: none;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
