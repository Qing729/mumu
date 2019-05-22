// pages/all-goods/all-goods.js
import { request } from '../../utils/request.js'
import Notify from '../../miniprogram_npm/vant-weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1
  },

  /**
   * 事件处理函数
   */
  getList: function(e) {
    var url = 'https://h5.youzan.com/wscshop/showcase/goods/allGoods.json';
    var params = {
      pageSize: 20,
      page: this.data.page,
      offlineId: 0,
      order: '',
      goodsType: 2,
      kdt_id: 15001734
    }
    request(url, params, 'get').then(res => {
      wx.stopPullDownRefresh();
      if (res.data.list && res.data.list.length > 0) {
        this.setData({
          list: this.data.list.concat(res.data.list)
        });
        this.data.page++;
      } else {
        Notify('没有更多了');
      }
    })
  },
  goDetail: function(e) {
    wx.navigateTo({
      url: '../detail/detail?info=' + JSON.stringify(e.currentTarget.dataset.info)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startPullDownRefresh();
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
    this.data.page = 1;
    this.data.list = [];
    this.getList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})