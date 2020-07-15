<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <span slot="center">购物街</span>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-tag-img :recommends="recommends"></home-tag-img>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from './childComp/HomeSwiper'
import HomeTagImg from './childComp/HomeTagImg'
export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeTagImg
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
.home-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
