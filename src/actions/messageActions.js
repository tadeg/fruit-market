import { MESSAGE_SUCCESS } from "./messageActionsTypes";
import { MESSAGE_ERROR } from "./messageActionsTypes";
import { MESSAGE_CLEAR } from "./messageActionsTypes";

const success = message => {
    return { 
        type: MESSAGE_SUCCESS, 
        message
    };
};

const error = message => {
    return {
        type: MESSAGE_ERROR,
        message
    };
};

const clear = () => {
    return {
        type: MESSAGE_CLEAR
    };
};

export const messageActions = {
    success,
    error,
    clear
}