<template>
  <div>
    <side-menu></side-menu>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import sideMenu from "./side-menu.vue";
export default {
  name: "Baseview",
  components: {
    "side-menu": sideMenu,
  },
};
</script>

<style lang="less" scoped>
.page-container {
  padding-left: 340px;
}
</style>
