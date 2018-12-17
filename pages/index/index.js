var common = require('../../utils/common.js');

Page({

  data: {
    arrayTag: !!wx.getStorageSync('arrayTag') ? wx.getStorageSync('arrayTag') : [],
    inputValue: '',
    randomValue: Number
  },

  onShow: function (options) {
    this.setData({
      arrayTag: !!wx.getStorageSync('arrayTag') ? wx.getStorageSync('arrayTag') : []
    });
    console.log(this.data.arrayTag)
  },

  bindTextChange: function(e) {
    this.setData({
      inputValue: e.detail.value.trim()
    });
  },

  addMenu: function() {
    var tag = this.data.inputValue,
        arrayTag = this.data.arrayTag;
    arrayTag.push({
      select: false,
      tag: tag
    });
    arrayTag.forEach(function (element) {
      element.select = false;
    });
    this.setData({
      arrayTag: arrayTag,
      inputValue: ''
    });
  },

  orderFood: function() {
    var arrayTag = this.data.arrayTag;
    var tagLength = arrayTag.length;
    var that = this;
    var startTime = new Date().getTime();

    var timer = setInterval(function() {
      var endTime = new Date().getTime();
      if (endTime - startTime >= 2000) {
        clearInterval(timer);
        var randomValue = that.data.randomValue;
        var title = '今天还是吃 ' + arrayTag[randomValue].tag + ' 吧！';
        common.showToast(title, 'none');
        arrayTag.forEach(function (element) {
          element.select = false;
        });
        common.setStorage('arrayTag', arrayTag);
        return false;
      }
      arrayTag.forEach(function(element) {
        element.select = false;
      });
      var randomNum = Math.floor(Math.random() * tagLength);
      arrayTag[randomNum].select = true;
      that.setData({
        arrayTag: arrayTag,
        randomValue: randomNum
      });
    }, 120);
  },

  removeList: function () {
    this.setData({
      arrayTag: []
    });
    common.removeStorage('arrayTag');
  },

  onShareAppMessage: function (options) {
    if (options.from === 'menu') {
      return {
        title: '什么都可以将就，唯独吃不可以！',
        path: '/pages/index/index'
      }
    }
  }
})