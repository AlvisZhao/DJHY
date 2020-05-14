// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    info:[
      {
        id:0,
        value:"推荐",
        isActive:true
      },
      {
        id:1,
        value:"热门",
        isActive:false
      },
      {
        id:2,
        value:"精选病例",
        isActive:false
      },
      {
        id:3,
        value:"牙医圈",
        isActive:false
      },
      {
        id:4,
        value:"治疗反馈",
        isActive:false
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleInfoItemChange(e){
    const {index}=e.detail;
    //修改原数组
    let {info}=this.data;
    info.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    //赋值到data中
    this.setData({
      info
    })
  }
})