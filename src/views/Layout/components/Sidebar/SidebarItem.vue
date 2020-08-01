<template>
  <el-menu-item
    v-if="route.hidden === false && (!route.children || route.children.length === 0)"
    :index="route.name"
    :route="route"
    @click="handleClickMenuItem(route)"
  >
    <Icon v-if="route.meta.icon" :iconName="route.meta.icon" myIconfont style="margin-right: 5px;" />
    <span slot="title">{{ route.meta.title }}</span>
  </el-menu-item>
  <el-submenu v-else-if="route.hidden === false" :index="route.name">
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
  },

  methods: {
    handleClickMenuItem (route) {
      this.$router.push(route)

      this.$store.dispatch('app/addOpenedRoutes', {
        path: route.path,
        name: route.name,
        meta: route.meta
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
