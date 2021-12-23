<template>
  <div class="tab">
    <div id="backhome" @click.stop @click="backHome">
      <van-icon name="arrow-left" size="25px" />
      <span>回首页</span>
    </div>
    <div class="title">一起发现美食</div>
    <div>
      <van-form validate-first @failed="onFailed" @submit="onSubmit">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          :placeholder="pu"
          :rules="[{ required: emptyTest, message: '' }]"
          class="user"
          ref="input_user"
          @blur="blurUser"
        />
        <van-field
          v-model="pwd"
          type="password"
          name="密码"
          label="密码"
          :placeholder="pd"
          :rules="[{ required: true, message: '' }]"
          class="pd"
          ref="input_pd"
          @blur="blurPwd"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            :disabled="!checked"
          >
            登录
          </van-button>
        </div>
      </van-form>
      <van-divider
        :style="{
          color: '#1989fa',
          borderColor: '#1989fa',
          padding: '0 16px',
        }"
      >
        or
      </van-divider>
      <div style="margin: 16px">
        <van-button round block to="/register" @click.stop> 注册 </van-button>
      </div>
    </div>
    <van-checkbox v-model="checked" style="margin-top: 40px; font-size: 12px">
      我已阅读并同意
      <router-link to="#">用户协议</router-link>
      和
      <router-link to="#">隐私政策</router-link>
    </van-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      username: "",
      pwd: "",
      password: /^(\w){6,20}$/, //只能输入6-20个字母、数字、下划线
      pd: "密码",
      pu: "用户名",
    };
  },
  methods: {
    blurUser() {
      if (this.username == "") {
        this.pu = "请输入用户名";
      }
    },
    blurPwd() {
      if (this.pwd == "") {
        this.pd = "请输入密码";
      }
    },
    emptyTest() {
      if ((this.uisername = "")) {
        return true;
      } else {
        return false;
      }
    },
    backHome() {
      this.$router.push("/");
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
      if (this.username == "") {
        this.$dialog
          .alert({
            message: "用户名不能为空",
          })
          .then(() => {
            this.$nextTick(() => {
              this.$refs.input_user.focus();
            });
          });
      } else {
        if (this.pwd == "") {
          this.$dialog
            .alert({
              message: "密码不能为空",
            })
            .then(() => {
              this.$nextTick(() => {
                this.$refs.input_pd.focus();
              });
            });
        }
      }
    },
    onSubmit(values) {
      // console.log("submit", values)
      let params = `username=${this.username}&password=${this.pwd}`;
      this.axios.post("/login", params).then((res) => {
        if (res.data.code == 200) {
          // console.log("登录成功");
          this.$store.dispatch("getUser", this.username);
          this.axios.get(`/user?username=${this.username}`).then((res) => {
            this.$store.dispatch("getUserId", res.data.result[0].user_id);
            this.$store.dispatch("getUserPic", res.data.result[0].pic);
            console.log(res);
            // 登录成功后将token放入到sessionStorage
            sessionStorage.setItem("userName", res.data.result[0].username);
            sessionStorage.setItem("userId", res.data.result[0].user_id);
            sessionStorage.setItem("userPic", res.data.result[0].pic);
            this.$router.push("/aboutme");
          });
        } else {
          // console.log("登录失败");
          this.onload;
          this.$dialog
            .alert({
              message: "用户名或者密码错误",
            })
            .then(() => {
              this.username = "";
              this.pwd = "";
              this.$nextTick(() => {
                this.$refs.input_user.focus();
              });
            });
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input_user.focus();
    });
  },
  watch: {
    data(newValue, oldValue) {},
  },
};
</script>
<style lang="scss" scoped>
#backhome {
  display: block;
  height: 25px;
  width: 100px;
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 12px;
  font-weight: 100;
  display: flex;
  align-items: center;
  span {
    display: block;
  }
}
.tab {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  .title {
    font-size: 28px;
    position: fixed;
    font-weight: bold;
    text-align: center;
    top: 50px;
  }
  .phone {
    border: 1px solid #ebedf0;
  }
  .password {
    border: 1px solid #ebedf0;
  }
}
</style>
