<template>
  <el-menu
    :default-active="$route.name"
    :collapse="isCollapse"
    :background-color="sidebarBackgroundColor"
    :text-color="sidebarTextColor"
    :active-text-color="sidebarActiveTextColor"
    class="sidebar sidebar-container"
    style="border: none;"
  >
    <SidebarItem v-for="menu of menuList" :key="menu.name" :route="menu" :index="menu.name" />
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  components: { SidebarItem },
  data () {
    return {}
  },

  computed: {
    ...mapGetters({
      menuList: 'asyncRoutes',
      sidebarBackgroundColor: 'sidebarBackgroundColor',
      sidebarTextColor: 'sidebarTextColor',
      sidebarActiveTextColor: 'sidebarActiveTextColor',
      isCollapse: 'isCollapse'
    })
  }
}
</script>

<style lang='scss' scoped>
.sidebar {
  text-align: left;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
   &::-webkit-scrollbar {
    width: 0;
  }
  height: 100%;
}
</style>
<style>
.sidebar.sidebar-container:not(.el-menu--collapse) {
  width: 230px;
  min-height: 100%;
}
</style>
