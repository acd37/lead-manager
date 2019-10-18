// setup config with token - helper
export const tokenConfig = getState => {
    // get token from state
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //if token add to headers
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};
