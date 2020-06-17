import { LOGIN_USER } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN_USER:
            return state;
        default:
            return state;
    }

}