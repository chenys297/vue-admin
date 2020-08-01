const getters = {
  asyncRoutes: state => state.permission.asyncRoutes,
  openedRoutes: state => state.app.openedRoutes,
  sidebarBackgroundColor: state => state.setting.sidebarBackgroundColor,
  sidebarTextColor: state => state.setting.sidebarTextColor,
  sidebarActiveTextColor: state => state.setting.sidebarActiveTextColor,
  isCollapse: state => state.setting.isCollapse
}

export default getters
