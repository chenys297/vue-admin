<template>
  <el-dropdown class="cpt-user-avatar" @command="handleCommand">
    <span>
      <el-avatar :src="avatarUrl" shape="circle" class="avatar" />
      <Icon name="caret-bottom" :myIconfont="false" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="setting">设置</el-dropdown-item>
      <el-dropdown-item command="github">Github</el-dropdown-item>
      <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'UserAvatar',
  data () {
    return {
      avatarUrl: require('@/assets/images/avatar.jpg')
    }
  },

  created () {
    this.initHooks()
  },

  methods: {
    initHooks () {
      this.hooks = {}

      this.hooks.logout = async () => {
        try {
          await this.$store.dispatch('user/logout')
          this.$message({
            type: 'success',
            message: '已登出'
          })
          this.$router.push({ path: '/login' })
        } catch (error) {
          this.$message({
            type: 'error',
            message: error
          })
        }
      }

      this.hooks.github = () => {
        window.open(encodeURI(this.$store.getters.github))
      }
    },

    handleCommand (command) {
      this.hooks[`${command}`]()
    }
  }
}
</script>

<style lang='scss' scoped>
.cpt-user-avatar {
  cursor: pointer;
  .avatar {
    border: 1px solid #dddddd;
  }
}
</style>
