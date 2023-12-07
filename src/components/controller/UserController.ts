import axios from 'axios';
import { PlainUser } from '../../interfaces/PlainUser';
const headers = {
    'Content-Type': 'application/json',
};

const apiBaseUrl = 'http://localhost:8080/api';
export async function getUsers() {
    try {
        const response = await axios.get(`${apiBaseUrl}/user/all/users`, { headers:headers, withCredentials:false });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function login(user: PlainUser, navigate: any) {
    try {
        const response = await axios.post(`${apiBaseUrl}/user/login`, JSON.stringify(user), { headers, withCredentials: false });

        if (response.status === 200) {
            navigate('/home');
        }
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.log(error.response.data)
        return error.response.data;
    }
}


export async function register(user: PlainUser, navigate: any) {
    try {
        const response = await axios.post(`${apiBaseUrl}/user/register`, JSON.stringify(user), { headers, withCredentials: false });

        if (response.status === 200) {
            navigate('/home');
        }
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.log(error.response.data)
        return error.response.data;
    }
}

