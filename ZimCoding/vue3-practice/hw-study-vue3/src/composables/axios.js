import axios from 'axios'
import { isRef, ref, unref, watchEffect } from 'vue'

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL

const defaultConfig = {
  method: 'get'
}
const defaultOptions = {
  immediate: true
}

export const useAxios = (url, config = {}, options = {}) => {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const response = ref(null)

  const { onSuccess, onError, immediate } = { ...defaultOptions, ...options }

  const { params } = config
  //async, await을 안넣어도 되는이유는 반응형으로 감지해서 재반영되기때문에 안넣어도된다.
  const execute = (editData) => {
    data.value = null
    error.value = null
    loading.value = true
    axios(url, {
      //전개구문으로 넣기
      ...defaultConfig,
      ...config,
      params: unref(params),
      //watchEffect로 실행할때 첫번째 callback이 존재하므로 Call할때 Object인지 Check
      data: typeof editData === 'Object' ? editData : {}
    })
      .then((res) => {
        response.value = res
        data.value = res.data
        if (onSuccess) onSuccess(res)
      })
      .catch((err) => {
        error.value = err
        if (onError) onError(err)
      })
      .finally(() => {
        loading.value = false
      })
  }

  //반응형이면 계속감지 아니면 한번만 실행
  if (isRef(params)) {
    watchEffect(execute)
  } else {
    if (immediate) {
      execute
    }
  }

  return {
    data,
    error,
    loading,
    response,
    execute
  }
}
