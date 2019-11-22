<template>
  <div
    ref="imageWrapper"
    class="UncoverImage"
    @click="
      $emit('pop-image', {
        imageWrapperEl: $refs.imageWrapper,
        imageEl: $refs.image,
      })
    "
  >
    <div
      v-if="imageUrl"
      ref="image"
      class="image"
      :style="{
        height: `${height}px`,
        backgroundImage: `url(${imageUrl})`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 168,
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  background-position: center;
  background-size: cover;
  height: 168px;
  cursor: zoom-in;
}
</style>
