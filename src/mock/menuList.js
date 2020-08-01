const menus = [
  {
    id: 100101,
    path: '/dashboard',
    name: 'dashboard',
    isMenu: 1,
    titleText: 'dashboard',
    remark: '',
    children: []
  },
  {
    id: 200000,
    path: '/sysMgmt',
    name: 'sysMgmt',
    isMenu: 1,
    titleText: '系统管理',
    remark: '',
    children: []
  },
  {
    id: 200101,
    path: '/sysUserMgmt',
    name: 'sysUserMgmt',
    isMenu: 1,
    titleText: '用户管理',
    remark: '系统用户管理',
    children: []
  },
  {
    id: 200201,
    path: '/sysRoleMgmt',
    name: 'sysRoleMgmt',
    isMenu: 1,
    titleText: '角色管理',
    remark: '系统角色管理',
    children: []
  },
  {
    id: 200101,
    path: '/sysPermisssionMgmt',
    name: 'sysPermisssionMgmt',
    isMenu: 1,
    titleText: '权限管理',
    remark: '系统权限管理',
    children: []
  },
  {
    id: 300000,
    path: '/components',
    name: 'components',
    isMenu: 1,
    titleText: '组件',
    remark: '组件列表',
    children: []
  },
  {
    id: 300101,
    path: '/table',
    name: 'table',
    isMenu: 1,
    titleText: '表格',
    remark: '表格组件',
    children: []
  }
]

export default {
  code: 200,
  messag: 'success',
  data: menus
}
