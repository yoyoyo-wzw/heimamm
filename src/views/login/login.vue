<template>
  <div class="login-box">
    <div class="form-box">
      <!-- 表单标题 -->
      <div class="form-title">
        <img class="title-log" src="../../assets/title-log.png" alt />
        <span class="title">黑马面面</span>
        <i></i>
        <span class="sub_title">用户登录</span>
      </div>
      <!-- 表单内容 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="form-con">
        <!-- 手机号 -->
        <el-form-item prop="phone">
          <el-input
            class="input"
            v-model="loginForm.phone"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            class="input"
            show-password
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-row>
          <el-col :span="18">
            <el-form-item prop="captcha">
              <el-input
                class="input"
                v-model="loginForm.captcha"
                placeholder="请输入验证码"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <img class="captcha" :src="loginForm.captchaURL" @click="refrechCaptchaURL" alt />
          </el-col>
        </el-row>
        <!-- 协议条款 -->
        <el-form-item>
          <el-checkbox v-model="loginForm.checked" class="el-checkbox">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="login-pic" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    // 判断手机号--使用正则
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入手机号"));
      } else {
        const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("输入正确的手机号"));
        }
      }
    };
    return {
      // 登录数据
      loginForm: {
        phone: "",
        password: "",
        captcha: "",
        checked: false,
        captchaURL: process.env.VUE_APP_BASEURL + "/captcha?type=login"
      },
      // 登录规则
      loginRules: {
        phone: [{ required: true, validator: validatePhone, trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "change"
          }
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "change" },
          { min: 4, max: 4, message: "验证码长度为4", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    // 登录按钮
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        // 是否勾选协议
        if (this.loginForm.checked == true) {
          // 输入框全部输入正常
          if (valid) {
            // 发送axios获取登录信息
            axios({
              url: process.env.VUE_APP_BASEURL + "/login",
              method: "post",
              // 跨域请求可以携带cookie
              withCredentials: true,
              data: {
                phone: this.loginForm.phone,
                password: this.loginForm.password,
                code: this.loginForm.captcha
              }
            }).then(res => {
              window.console.log(res);
            });
          } else {
            this.$message.warning("信息输入错误");
          }
        } else {
          this.$message.warning("勾选协议");
        }
      });
    },
    // 刷新验证码
    refrechCaptchaURL() {
      this.loginForm.captchaURL =
        process.env.VUE_APP_BASEURL + "/captcha?type=login&" + Math.random();
    }
  }
};
</script>

<style lang='less'>
.login-box {
  height: 100%;
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 左右均分 */
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );

  // 表单盒子
  .form-box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding: 44px;
    box-sizing: border-box;

    // 表单标题
    .form-title {
      display: flex;
      align-items: center;
      font-weight: 400;
      margin-bottom: 27px;

      .title-log {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .title {
        font-size: 24px;
        margin-right: 14px;
      }
      i {
        width: 1px;
        height: 28px;
        margin-right: 12px;
        background-color: #c7c7c7;
      }
      .sub_title {
        font-size: 22px;
      }
    }

    // 表单内容
    .form-con {
      .input {
        height: 44px;
      }
      // 验证码
      .captcha {
        width: 100%;
        height: 40px;
      }
      // 协议条款
      .el-checkbox {
        display: flex;
        align-items: center;

        .el-checkbox__label {
          display: flex;
          align-items: center;
        }
      }
      // 按钮
      .el-button {
        // display: flex;
        width: 100%;

        &:nth-child(2) {
          margin-top: 26px;
          margin-left: 0;
        }
      }
    }
  }
}
</style>