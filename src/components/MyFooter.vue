<template>
  <div>
    <van-tabbar fixed v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/collections">收藏</van-tabbar-item>
      <van-tabbar-item icon="guide-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/aboutme">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  computed: {
    active: {
      get() {
        switch (this.$route.path) {
          case "/":
            return 0
          case "/collections":
            return 1
          case "/find/":
            return 2
          case "/find":
            return 2
          case "/aboutme":
            return 3
        }
      },
      set() {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
