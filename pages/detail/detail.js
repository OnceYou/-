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
      var content_trim_arr = [];
      var content_arr = data.result[0].content.split('\r\n');
      console.log(content_arr);
      for(let a = 0, len = content_arr.length; a < len; a++) {
        if(content_arr[a] == '') {
          continue;
        }
        content_trim_arr.push(this.trimSpace(content_arr[a]));
      }
      console.log(content_trim_arr);
      this.setData({
        results: data.result[0],
        content: content_trim_arr
      });
    }
  },

  trimSpace: function (str) {  
    var result = str.replace(/(^\s+)|(\s+$)/g,"").replace(/\s/g,"");
    return result;
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