<template>
  <div class="example">
    <div class="page-title">Vue Image Uncovering</div>
    <a
      class="repo"
      href="https://github.com/guAnsunyata/vue-mobile-image-uncover"
    >
      GitHub
    </a>
    <UncoverList>
      <template slot-scope="{ togglePopup }">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="card"
        >
          <h1>{{ title[index] }}</h1>

          <UncoverImage
            alt="example"
            :image-url="image"
            height="220"
            @pop-image="togglePopup"
          />
          <div class="content">
            雨にも負けず
            <br>風にも負けず
            <br>雪にも夏の暑さにも負けぬ
            <br>丈夫な体を持ち
            <br>欲はなく決して瞋らず
            <br>いつも静かに笑っている
            <br>一日に 玄米4合と
            <br>...
            <br>つまらないから止めろと言い
            <br>日照りのときは涙を流し
            <br>寒さの夏はおろおろ歩き
            <br>みんなにデクノボーと呼ばれ
            <br>ほめられもせず
            <br>苦にもされず
            <br>そういうものに
            <br>私はなりたい
          </div>
        </div>
      </template>
    </UncoverList>
    <div class="bottom">
      guAnsunyata
    </div>
  </div>
</template>

<script>
import UncoverList from '../List'
import UncoverImage from '../Image'

const title = [
  'のんびり',
  'きっさてん',
  'としょかん',
  'でばーと',
  'ほん',
  'のーと',
  'ほんだな',
  'しずか',
  'しずか',
]

const images = [
  'https://66.media.tumblr.com/2a28a74bc4fe03c5dfc3e23acd2fa656/tumblr_om0k7xWZYX1v7zz56o3_1280.jpg',
  'https://66.media.tumblr.com/184f6cc2a0583c8e219364db423dea90/b36c1e757034e189-1d/s1280x1920/14f444704c4d55813f9a9d69bff16b032c8b1d62.jpg',
  'https://66.media.tumblr.com/e46f9a20dd7e8d231659867c3fc4e110/tumblr_p7jql5jR4c1v7zz56o1_1280.jpg',
  'https://66.media.tumblr.com/3a4308be0fd5238bc296b4618acfc290/tumblr_om1l1yGMTt1v7zz56o2_1280.jpg',
  'https://66.media.tumblr.com/8d1803bb995ddcc856408768601dc8c1/tumblr_olxrg2Nwq41v7zz56o2_1280.jpg',
  'https://66.media.tumblr.com/8ba452c34a0723df91869d5d57a3254e/tumblr_olxrg2Nwq41v7zz56o5_1280.jpg',
  'https://66.media.tumblr.com/8535cf91fe4c46215bf1c715c8265117/tumblr_odplr2Dze71v7zz56o8_1280.jpg',
  'https://66.media.tumblr.com/b469a076d11ef9cb7ed23b5bef886f81/tumblr_odlvy4sipI1v7zz56o10_1280.jpg',
  'https://66.media.tumblr.com/83751311d9c667fa115746c22526cde9/tumblr_odlv0qlwB21v7zz56o5_1280.jpg',
  'https://66.media.tumblr.com/fe230e8458a4078d691a7fd8d7dd4e06/tumblr_o96ppmgGnZ1v7zz56o1_1280.jpg',
]

export default {
  components: {
    UncoverList,
    UncoverImage,
  },
  created() {
    this.title = title
    this.images = images
  },
}
</script>

<style>
body {
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #4a4a4a;
}

.page-title {
  margin: 40px 20px 15px 20px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  display: inline-block;
  padding: 3px 14px;
}

.repo {
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  color: #6b9db9;
}

.example {
  max-width: 500px;
  margin: 0 auto;
}

.card {
  padding: 20px 0;
  border: 1px solid #eee;
  margin-bottom: 20px;
  border-radius: 4px;
}

.content {
  padding: 20px;
  text-align: justify;
}

h1 {
  text-align: left;
  font-size: 22px;
  padding: 0 20px;
}

.bottom {
  margin-bottom: 20px;
}
</style>