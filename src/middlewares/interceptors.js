/* eslint-disable no-param-reassign */
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export default async () => {
  await axios.interceptors.request.use(async (config) => {
    const session = await AsyncStorage.getItem('paymentUser')
    if (session) {
      const sessionObj = JSON.parse(session)
      const formData = new FormData()
      formData.append('clientId', sessionObj.userID)
      formData.append('accessToken', sessionObj.accessToken)
      formData.append('accountId', sessionObj.accountId)

      console.warn('FORMDATA', formData)

      if (config.data) {
        Object.keys(config.data).forEach((key) => {
          formData.append(key, config.data[key])
        })
      }

      config.headers['Content-Type'] = 'application/json'
      config.data = formData
      console.log('form Data by looping', config.data)
      console.log('form Data by spread operator')
    } else {
      const formData = new FormData()
      formData.append('itemId', sessionObj.itemId)

      if (config.data) {
        Object.keys(config.data).forEach((key) => {
          formData.append(key, config.data[key])
        })
      }
      config.headers['Content-Type'] = 'application/json'
      config.data = formData
    }

    return config
  }, err => Promise.reject(err))
}
