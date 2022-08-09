import http from 'http/utils/axios'
import type { IAuth } from 'http/types/auth'

const authService = {
  signUp: (payload: IAuth) => {
    return http({
      method: 'POST',
      url: '/signup',
      data: payload,
      validateStatus: (status) => {
        return status >= 200 && status < 300
      },
    })
  },
  signIn: (payload: IAuth) => {
    return http({
      method: 'POST',
      url: '/signin',
      data: payload,
      validateStatus: (status) => {
        return status >= 200 && status < 300
      },
    })
  },
}

export default authService
