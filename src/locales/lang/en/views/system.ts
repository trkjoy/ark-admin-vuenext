export default {
  menu: {
    parent: 'Parent menu',
    name: 'Menu name',
    type: 'Type',
    icon: 'Icon',
    isShow: 'Status',
    router: 'Router',
    viewPath: 'View path',
    perm: 'Permissions',
    orderNum: 'Sort',

    // menu type
    menuTypeCatalogue: 'Catalogue',
    menuTypeMenu: 'Menu',
    menuTypePermission: 'Permission',

    // show state
    menuHidden: 'Hidden',

    editform: {
      title: 'Edit menu',
    },
  },

  role: {
    name: 'Role name',
    uniqueKey: 'Unique id',

    editform: {
      title: 'Edit role',
      parent: 'Parent role',
      permissionAssign: 'Permission assign',
    },
  },

  dept: {
    name: 'Dept name',
    fullname: 'Dept full name',
    code: 'Dept code',
    type: 'Dept type',

    deptTypeCompany: 'Company',
    deptTypeSubsidiary: 'Subsidiary',
    deptTypeDepartment: 'Department',

    editform: {
      title: 'Edit dept',
      parent: 'Parent Dept',
    },
  },
}
