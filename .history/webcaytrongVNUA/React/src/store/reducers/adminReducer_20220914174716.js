import actionTypes from '../actions/actionTypes';

const initialState = {
   genders:[],
   roles: [],
   position: [],
}

const adReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                adminInfo: action.adminInfo
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        default:
            return state;
    }
}

export default appReducer;