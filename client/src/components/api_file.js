// const axios = require('axios')
import axios from 'axios'
import { user } from '../constants/User';

const devUrl = "http://localhost:5000"

// The below functions return a Promise object, so do use async/await in wherever you are using the imported functions

export const signup = async (userData) => {
    // userData should have name/email/password/confirmPassword
    // function should return an object with result field holding name/email/password and a token field

    const config = {
        method: "post",
        url: `${devUrl}/user/signup`,
        data: userData
    }
    var result;
    await axios(config)
    .then(function (response) {
        result = response.data
    })
    .catch(function (error) {
        result = error;
    });
    return result;
}

export const login = async (userData) => {
    // userData should have email/password
    const config = {
        method: "post",
        url: `${devUrl}/user/signin`,
        data: userData
    }
    var result;
    await axios(config)
    .then(function (response) {
        result = response.data
    })
    .catch(function (error) {
        result = error;
    });
    return result;
}

export const updateUser = async (userData) => {
    // userData should have id/newUser
    const config = {
        method: "post",
        url: `${devUrl}/user/${userData.id}`,
        data: userData
    }

    var result;
    await axios(config)
    .then(function (response) {
        result = response.data
    })
    .catch(function (error) {
        result = error;
    });
    return result;
}

export const getAllCourses = async (userData) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${devUrl}/course`,
        headers: { }
      };
      
    var result;
    await axios(config)
    .then(function (response) {
        result = response.data
    })
    .catch(function (error) {
        result = error;
    });
    return result;
}