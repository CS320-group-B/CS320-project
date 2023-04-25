import axios from 'axios'

const devUrl = "http://localhost:3000"

const signup = async (userData) => {
    // userData should have name/email/password/confirmPassword
    const response = await axios.post(`${devUrl}/user/signup`, userData)

    if(response.data) {
        // Do something 
    }

    return response.data
}

const login = async (userData) => {
    // userData should have email/password
    const response = await axios.post(`${devUrl}/user/signin`, userData)

    if(response.data) {
        // Do something 
    }

    return response.data
}