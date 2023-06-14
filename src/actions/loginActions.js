import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "./loginActionsTypes";
import { loginService } from "../services/http/loginService";
import { messageActions } from "./messageActions";

const loginSuccess = merchant => {
    return {
        type: LOGIN_SUCCESS,
        merchant
    };
};

const loginFailure = error => {
    return {
        type: LOGIN_FAILURE,
        error
    };
};

const loginRequest = merchant => {
    return {
        type: LOGIN_REQUEST,
        merchant
    };
};


const login = (username, password) => {

    return async dispatch => {
        dispatch(loginRequest());
        await loginService.login(username, password).then(
            merchant => {
                localStorage.setItem("account", JSON.stringify(merchant));
                dispatch(loginSuccess(merchant));
                dispatch(messageActions.success("Logged in"));

            },
            error => {
                dispatch(loginFailure(error));
                dispatch(messageActions.error("Incorrect login or password"));               
            }
        );
    };
};


const logout = () => {
    loginService.logout();
    return { type: LOGOUT };
}

export const loginActions = {
    login,
    logout
};

