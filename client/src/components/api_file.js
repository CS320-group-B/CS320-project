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
    return await axios(config)
    .then(response => response.data);
}

export const login = async (userData) => {
    // userData should have email/password
    const config = {
        method: "post",
        url: `${devUrl}/user/signin`,
        data: userData
    }
    return await axios(config)
    .then(response => response.data);
    // return result;
}

export const getUser = async (userData) => {
    // userData should have an id field
    const config = {
        method: "get",
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

export const updateUser = async (userData) => {
    // userData should have id/newUser
    const config = {
        method: "post",
        url: `${devUrl}/user/${userData.id}`,
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

export const deleteUser = async (userData) => {
    // userData should have id
    const config = {
        method: "delete",
        url: `${devUrl}/user/${userData.id}`,
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

export const addCourse = async (userData) => {
    // userData should have number field
    const config = {
        method: "post",
        url: `${devUrl}/course`,
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
        url: `${devUrl}/course`
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

export const getCourse = async (userData) => {
    // userData should have an id field
    var config = {
        method: 'get',
        url: `${devUrl}/course/${userData.id}`
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

export const updateCourse = async (userData) => {
    // userData should have an id field and optionally the fields you want to update
    var config = {
        method: 'put',
        url: `${devUrl}/course/${userData.id}`,
        data: userData
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

export const deleteCourse = async (userData) => {
    // userData should have an id field
    var config = {
        method: 'delete',
        url: `${devUrl}/course/${userData.id}`
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

export const getAllProfessors = async (userData) => {
    var config = {
        method: 'get',
        url: `${devUrl}/professor`
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

export const getAllSections = async (userData) => {
    var config = {
        method: 'get',
        url: `${devUrl}/section`
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