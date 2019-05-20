// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  /**
   * 事件处理函数
   */
  getDetail: function (alias) {
    var url = 'https://shop15193902.youzan.com/wscshop/goods/goodsByTagAlias.json';
    var params = {
      pageSize: 20,
      page: this.data.page,
      offlineId: 0,
      order: '',
      alias: alias,
      kdt_id: 15001734
    }
    request(url, params, 'get').then(res => {
      wx.stopPullDownRefresh();
      if (res.code == 0 && res.data.list) {
        this.setData({
          list: this.data.list.concat(res.data.list)
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.info));
    this.setData({
      info: JSON.parse(options.info)
    })
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

  }
})