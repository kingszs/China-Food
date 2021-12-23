<template>
  <div class="tab">
    <div class="title">用户注册</div>
    <div>
      <van-form validate-first @failed="onFailed" @submit="onSubmit">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          class="username"
          v-model="username"
          name="用户名"
          label="用户名"
          :placeholder="pu"
          :rules="[{ required: verifyUser, message: '' }]"
          ref="input_user"
          @blur="blurUser"
        />
        <van-field
          class="email"
          v-model="email"
          name="pattern"
          label="邮箱"
          :placeholder="pm"
          :rules="[{ pattern, message: '' }]"
          @blur="blurEmail"
        />
        <van-field
          class="password"
          v-model="pwd"
          type="password"
          name="password"
          label="密码"
          :placeholder="pd"
          :rules="[{ required: verifyPwd, message: '' }]"
          @blur="blurPwd"
        />
        <van-field
          class="password"
          type="password"
          v-model="yz_pwd"
          name="validator"
          label="验证密码"
          :placeholder="yzpd"
          :rules="[{ validator, message: '' }]"
          @blur="blurYzpwd"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            :disabled="!checked"
            @click.stop
          >
            注册
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
        <van-button round block to="/login" @click.stop> 登录 </van-button>
      </div>
    </div>
    <van-checkbox v-model="checked" style="margin-top: 40px; font-size: 12px">
      我已阅读并同意
      <router-link to="/">用户协议</router-link>
      和
      <router-link to="/">隐私政策</router-link>
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
      yz_pwd: "",
      email: "",
      pu: "用户名",
      pm: "请输入邮箱",
      pd: "请输入密码",
      yzpd: "请再次输入密码",
      pattern:
        /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, //邮箱正则验证
      password: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,18}$/, //只能输入6-20个字母、数字、下划线  密码验证
      regUser: /^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{1,16}$/, //限16个字符，支持中英文、数字、减号或下划线  用户名验证
    };
  },
  methods: {
    // 对于用户名 邮箱 密码 验证
    verifyPwd() {
      // 返回 true 就会打印警告
      if (this.pwd == "") {
        return true;
      } else if (!this.password.test(this.pwd)) {
        return true;
      } else {
        return false;
      }
    },
    verifyUser() {
      // 返回 true 就会打印警告
      if (this.username == "") {
        return true;
      } else if (!this.regUser.test(this.username)) {
        return true;
      } else {
        return false;
      }
    },
    // input输入框失焦后验证
    blurYzpwd() {
      if (this.pwd != this.yz_pwd) {
        this.yz_pwd = "";
        this.yzpd = "与上面的密码不一致";
      }
    },
    blurPwd() {
      if (this.pwd == "") {
        this.pd = "密码不能为空";
      } else if (!this.password.test(this.pwd)) {
        this.pwd = "";
        this.pd = "必须6-20个字母,数字,下划线";
      }
    },
    blurUser() {
      if (this.username == "") {
        this.pu = "用户名不能为空";
      } else if (!this.regUser.test(this.username)) {
        this.username = "";
        this.pu = "用户名格式不正确";
      }
    },
    blurEmail() {
      if (this.email == "") {
        this.pm = "邮箱不能为空";
      }
      if (!this.pattern.test(this.email)) {
        console.log(1);
        this.email = "";
        this.pm = "邮箱格式错误";
      }
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
      this.pu = "";
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      if (this.pwd == this.yz_pwd) {
        return true;
      } else {
        return false;
      }
    },
    onSubmit(values) {
      // console.log(values)
      let params = `email=${this.email}&password=${this.pwd}&username=${this.username}`;
      this.axios.post("/register", params).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          console.log("注册成功");
          this.$router.replace("/login");
        } else {
          console.log("注册失败");
          this.$dialog
            .alert({
              message: "用户名已经重复",
            })
            .then(() => {
              // on close
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
};
</script>
<style lang="scss" scoped>
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
    top: 31px;
  }
  .username,
  .email,
  .password {
    border: 1px solid #ebedf0;
  }
}
</style>
