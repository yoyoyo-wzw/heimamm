<template>
  <div class="login-box">
    <div class="from-box">
      <!-- 表单标题 -->
      <div class="from-title">
        <img class="title-log" src="../../assets/title-log.png" alt />
        <span class="title">黑马面面</span>
        <i></i>
        <span class="sub_title">用户登录</span>
      </div>
      <!-- 表单内容 -->
      <el-form ref="form" :model="from" class="from-con">
        <!-- 手机号 -->
        <el-form-item>
          <el-input
            class="input"
            v-model="from.name"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            class="input"
            show-password
            v-model="from.name"
            placeholder="请输入密码"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-row>
          <el-col :span="18">
            <el-form-item>
              <el-input
                class="input"
                v-model="from.name"
                placeholder="请输入验证码"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <img class="captcha" src="../../assets/captcha.png" alt />
          </el-col>
        </el-row>
        <!-- 协议条款 -->
        <el-form-item>
          <el-checkbox v-model="from.checked" class="el-checkbox">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button type="primary" class='register'>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="login-pic" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: {
        name: "",
        checked: true
      }
    };
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

  .from-box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding: 44px;
    box-sizing: border-box;

    // 表单标题
    .from-title {
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
    .from-con {
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
      // 注册按钮
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