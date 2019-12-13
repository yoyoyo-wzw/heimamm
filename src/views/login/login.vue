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
            v-model="form.name"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            class="input"
            show-password
            v-model="form.name"
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
                v-model="form.name"
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
          <el-checkbox v-model="form.checked" class="el-checkbox">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="login-pic" src="../../assets/login_banner_ele.png" alt />
    <!-- 遮罩层 -->
    <div class="layer"></div>
    <!-- 注册盒子 -->
    <div class="register-box">
      <div class="register-title">用户注册</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        checked: true
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间啊",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
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

  // 表单盒子
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

  // 遮罩层
  .layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 1;
    background-color: black;
  }

  // 注册盒子
  .register-box {
    position: fixed;
    width: 602px;
    height: 786px;
    background-color: #ffffff;
    z-index: 2;
    .register-title {
      height: 53px;
      background-color: skyblue;
      text-align: center;
      line-height: 53px;
      font-size: 18px;
      color: #fefefe;
    }
  }
}
</style>