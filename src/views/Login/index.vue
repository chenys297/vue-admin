<template>
  <div class="df jcc aic login" :style="{ backgroundImage: bgImg }">
    <el-form ref="loginRef" :model="loginForm" :rules="loginFormRules" class="login-form">
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

      <el-button
        plain
        style="width: 100%; margin-top: 5px; background-color: transparent; color: #fff;"
        @click="handleLogin"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const validateUsername = (formItem, value, cb) => {
      if (/^[a-zA-Z]/.test(value)) {
        cb()
      } else {
        cb(new Error('用户名必须以字母开头'))
      }
    }

    const validatePwd = (formItem, value, cb) => {
      new Promise((resolve, reject) => {
        resolve({ code: 200 })
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          code: 404,
          message: '随便错误'
        })
      })
        .then(res => {
          if (res.code === 200) {
            cb()
          } else {
            cb(new Error('就是不让你通过'))
          }
        })
        .catch(err => {
          cb(new Error(`出错了,原因：${err.message},你通过不了！`))
        })
    }

    return {
      bgImg: `url(${require('@/assets/images/bg_img.jpg')})`,
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名' },
          { trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { trigger: 'blur', validator: validatePwd }
        ]
      }
    }
  },

  watch: {
    $route: {
      handler: function (route) {
        this.redirectRoute = { path: '/' }
        if (this.$store.getters.isLogin) {
          this.$router.push(this.redirectRoute)
        }
      },
      immediate: true
    }
  },

  methods: {
    handleLogin () {
      this.$refs.loginRef.validate(async result => {
        if (result) {
          try {
            await this.$store.dispatch('user/login', this.loginForm)
            this.$router.push(this.redirectRoute)
          } catch (error) {
            this.$message({
              type: 'error',
              message: error
            })
          }
        }
      })
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
