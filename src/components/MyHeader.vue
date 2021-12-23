<template>
  <div>
    <van-nav-bar
      title="首页"
      :left-text="onactive ? '返回' : ''"
      :left-arrow="onactive"
      fixed
      v-if="show"
      placeholder
    >
      <template #right>
        <van-icon name="search" size="18" @click="show = false" />
      </template>
    </van-nav-bar>
    <form action="/" v-else>
      <van-search
        v-model="value"
        show-action
        @search="onSearch"
        placeholder="请输入搜索关键词"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      onactive: false,
      value: "",
      data: "",
    }
  },
  methods: {
    onCancel() {
      this.show = true
    },
    onSearch() {
      console.log(this.value)
      if (this.value == "") {
        console.log(1)
      } else {
        let url = `/search?item=${this.value}`
        // this.axios.get(url).then((res) => {
        // console.log(res)
        // this.data = res
        this.$router.push({ path: "/search", query: { url } })
        // })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
