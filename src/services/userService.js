import axios from "axios";

export const getAllUsers = async () => {
    try {
        const url = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${url}/users`);
        return {error:false, data:response.data}
    } catch (error) {
        return {error:true,description:error}
    }
    
}