const dynamicRoutes = [
  {
    path: '/dashoboard',
    name: 'dashoboard',
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
    hide: false,
    meta: {
      requireAuth: true,
      title: 'dashboard',
      icon: 'cpts'
    }
  },
  {
    path: '/sysMgmt',
    name: 'sysMgmt',
    redirect: '/sysUserMgmt',
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
    hide: false,
    meta: {
      requireAuth: true,
      title: '系统管理',
      icon: 'cpts'
    },
    children: [
      {
        path: '/sysUserMgmt',
        name: 'sysUserMgmt',
        component: () =>
          import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
        hide: false,
        meta: {
          requireAuth: true,
          title: '用户管理',
          icon: 'cpts'
        },
        children: []
      },
      {
        path: '/sysRoleMgmt',
        name: 'sysRoleMgmt',
        component: () =>
          import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
        hide: false,
        meta: {
          requireAuth: true,
          title: '角色管理',
          icon: 'cpts'
        },
        children: []
      },
      {
        path: '/sysPermisssionMgmt',
        name: 'sysPermisssionMgmt',
        component: () =>
          import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
        hide: false,
        meta: {
          requireAuth: true,
          title: '权限管理',
          icon: 'cpts'
        },
        children: []
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    redirect: '/table',
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
    hide: false,
    meta: {
      requireAuth: true,
      title: '组件列表',
      icon: 'cpts'
    },
    children: [
      {
        path: '/table',
        name: 'table',
        component: () =>
          import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
        hide: false,
        meta: {
          requireAuth: true,
          title: '表格',
          icon: 'cpts'
        },
        children: []
      }
    ]
  }
]

export default dynamicRoutes
