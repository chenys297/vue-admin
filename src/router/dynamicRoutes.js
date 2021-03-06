/* Layout */
import Layout from '@/views/Layout'

const dynamicRoutes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   hidden: false,
  //   meta: {
  //     requireAuth: true,
  //     title: '首页',
  //     icon: 'cpts'
  //   },
  //   children: [
  //     {
  //       path: '/dashboard',
  //       name: 'dashboard',
  //       component: () =>
  //         import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
  //       hidden: false,
  //       meta: {
  //         requireAuth: false,
  //         title: 'Dashboard',
  //         icon: 'dashboard'
  //       }
  //     }
  //   ]
  // },
  {
    path: '/sysMgmt',
    name: 'sysMgmt',
    component: Layout,
    redirect: '/sysUserMgmt',
    hidden: false,
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
          import(/* webpackChunkName: "sysUserMgmt" */ '@/views/SystemMgmt/UserMgmt'),
        hidden: false,
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
          import(/* webpackChunkName: "sysRoleMgmt" */ '@/views/SystemMgmt/RoleMgmt'),
        hidden: false,
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
          import(/* webpackChunkName: "sysPermisssionMgmt" */ '@/views/SystemMgmt/PermissionMgmt'),
        hidden: false,
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
    component: Layout,
    redirect: '/table',
    hidden: false,
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
          import(/* webpackChunkName: "tableDemo" */ '@/views/ComponentsDemo/Tables/table.vue'),
        hidden: false,
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
