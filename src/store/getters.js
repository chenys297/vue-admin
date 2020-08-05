const getters = {
  github: state => state.app.github,
  openedRoutes: state => state.app.openedRoutes,
  asyncRoutes: state => state.permission.asyncRoutes,
  isLogin: state => state.user.isLogin,
  userInfo: state => state.user.userInfo,
  sidebarBackgroundColor: state => state.setting.sidebarBackgroundColor,
  sidebarTextColor: state => state.setting.sidebarTextColor,
  sidebarActiveTextColor: state => state.setting.sidebarActiveTextColor,
  isCollapse: state => state.setting.isCollapse
}

export default getters
