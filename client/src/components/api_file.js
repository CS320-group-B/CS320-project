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

export const getUser = async (userData) => {
    // Needs an id but I suppose it should be in the web token?
    const config = {
        method: "get",
        url: `${devUrl}/user`
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
    // userData should have upd which is what the user should be updated to
    const config = {
        method: "put",
        url: `${devUrl}/user`,
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

export const deleteUser = async (userData) => {
    // Needs an id but I suppose it should be in the web token?
    const config = {
        method: "delete",
        url: `${devUrl}/user`,
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

export const addTakenCourseForUser = async (userData) => {
    // userData should have course_key to signify the added course
    const config = {
        method: "put",
        url: `${devUrl}/user/addTaken`,
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

export const getTakenCourseForUser = async (userData) => {
    // Needs an id but I suppose it should be in the web token?
    const config = {
        method: "get",
        url: `${devUrl}/user/taken`,
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

export const removeTakenCourseForUser = async (userData) => {
    // userData should have course_key to signify the added course
    const config = {
        method: "delete",
        url: `${devUrl}/user/removeTaken`,
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

export const getProfessor = async (userData) => {
    // userData should have an id field
    var config = {
        method: 'get',
        url: `${devUrl}/professor/${userData.id}`
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

export const addEnrollment = async (userData) => {
    // userData should have year/season/course_key/date
    var config = {
        method: 'post',
        url: `${devUrl}/enrollment/enroll`,
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

export const getEnrollment = async (userData) => {
    var config = {
        method: 'get',
        url: `${devUrl}/enrollment`
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

export const updateEnrollment = async (userData) => {
    // userData should have year/season/course_key/date
    var config = {
        method: 'put',
        url: `${devUrl}/enrollment`,
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

export const deleteEnrollment = async (userData) => {
    // userData should have course_key
    var config = {
        method: 'delete',
        url: `${devUrl}/enrollment/unenroll`,
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