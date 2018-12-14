var app = getApp();
var common = require('../../utils/common.js');

Page({

  data: {
    date: null,
    results: null,
    content: null
  },

  onLoad: function (options) {
    var date = options.date;
    var e_id = options.e_id;
    console.log(date);
    var domain = app.globalData.domain;
    var url = domain + '/todayOnhistory/queryDetail.php?e_id=' + e_id + '&key=253b98a10624a1e96fec6e767bd9cd7d';
    common.http(url, 'GET', this.callbackDate);
    this.setData({
      date: date
    });
  },

  callbackDate: function(data) {
    console.log(data);
    if(data.reason == 'success') {
      var content_arr = data.result[0].content.split('\r\n');
      console.log(content_arr);
      this.setData({
        results: data.result[0],
        content: content_arr
      });
    }
  },

  onShareAppMessage: function (options) {
    if (options.from === 'menu') {
      return {
        title: '一分钟了解历史上的今天发生了什么',
        path: '/pages/detail/detail'
      }
    }
  }
})