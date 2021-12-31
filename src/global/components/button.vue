<template>
  <div class="button">
    <img src="../../assets/plus.svg" alt="plus" />
    <span class="title">{{ text }}</span>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
    type: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="less" scoped>
.button {
  background: #325baf;
  border-radius: 4px;
  width: 110px;
  height: 35px;
  align-items: center;
  display: flex;
  justify-content: center;
    cursor: pointer;
  img {
    margin-right: 10px;
  }
  .title {
    font-weight: bold;
    color: #ffffff;
    font-size: 13px;
  }
}
</style>
