import {atom} from 'recoil'

export const isLoggin = atom({
    key: 'isLoggin',
    default: window.localStorage.getItem('w-token')?true:false
});