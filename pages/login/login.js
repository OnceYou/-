var common = require('../../utils/common.js');

Page({
  userInfoHandler: function (e) {  
    console.log(e);
    var userInfo = e.detail.userInfo;
    common.setStorage('userInfo', userInfo);
    wx.switchTab({
      url: '../index/index'
    });
  }
})