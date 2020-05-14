//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabs:[
      {
        id:0,
        value:"家庭诊疗",
        isActive:true
      },
      {
        id:1,
        value:"线上问诊",
        isActive:false
      },
      {
        id:2,
        value:"VIP定制",
        isActive:false
      },
      {
        id:3,
        value:"线上商城",
        isActive:false
      },
      {
        id:4,
        value:"名医直播",
        isActive:false
      },
      {
        id:5,
        value:"福利专区",
        isActive:false
      }
    ]
  },
  
  onLoad: function () {
    
  },
  //标题的点击事件，从子组件传递过来的
  handleTabsItemChange(e){
    const {index}=e.detail;
    //修改原数组
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    //赋值到data中
    this.setData({
      tabs
    })
  }
 
})
