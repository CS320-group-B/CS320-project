// const axios = require('axios')
import axios from 'axios'
import { user } from '../constants/User';

const devUrl = "http://localhost:5000"

export const signup = async (userData) => {
    // userData should have name/email/password/confirmPassword
    // function should return an object with result field holding name/email/password and a token field

    const config = {
        method: "post",
        url: `${devUrl}/user/signup`,
        data: userData
    }
    // console.log(config)

    await axios(config)
    .then(function (response) {
        // console.log(response.data)
        console.log(JSON.stringify(response.data));
        // return response.data
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const login = async (userData) => {
    // userData should have email/password
    const config = {
        method: "post",
        url: `${devUrl}/user/signin`,
        data: userData
    }
    // console.log(config)

    await axios(config)
    .then(function (response) {
        // console.log(response.data)
        console.log(JSON.stringify(response.data));
        // return response.data
    })
    .catch(function (error) {
        console.log(error);
    });
    return result.data
}

export const updateUser = async (userData) => {
    // userData should have id/newUser
    const config = {
        method: "post",
        url: `${devUrl}/user/${userData.id}`,
        data: userData
    }

    const result = await axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    return result.data
}

export const getAllCourses = async (userData) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${devUrl}/course`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}