App({
  onLaunch: function () {
    var userInfo = wx.getStorageSync('userInfo');
    console.log('userInfo', userInfo);
    if(!!userInfo) {
      return;
    } else {
      wx.reLaunch({
        url: '/pages/login/login'
      });
    }
  },
  globalData: {
    domain: 'https://v.juhe.cn'
  }
})
