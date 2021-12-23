<template>
  <div>
    <van-nav-bar
      title="分享你的美食"
      left-text="返回"
      right-text="发表"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="input">
      <input type="text" placeholder="您想分享的美食..." />
    </div>
    <div class="img-wai">
      <div class="img">
        <img :src="require('/public/find/add.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/find")
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 100vw;
  height: 30vh;

  input {
    margin-left: 5vw;
    margin-top: 3vh;
    border: 0px;
  }
}
.img-wai {
  width: 100vw;
  height: 20vh;
  display: flex;
  padding-left: 5vw;
}
.img {
  width: 37vw;
  height: 20vh;
  position: relative;
  background-color: #edf0f3;

  img {
    width: 15vw;
    height: 9vh;
    position: absolute;
    top: 2.5rem;
    left: 2.8rem;
  }
}
</style>
