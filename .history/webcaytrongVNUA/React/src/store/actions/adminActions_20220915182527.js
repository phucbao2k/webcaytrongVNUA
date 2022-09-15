import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';
//gender
export const fetchGenderStart = () =>{
    return async(dispatch, getState)=>{
        try{
            dispatch({type:})
let res = await getAllCodeService("GENDER");
if(res && res.errCode === 0){
    dispatch(fetchGenderSuccess(res.data));
}else{
    dispatch(fetchGenderFailed());
}
        }catch(e){
            dispatch(fetchGenderFailed());
            console.log('fetch error: ', e)
        }
    }
}
export const fetchGenderSuccess =(genderData)=>({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed =()=>({
    type: actionTypes.FETCH_GENDER_FAILED,
})

//position
export const fetchPositionStart = () =>{
    return async(dispatch, getState)=>{
        try{
let res = await getAllCodeService("POSITION");
if(res && res.errCode === 0){
    dispatch(fetchPositionSuccess(res.data));
}else{
    dispatch(fetchPositionFailed());
}
        }catch(e){
            dispatch(fetchPositionFailed());
            console.log('fetch error: ', e)
        }
    }
}
export const fetchPositionSuccess =(positionData)=>({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed =()=>({
    type: actionTypes.FETCH_POSITION_FAILED,
})
//roleid
export const fetchRoleIdStart = () =>{
    return async(dispatch, getState)=>{
        try{
let res = await getAllCodeService("ROLE");
if(res && res.errCode === 0){
    dispatch(fetchRoleIdSuccess(res.data));
}else{
    dispatch(fetchRoleIdFailed());
}
        }catch(e){
            dispatch(fetchRoleIdFailed());
            console.log('fetch error: ', e)
        }
    }
}

export const fetchRoleIdSuccess =(roleIdData)=>({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleIdData
})
export const fetchRoleIdFailed =()=>({
    type: actionTypes.FETCH_ROLE_FAILED,
})
