<template>
  <div>
    <van-divider
      :style="{ color: 'red', borderColor: 'red', padding: '0 16px' }"
    >
      我的收藏
    </van-divider>
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
  </div>
</template>

<script>
import { Dialog } from "vant"
// Dialog()
export default {
  data() {
    return {
      active: 0,
      data: [],
    }
  },
  methods: {},
  mounted() {
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
          // console.log(this.$router)
          this.$router.push("/login")
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    } else {
      // console.log(user_id)
      let params = `user_id=${user_id}`
      this.axios.post("/query_user_collection", params).then((res) => {
        // console.log(res)
        for (let i = 0; i < res.data.result.length; i++) {
          this.data.push(JSON.parse(res.data.result[i].data))
          // console.log(JSON.parse(res.data.result[i].data).dishes_id)
        }
        // console.log(this.data)
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
