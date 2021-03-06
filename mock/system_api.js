export default {
  // 支持值为 Object 和 Array
  'GET /api/system_apis': {
    code:2000,
    data:{
      pagination:{
        total: 40,
        size:20,
        current: 1,
      },
      list:[
      {
        id: '1',
        name: '个人信息',
        address: '/self_info',
        method: 'GET',
        display:'[GET] 个人信息 /self_info',
        is_active: false,
      },
      {
        id: '2',
        name: '个人信息',
        address: '/self_info',
        method: 'GET',
        display:'[GET] 个人信息 /self_info',
        is_active: true,
      },
    ]},
    message:''
  }
   
}