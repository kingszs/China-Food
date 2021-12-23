<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <!-- 不想显示公用组件 可以使用下面的格式写 &&后加 -->
    <my-footer
      style="margin-top: 50px"
      v-show="
        !(path === '/login') && !(path === '/register') && !(path === '/share')
      "
    />
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue"

export default {
  components: { MyFooter },
  data() {
    return {
      path: "",
    }
  },
  mounted() {
    this.path = this.$route.path //this.path = 当前页面路由
  },
  watch: {
    //watch属性用于监听路由的变化
    $route(to, from) {
      this.path = to.path
    },
  },
}
</script>

<style lang="scss" scoped></style>
