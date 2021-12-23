import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
axios.defaults.baseURL = "http://47.96.38.148:3000"

Vue.prototype.axios = axios

Vue.use(VueAxios, axios)
