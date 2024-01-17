import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// request拦截器
axios.interceptors.request.use(
  (config) => {
    //在发送请求前做的内容
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response拦截器
axios.interceptors.response.use(res => {
    //请求成功对响应数据进行处理
    return res
  },error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
