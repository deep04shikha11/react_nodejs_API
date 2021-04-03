import * as constants from "../constants";

export const registerCompany = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/api/company/register',
        data,
        success: (response) => (setCompanyInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const setCompanyInfo = (data) => {
    const parsedCompany = data.company;
    const companyInfo = {
        companyId: parsedCompany.id,
        companyName: parsedCompany.name,
        isLoggedIn: true
    }
    localStorage.setItem('COMPANY_INFO', JSON.stringify(companyInfo));
    return { type: constants.SET_COMPANY_INFO, payload: companyInfo }
}