import axios from 'axios'
import {Spin} from 'antd'
axios.interceptors.request.use(function(config){
    Spin.spinning = true
    return config
})
axios.interceptors.response.use(function(config){
    Spin.spinning = false
    return config   
    }
)
