import axios from "../libs/axios";

export const getUser = async (id) => {
    try {
        const response = await axios.get(`users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
