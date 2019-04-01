/**
 * 
 * 懒加载动态路由 
 */
function lazy(code) {

  //return  resolve => require(["@/components/" + name + ".vue"], resolve)
  return getComponetByPath('/' + code);


}
function getComponetByPath(path) {
  for (var i = 0; i < dynamicRouter.length; i++) {
    var route = dynamicRouter[i];
    if (route.path == path) {
      return route.component;
    }
  }
}
/**
 * 路由定义
 * path跟配置里的资源标示对应,同时跟url地址对应
 */
const dynamicRouter = [
  {
    name: 'tunnel',
    path: '/tunnel',
    component: resolve => require(['@/components/tunnel/tunnel_page.vue'], resolve),
    meta: {
      title: '通道列表'
    }
  },
  {
    name: 'gateway',
    path: '/gateway',
    component: resolve => require(['@/components/gateway/gateway_manage.vue'], resolve),
    meta: {
      title: '通道标签'
    }
  },
  {
    name: 'product',
    path: '/product',
    component: resolve => require(['@/components/product/product_page.vue'], resolve),
    meta: {
      title: '产品列表'
    }
  },
  {
    name: 'user',
    path: '/user',
    component: resolve => require(['@/components/account/user_page.vue'], resolve),
    meta: {
      title: 'LBS营销系统'
    }
  },
  {
    name: 'index',
    path: '/index',
    component: resolve => require(['@/components/index.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  },
  {
    name: 'tunnelConfig',
    path: '/tunnelConfig',
    component: resolve => require(['@/components/index.vue'], resolve),
    meta: {
      title: '通道配置'
    } 
  },
  {
    name: 'messageboard',
    path: '/messageboard',
    component: resolve => require(['@/components/tablepage/messageboard.vue'], resolve),
    meta: {
      title: '系统首页'
    }
  },
  {
    name: 'searchinput',
    path: '/searchinput',
    component: resolve => require(['@/components/searchinput/searchinput.vue'], resolve),
    meta: {
      title: '查询输入页'
    }
  },
  {
    name: 'tabpage',
    path: '/tabpage',
    component: resolve => require(['@/components/tabpage/tabpage.vue'], resolve),
    meta: {
      title: '标签选项卡'
    }
  },
  {
    name: 'tablepage',
    path: '/tablepage',
    component: resolve => require(['@/components/tablepage/tablepage.vue'], resolve),
    meta: {
      title: '综合表格页111'
    }
  }
  ,
  {
    name: 'formpage',
    path: '/formpage',
    component: resolve => require(['@/components/formpage/formpage.vue'], resolve),
    meta: {
      title: '表单页1'
    }
  }
  ,
  {
    name: 'treepage',
    path: '/treepage',
    component: resolve => require(['@/components/treepage/treepage.vue'], resolve),
    meta: {
      title: '树组件页1'
    }
  },
  {
    name: 'OrganizationTree',
    path: '/organizationTree',
    component: resolve => require(['@/components/admin/OrganizationTree.vue'], resolve),
    meta: { title: '机构管理' }
  },
  {
    name: 'SysUser',
    path: '/sysUser',
    component: resolve => require(['@/components/admin/SysUser.vue'], resolve),
    meta: { title: '用户管理' }
  },
  {
    name: 'SysAcl',
    path: '/sysAcl',
    component: resolve => require(['@/components/admin/SysAcl.vue'], resolve),
    meta: { title: '角色资源管理' }
  },
  {
    name: 'SysMenu',
    path: '/sysMenu',
    component: resolve => require(['@/components/admin/SysMenu.vue'], resolve),
    meta: { title: '菜单管理' }
  },
  {
    name: 'SysResource',
    path: '/sysResource',
    component: resolve => require(['@/components/admin/SysResource.vue'], resolve),
    meta: { title: '资源管理' }
  },
  {
    name: 'SysRole',
    path: '/sysRole',
    component: resolve => require(['@/components/admin/SysRole.vue'], resolve),
    meta: { title: '角色管理' }
  },
  {
    name: 'sysRoleMap',
    path: '/sysRoleMap',
    component: resolve => require(['@/components/admin/SysRoleMap.vue'], resolve),
    meta: { title: '角色权限管理' }
  },
  {
    name: 'msg',
    path: '/msg',
    component: resolve => require(['@/components/message/msg.vue'], resolve),
    meta: { title: '建议留言' }
  },
  {
    name: 'messageboard',
    path: '/messageboard',
    component: resolve => require(['@/components/tablepage/messageboard.vue'], resolve),
    meta: {
      title: '增删改查'
    }
  },
  {
    name: 'messageboard3',
    path: '/messageboard3',
    component: resolve => require(['@/components/tablepage/messageboard.vue'], resolve),
    meta: {
      title: '增删改查'
    }
  },
  {
    name: 'messageboard2',
    path: '/messageboard2',
    component: resolve => require(['@/components/tablepage/messageboard2.vue'], resolve),
    meta: {
      title: '增删改查二'
    }
  },
  {
    name: 'transition',
    path: '/transition',
    component: resolve => require(['@/components/flex/transition.vue'], resolve),
    meta: {
      title: '左导航切换效果'
    }
  },
  {
    name:'detail',
    path: '/detail',
    component: resolve => require(['@/components/tablepage/detail.vue'], resolve),
    meta:{title:'详情页'}
  }, 
  {
    name:'ckeditor',
    path: '/ckeditor',
    component: resolve => require(['@/components/ckeditor/index.vue'], resolve),
    meta:{title:'文本编辑器'}
  }
]
export { lazy }

