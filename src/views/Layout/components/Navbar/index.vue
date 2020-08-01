<template>
  <div class="cpt-navbar">
    <el-tag
      v-for="route of openedRoutes"
      :key="route.path"
      :id="route.path"
      :effect="route.path === $route.path ? 'dark' : 'light'"
      :closable="!disableCloseNames.includes(route.name)"
      size="mini"
      class="nav-item"
      @click="handleClickTag(route)"
      @close="handleClose(route)"
    >{{ route.meta.title }}</el-tag>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      disableCloseNames: ['dashoboard', 'home']
    }
  },
  computed: {
    openedRoutes () {
      return this.$store.getters.openedRoutes
    }
  },
  methods: {
    handleClickTag (route) {
      this.$router.push(route)
    },

    async handleClose (route) {
      const lastRoute = await this.$store.dispatch(
        'app/removeOpenedRoutes',
        route
      )
      this.$router.push(lastRoute)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.cpt-navbar {
  min-height: 26px;
  text-align: left;
  padding: 0px 5px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: #fafafa;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .nav-item {
    margin: 3px 0;
    cursor: pointer;
    user-select: none;

    &:hover {
      border-color: $--color-primary;
    }
  }
  .nav-item:not(:first-child) {
    margin-left: 5px;
  }
}
</style>
