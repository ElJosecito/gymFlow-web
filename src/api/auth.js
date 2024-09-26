import axios from 'axios';

export const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/login', { email, password });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};


export const register = async (email, password, firstName, lastName, number) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/register', { email, password, firstName, lastName, number });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};