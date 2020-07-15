<template>
  <div class="tab_bar_item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
        <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
        type:String,
        default:"deeppink"
    }
  },
  data() {
    return {

    };
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.path)!=-1
      },
      activeStyle(){
          return this.isActive ? {"color":this.activeColor}:{}
      }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab_bar_item img {
  height: 24px;
  width: 24px;
  margin-top: 2px;
}


</style>
