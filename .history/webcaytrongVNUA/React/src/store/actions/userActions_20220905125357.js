import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})
export  const userLoginSuccess =()=>({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})
export const USER_LOGIN_FAIL = () => ({
    type: actionTypes.USER_LOGIN_FAIL,
})
export const processLogout = () => ({
    type: actionTypes.PRO
})