<template>
  <div v-if="data">
    <van-nav-bar :title="data.dishes_name">
      <template #left>
        <van-icon name="arrow-left" size="18" @click="beforeNav" />
      </template>
      <template #right>
        <van-icon :name="like" size="18" @click="ToLike" />
      </template>
    </van-nav-bar>
    <van-image :src="data.dishes_pic" width="99vw" />
    <ul>
      <li>
        <i>菜品评分：</i>
        <van-rate v-model="value" />
      </li>
      <li>
        <span>所需食材：{{ data.Material }}</span>
      </li>
      <li>
        <span>食物口味：{{ data.taste }}</span>
      </li>
      <!-- <li>
        <span>做菜步骤：{{ data.steps }}</span>
      </li> -->
      <li v-for="(item, index) in steps" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { Dialog } from "vant"
// Dialog()
export default {
  data() {
    return {
      data: this.$route.query.item,
      value: 0,
      step: "",
      like: "like-o",
      steps: ["做菜步骤:"],
      dishes_id: [],
    }
  },

  methods: {
    beforeNav() {
      // console.log(this.$router.back)
      this.$router.back()
    },
    ToLike() {
      // console.log(this.$store.state.user_id)
      let user_id = sessionStorage.getItem("userId")
      // console.log(user_id)
      if (!user_id) {
        // console.log(1)
        // 注意提示框
        Dialog.confirm({
          title: "提示",
          message: "您还没有登录，是否登录",
        })
          .then(() => {
            // on confirm
            this.$router.push("/login")
          })
          .catch(() => {
            // on cancel
          })
      } else {
        let user_id = sessionStorage.getItem("userId")
        let params = `user_id=${user_id}&dishes_id=${this.data.dishes_id}`
        if (this.like == "like-o") {
          this.like = "like"
          this.axios.post("/add_collection", params).then((res) => {
            // console.log("收藏成功", res)
          })
        } else {
          this.like = "like-o"
          this.axios.post("/del_user_collection", params).then((res) => {
            // console.log("收藏取消", res)
          })
        }
      }
    },
  },
  mounted() {
    // console.log(this.data)
    this.value = this.data.score
    this.step = this.data.steps
    this.steps.push(...this.step.split(";"))
  },
  created() {
    let user_id = sessionStorage.getItem("userId")
    let params = `user_id=${user_id}`
    this.axios.post("/query_user_collection", params).then((res) => {
      // console.log(res)
      for (let i = 0; i < res.data.result.length; i++) {
        // console.log()
        this.dishes_id.push(JSON.parse(res.data.result[i].data).dishes_id)
        if (this.data.dishes_id == this.dishes_id[i]) {
          this.like = "like"
        }
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.van-image {
  margin: 10px 0 0 0.5vw;
}
ul {
  padding: 10px;
  li {
    display: block;
    margin: auto;
    padding: 5px;
    border: 1px solid #eee;
  }
}
</style>
