var app = getApp();
var common = require('../../utils/common.js');

Page({

  data: {
    userInfo: !!wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo') : {}
  },

  onShow: function () {  
    this.setData({
      userInfo: !!wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo') : {}
    });
    console.log(this.data.userInfo)
  },

  previewImage() {
    var userInfo = this.data.userInfo;
    var urls = [];
    urls.push(userInfo.avatarUrl);
    wx.previewImage({
      current: urls[0], 
      urls: urls
    })
  },

  onShareAppMessage: function (options) {
    if (options.from === 'menu') {
      return {
        title: '什么都可以将就，唯独吃不可以！',
        path: '/pages/user/user'
      }
    }
  }
})