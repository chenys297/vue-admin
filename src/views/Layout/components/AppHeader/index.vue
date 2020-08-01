<template>
  <div class="df aic jcsb cpt-app-header">
    <div class="df aic">
      <el-link :underline="false" @click="handleToggleCollapse">
        <Icon :name="isCollapse ? 's-unfold' : 's-fold'" :myIconfont="false" size="36px" />
      </el-link>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="route of matchRoutes"
          :key="route.path"
          :to="route.path"
        >{{ route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <UserAvatar class="avatar" />
  </div>
</template>

<script>
import UserAvatar from './userAvatar'
export default {
  name: 'AppHeader',
  components: { UserAvatar },
  data () {
    return {}
  },
  computed: {
    isCollapse () {
      return this.$store.getters.isCollapse
    },

    matchRoutes () {
      if (['dashboard', 'home', 'layout'].includes(this.$route.name)) {
        return this.$route.matched.slice(-1)
      }
      return this.$route.matched
    }
  },

  methods: {
    handleToggleCollapse () {
      this.$store.dispatch('setting/toggleCollapse')
    }
  }
}
</script>

<style lang='scss' scoped>
.cpt-app-header {
  flex-grow: 1;
  min-height: 50px;
  padding: 0 5px;

  .avatar {
    float: right;
  }
}
</style>
