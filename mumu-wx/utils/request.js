function request(url, params, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      header: {
        'content-type': 'application/json; charset=utf-8'
      },
      method: method,
      success: function (res) {
        resolve(res.data)
      },
      fail: function (res) {
        reject(res.data);
      }
    })
  })
}
module.exports = {
  request: request
}