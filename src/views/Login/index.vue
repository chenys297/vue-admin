<template>
  <div class="df jcc aic login" :style="{ backgroundImage: bgImg }">
    <el-form :model="loginForm" :rules="loginFormRules" class="login-form">
      <div class="form-title">Vue Admin</div>
      <el-form-item prop="username" required>
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
          maxlength="20"
          prefix-icon="el-icon-user"
        />
      </el-form-item>
      <el-form-item prop="password" required>
        <el-input
          v-model="loginForm.password"
          show-password
          placeholder="请输入密码"
          maxlength="20"
          prefix-icon="el-icon-lock"
        />
      </el-form-item>

      <el-button plain style="width: 100%; margin-top: 5px; background-color: transparent; color: #fff;">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      bgImg: `url(${require('@/assets/images/bg_img.jpg')})`,
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginFormRules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";
.login {
  height: 100%;
  width: 100%;
  text-align: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .login-form {
    width: 280px;
    padding: 20px;
    border-radius: 5px;

    background-color: rgba(#3c4c5b, 0.8);
  }
  .form-title {
    font-size: 32px;
    font-weight: 500;
    color: $active-color;
    margin-bottom: 30px;
  }
}
</style>
<style lang="scss">
.login {
  .el-input__inner {
    background-color: transparent;
    color: #fff;
  }
}
</style>
