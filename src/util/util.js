export const tokenConfig = (token) => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    config.headers["Authorization"] = token;

    return token
}