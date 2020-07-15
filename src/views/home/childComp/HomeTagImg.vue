<template>
  <div class="recommends">
      <div v-for="item in recommends" class="recommends-item">
        <a :href="item.link">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>

export default {
  name: "HomeSwiper",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    
  }
};
</script>

<style>
.recommends{
  display: flex;
  text-align: center;
  padding: 15px 0px 30px ;
}
.recommends-item{
  flex: 1;
  font-size: 12px;
}
.recommends-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
}
</style>
