import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "./loginActionsTypes";

let merchant = undefined;

merchant =
    localStorage.getItem("account") == undefined 
        ? null 
        : JSON.parse(localStorage.getItem("account"));


const initialState = merchant
    ? { isLogged: true, merchant: merchant, loginPending: false }
    : { isLogged: false, merchant: null, loginPending: false };


const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_REQUEST:
            return {
                loginPending: true,
                isLogged: false
            };

        case LOGIN_SUCCESS:
            return {
                loginPending: false,
                isLogged: true,
                merchant: action.merchant
            };

        case LOGIN_FAILURE:
            return {
                loginPending: false,
                isLogged: false
        };

        case LOGOUT:
            return {
                isLogged: false,
                merchant: null
            };

        default:
            return state;

    }
    
};

export default loginReducer;





