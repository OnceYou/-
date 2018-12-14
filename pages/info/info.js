var app = getApp();
var common = require('../../utils/common.js');

Page({

  data: {
    results: null
  },

  onLoad: function (options) {
    var current_date = new Date();
    var month = current_date.getMonth() + 1;
    var day = current_date.getDate();
    var domain = app.globalData.domain;
    var url = domain + '/todayOnhistory/queryEvent.php?date=' + month + '%2F' + day + '&key=253b98a10624a1e96fec6e767bd9cd7d';
    common.showToast('加载中...', 'loading');
    common.http(url, 'GET', this.callbackDate);
  },

  callbackDate: function(data) {
    console.log(data);
    if(data.reason == 'success') {
      wx.hideToast();
      this.setData({
        results: data.result
      });
    }
  },

  onShareAppMessage: function (options) {
    if (options.from === 'menu') {
      return {
        title: '一分钟了解历史上的今天发生了什么',
        path: '/pages/info/info'
      }
    }
  }
})