function showToast(title, icon) {
  wx.showToast({
    title: title,
    icon: icon,
    duration: 2500
  });
}

function setStorage(key, value) {
  wx.setStorageSync(key, value);
}

function removeStorage(key) {
  wx.removeStorageSync(key);
}

function http(url, method_type, callback) {
  wx.request({
    url: url,
    method: method_type,
    success (res) {
      if(res.data.reason == 'success') {
        callback(res.data);
      }
    },
    fail (res) {
      console.log(res)
    }
  })
}

module.exports = {
  showToast: showToast,
  setStorage: setStorage,
  removeStorage: removeStorage,
  http: http
}