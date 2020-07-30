<template>
  <el-container class="layout">
    <el-aside width="auto" class="app-aside">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="app-header">
        <AppHeader />
        <Navbar />
      </el-header>
      <el-main class="app-main">
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { AppHeader, AppMain, Sidebar, Navbar } from './components'
export default {
  name: 'Layout',
  components: { AppHeader, AppMain, Sidebar, Navbar },
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
.layout {
  height: 100%;
  width: 100%;
}
.app-main {
  padding: 20px;
  background-color: cornflowerblue;
}
.app-aside {
  background-color: aquamarine;
}
.app-header {
  background-color: yellowgreen;
}
</style>
