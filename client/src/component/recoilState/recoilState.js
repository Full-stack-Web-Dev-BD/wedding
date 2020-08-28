import {atom} from 'recoil'

export const isLoggin = atom({
    key: 'isLoggin',
    default: window.localStorage.getItem('w-token')?true:false
});
export const userInfo=atom({
    key:'userInfo',
    default:{}
})
export const decodedToken=atom({
    key:'decodedToken',
    default:{}
})
export const allGuestState=atom({
    key:'allGuestState',
    default:[]
})