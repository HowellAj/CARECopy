export const msalConfig = {
    auth: {
        clientId: "9f2a46b2-8d12-4f09-bf3c-b70df9410974",
        authority: "https://login.microsoftonline.com/bc28b062-7c3d-4625-9945-eb992c5897c9",
        redirectUri: "http://localhost:5173",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ["api://e99e37e2-d579-4f89-b5d2-50d5dd449bae/access_as_user"]
};