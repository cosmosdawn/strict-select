import axios from 'axios'

const getlists = function () {
    return axios.get('https://easy-mock.com/mock/5ba8ced6a8066d21b71a468b/xiaoyu/xiaoyu01').then(res => {
        return res
    }).catch(e => {
        console.error(e)
    })
}

export { getlists }