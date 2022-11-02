import {createApp} from 'vue'
const app = createApp({})

export default {
  install(app, options) {
    app.config.globalProperties.$message = (html) => {
      M.toast({html})
    }
    app.config.globalProperties.$error = (html) => {
      M.toast({html: `[Error]: ${html}`})
    }
  }
}