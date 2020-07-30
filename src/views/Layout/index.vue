<template>
  <el-container>
    <el-aside width="auto">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
        <Navbar />
      </el-header>
      <el-main>
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
</style>
