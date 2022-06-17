const BASE_URL = "http://152.136.185.210:7878/api/hy66";
const TIMEOUT = 5000;

export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      timeout: TIMEOUT,
      method: options.methods || 'GET',
      data: options.data || {},
      success(res) {
        if(undefined && !res.data.success) {
          uni.showToast({
            title: "获取数据失败"
          })
        }
        resolve(res.data);
      },
      fail(err) {
        uni.showToast({
          title: "发送请求失败"
        })
        reject(err);
      }
    })
  })
}
