<template>
  <div>
    <van-card
      v-show="show"
      :desc="`ID:${this.user_id}`"
      :title="this.username"
      class="goods-card"
      style="margin: 15px; border-radius: 10px"
      :thumb="require(`/public/avatar/${pic}`)"
    />
    <van-card
      v-show="!show"
      title="未登录"
      class="goods-card"
      :thumb="require('/public/avatar/123.jpg')"
      style="margin: 15px; border-radius: 10px"
    />
    <van-cell-group inset>
      <van-cell title="账号与安全" value="内容" is-link v-show="show" />
      <van-cell title="编辑资料" value="内容" is-link v-show="show" />
    </van-cell-group>
    <van-cell-group inset>
      <van-cell title="隐私设置" is-link value="内容" v-show="show" />
      <van-cell title="通知设置" is-link value="内容" v-show="show" />
      <van-switch-cell v-model="checked" title="深色模式" />
      <van-cell title="帮助与客服" is-link />
      <van-cell title="关于美食中国" is-link />
    </van-cell-group>
    <van-button
      type="primary"
      text="登录账号"
      block
      id="van_button"
      v-show="!show"
      to="/login"
    />
    <van-button
      type="danger"
      text="退出登录"
      block
      id="van_button"
      v-show="show"
      @click="logOut"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      show: false,
      pic: "8.jpg",
      username: "",
      user_id: "",
    };
  },
  beforeCreate() {
    console.log("用户图片已经保存到state中", this.$store.state.user_pic);
    // 修改背景色
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f7f8fa");
  },
  beforeDestroy() {
    // 销毁背景色
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    logOut() {
      this.show = false;
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("userPic");
      sessionStorage.removeItem("userId");
      this.$store.state.user_pic = "";
      this.$store.state.user = "";
      this.$store.state.user_id = "";
    },
  },
  mounted() {
    console.log(this.show);
    console.log(!!this.$store.state.user_pic);
    if (!!this.$store.state.user) {
      this.show = true;
      this.pic = this.$store.state.user_pic;
      this.user_id = this.$store.state.user_id;
      this.username = this.$store.state.user;
    }
    this.username = sessionStorage.getItem("userName");
    if (this.username) {
      this.show = true;
      this.pic = sessionStorage.getItem("userPic");
      this.user_id = sessionStorage.getItem("userId");
    }
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
