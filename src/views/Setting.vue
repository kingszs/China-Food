<template>
  <div>
    <van-card
      v-show="false"
      desc="ID:123"
      title="Hello World"
      class="goods-card"
      style="margin: 15px; border-radius: 10px"
      :thumb="require('/public/avatar/8.jpg')"
    />
    <van-card
      v-show="true"
      title="未登录"
      class="goods-card"
      :thumb="require('/public/avatar/70.jpg')"
      style="margin: 15px; border-radius: 10px"
    />
    <van-cell-group inset>
      <van-cell title="账号与安全" value="内容" is-link />
      <van-cell title="编辑资料" value="内容" is-link />
    </van-cell-group>
    <van-cell-group inset>
      <van-cell title="隐私设置" is-link value="内容" />
      <van-cell title="通知设置" is-link value="内容" />
      <van-switch-cell v-model="checked" title="深色模式" />
      <van-cell title="帮助与客服" is-link />
      <van-cell title="关于美食中国" is-link />
    </van-cell-group>
    <van-button
      type="primary"
      text="登录账号"
      block
      id="van_button"
      v-show="true"
    />
    <van-button
      type="danger"
      text="退出登录"
      block
      id="van_button"
      v-show="false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  beforeCreate() {
    // 修改背景色
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f7f8fa");
  },
  beforeDestroy() {
    // 销毁背景色
    document.querySelector("body").removeAttribute("style");
  },
};
</script>

<style lang="scss" scoped>
#van_button {
  margin: 7px auto 7px auto;
  width: 90%;
  border-radius: 20px;
  border: 0;
  font-size: 16px;
}
.goods-card {
  margin: 0;
  background-color: #fff;
}
.van-card__title {
  font-size: 18px !important;
  margin-top: 35px;
  margin-left: 10px;
}
.van-card__desc {
  margin-left: 10px;
}
.van-card__header {
  border-radius: 10px;
}
.van-cell-group {
  margin-top: 10px;
}
</style>
