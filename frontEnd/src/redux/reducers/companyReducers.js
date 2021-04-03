import * as constants from "../constants";

const defaultState = {
    companyId: null,
    companyName: null,
    isLoggedIn: false
};
const companyInfo = localStorage.getItem('COMPANY_INFO');
const INITIAL_STATE = companyInfo ? JSON.parse(companyInfo) : defaultState;
export default function companyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case constants.SET_COMPANY_INFO:
            return { ...action.payload };
        default:
            return state;
    }

}