<template>
  <div class="app-login">
    <el-form v-if="showDialog" ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">
          <span>管理系统</span>
        </h3>
      </div>
      <el-form-item prop="用户名">
        <span class="svg-container">
          <i class="el-icon-user-solid" />
        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="Username" type="text" auto-complete="on" />
      </el-form-item>
      <el-form-item prop="密码">
        <span class="svg-container">
          <i class="el-icon-lollipop" />
        </span>
        <el-input ref="password" v-model="loginForm.password" type="password" placeholder="Password" auto-complete="on" @keyup.enter.native="handleLogin" />
      </el-form-item>
      <el-button :loading="loading" type="primary" class="login-btn" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>
<script>

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: true,
      redirect: undefined,
      otherQuery: {}
    }
  },
  mounted() {
  },
  methods: {
    handleLogin() {
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
body{
  background-color:$bg;
}
/* reset element-ui css */
.app-login {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .login-btn {
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: normal;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.app-login {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .login-form {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 520px;
    max-width: 100%;
    padding: 0 35px 0;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    z-index: 2;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #fff;
    vertical-align: middle;
    width: 15px;
    display: inline-block;
    font-size: 16px;
  }
  .title-container {
    position: relative;
    z-index: 3;
    .title {
      font-size: 32px;
      color: $light_gray;
      margin: 20px auto 30px auto;
      text-align: center;
      font-weight: normal;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
