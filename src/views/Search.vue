<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        @search="onSearch"
        placeholder="请输入搜索关键词"
        @cancel="onCancel"
      />
    </form>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-grid :column-num="2" :gutter="5" v-if="data">
        <van-grid-item
          v-for="(item, index) in data"
          :key="index"
          :to="{ path: '/detailpage', query: { item, data } }"
        >
          <van-image :src="item.dishes_pic" />
          <span>{{ item.dishes_name }}</span>
        </van-grid-item>
      </van-grid>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      data: "",
      loading: false,
      finished: false,
    }
  },
  methods: {
    // 触底加载更新数据
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        //获取新数据
        let url = `/search?item=${this.value}`
        this.axios.get(url).then((res) => {
          // console.log(res)
          this.data.push(...res.data.result)
        })
        // 加载状态结束
        this.loading = false
      }, 1000)
    },
    onCancel() {
      this.$router.push("/")
    },
    onSearch() {
      // console.log(this.value)
      if (this.value == "") {
        // console.log(1)
      } else {
        let url = `/search?item=${this.value}`
        this.axios.get(url).then((res) => {
          // console.log(res)
          this.data = res.data.result
        })
      }
    },
  },
  mounted() {
    // console.log(this.$route.query)
    if (this.$route.query.url !== "") {
      this.axios.get(this.$route.query.url).then((res) => {
        // console.log(res)
        this.data = res.data.result
      })
    }
    this.value = this.$route.query.url.split("=")[1]
  },
}
</script>

<style lang="scss" scoped></style>
