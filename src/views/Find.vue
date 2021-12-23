<template>
  <div>
    <div class="tu">
      <img class="bj" :src="require('/public/find/2.jpeg')" alt="" />
      <img :src="require(`/public/avatar/${pic}`)" alt="" class="avatar-zj" />
      <router-link to="/share">
        <img :src="require('/public/find/share.png')" alt="" class="icon"
      /></router-link>
    </div>
    <div class="content">
      <img :src="require('/public/avatar/1.jpg')" class="avatar" />
      <span class="name">小巧的猪猪</span>
      <span class="art">冬至要记得吃饺子呀!</span>
      <img :src="require('/public/find/jz.jpg')" class="nr" />
    </div>
    <div class="content">
      <img :src="require('/public/avatar/2.jpg')" class="avatar" />
      <span class="name">无处安放的灵魂</span>
      <span class="art">自制的清炒白菜,刮油首选...小小的骄傲一把</span>
      <img :src="require('/public/find/001.jpg')" class="nr" />
    </div>
    <div class="content">
      <img :src="require('/public/avatar/5.jpg')" class="avatar" />
      <span class="name">张先生</span>
      <span class="art">日常小菜：青椒肉丝</span>
      <img :src="require('/public/find/002.jpg')" class="nr" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: "8.jpg",
    };
  },
  mounted() {
    if (sessionStorage.getItem("userPic")) {
      this.pic = sessionStorage.getItem("userPic");
    }
  },
};
</script>

<style lang="scss" scoped>
.tu {
  width: 100vw;
  height: 35vh;
  position: relative;
}
.bj {
  width: 100vw;
  height: 35vh;
}
.avatar-zj {
  border-radius: 10px;
  position: absolute;
  right: 8vw;
  top: 28vh;
}
.icon {
  width: 8vw;
  position: absolute;
  right: 3vw;
  top: 1vh;
}
.content {
  width: 100vw;
  height: 37vh;
  margin-top: 40px;
  position: relative;
}
.avatar {
  width: 50px;
  border-radius: 5px;
  position: absolute;
  left: 15px;
}
.name {
  font-size: 20px;
  color: #195795;
  position: absolute;
  left: 80px;
}
.art {
  font-size: 17px;
  position: absolute;
  left: 80px;
  top: 30px;
}
.nr {
  width: 55vw;
  height: 25vh;
  position: absolute;
  left: 80px;
  top: 75px;
}
</style>
