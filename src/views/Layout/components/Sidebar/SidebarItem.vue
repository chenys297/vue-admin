<template>
  <el-menu-item
    v-if="!route.children || route.children.length === 0"
    :index="route.name"
    :route="route"
  >
    <Icon v-if="route.meta.icon" :iconName="route.meta.icon" myIconfont style="margin-right: 5px;" />
    <span slot="title">{{ route.meta.title }}</span>
  </el-menu-item>
  <el-submenu v-else :index="route.name">
    <template slot="title">
      <Icon
        v-if="route.meta.icon"
        :iconName="route.meta.icon"
        myIconfont
        style="margin-right: 5px;"
      />
      <span slot="title">{{ route.meta.title }}</span>
    </template>
    <SidebarItem v-for="menu of route.children" :key="menu.name" :index="menu.name" :route="menu" />
  </el-submenu>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    route: {
      type: [Object, Array],
      required: true
    },
    index: {
      type: String,
      required: true
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
</style>
