<template>
  <div>
    <my-header />
    <van-tabs v-model="activeName" v-if="data" @click="onClick">
      <van-tab
        :title="item.category_name"
        :name="item.category_name"
        v-for="(item, index) in data"
        :key="index"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-grid :column-num="2" :gutter="5">
            <van-grid-item
              v-for="(item, index) in categorySearch"
              :key="index"
              :to="{ path: '/detailpage', query: { item, data } }"
            >
              <van-image :src="item.dishes_pic" />
              <span>{{ item.dishes_name }}</span>
            </van-grid-item>
          </van-grid>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader.vue"
export default {
  components: { MyHeader },
  data() {
    return {
      activeName: "",
      data: "",
      categorySearch: "",
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
        // console.log(this.activeName)
        if (this.activeName == "推荐") {
          this.activeName = ""
          this.axios.get("recommend").then((res) => {
            // console.log(res)
            this.categorySearch.push(...res.data.result)
          })
        } else {
          // console.log(this.activeName)
          let url = `categorySearch?category_name=${this.activeName}`
          this.axios.get(url).then((res) => {
            // console.log(res.data.result)
            this.categorySearch.push(...res.data.result)
          })
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true
        // }
      }, 1000)
    },
    // 跳转详情界面
    MoveTo() {
      // console.log(this)
      this.$router.push("/detailpage")
    },
    ReqFoodCategory() {
      this.axios.get("/foodCategory").then((res) => {
        // console.log(res)
        this.data = res.data.result
      })
    },
    // 查询对应title下的菜品
    onClick(name, title) {
      if (title == "推荐") {
        this.axios.get("recommend").then((res) => {
          // console.log(res)
          this.categorySearch = res.data.result
        })
      } else {
        let url = `categorySearch?category_name=${title}`
        this.axios.get(url).then((res) => {
          this.categorySearch = res.data.result
        })
      }
    },
  },
  mounted() {
    this.ReqFoodCategory()
    // console.log(this.$root)
    // console.log(this.data)
    // console.log(this.$route.query)
  },
  // 首页首次加载随机显示数据表
  created() {
    this.axios.get("recommend").then((res) => {
      // console.log(res)
      this.categorySearch = res.data.result
      // console.log(this.categorySearch)
    })
  },
}
</script>

<style lang="scss" scoped></style>
