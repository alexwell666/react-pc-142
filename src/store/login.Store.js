//login module

import { makeAutoObservable } from 'mobx'
import { http, getToken } from '@/utils'

class LoginStore {
  token = ''
  constructor() {

    makeAutoObservable(this)
  }

  getToken = async ({ mobile, code }) => {
    console.log(mobile, code)
    // 调用登录接口
    const res = await http.get('http://admin.jingxinst.com/jingxin/lowerPc/page?current=1&size=20&total=0')
    console.log(res)
    // 存入token
    // this.token = res.data.token
    // 存入ls
  }

  // setToken = async ({ mobile, code }) => {
  //   console.log(mobile, code)
  //   //调用接口
  //   const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
  //     mobile, code
  //   })

  //   // const res = await http.get('https://www.wanandroid.com/article/list/0/json')

  //   console.log(res)



  //   //保存token
  //   this.token = res.data.data

  // }
}

export default LoginStore 