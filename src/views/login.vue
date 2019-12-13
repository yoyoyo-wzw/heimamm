<template>
  <div class="login-box">
      <div class="from-box"></div>
      <img class='login-pic' src="../assets/login_banner_ele.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .login-box {
        height: 100%;
        display: flex;
        /* 垂直居中 */
        align-items: center;
        /* 左右均分 */
        justify-content: space-around;
        background: linear-gradient(225deg,rgba(20,147,250,1),rgba(1,198,250,1));
    }
    .login-box .from-box {
        width: 478px;
        height: 550px;
        background-color: #F5F5F5;
    }
    .login-box .login-pic{}
</style>