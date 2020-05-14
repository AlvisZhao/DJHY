// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //tabs组件点击事件
    handleItemTap(e){
      //获取事件的index
      const {index}=e.currentTarget.dataset;
      //触发父组件自定义的事件
      this.triggerEvent("tabsItemChange",{index});
    }
    
  }
})
