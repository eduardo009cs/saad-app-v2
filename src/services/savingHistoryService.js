import axios from "axios";
import { config } from "../utils/config";

export const getAllSavingHistory = async () => {
    try {
        const url = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${url}/savings`);
        return {error:false, data:response.data}
    } catch (error) {
        console.log(error)
        return {error:true,description:error}
    }
    
}

export const addNewSavingHistory = async (params) => {
    const apiUrl = config.apiUrl;
    try {
        const response = await axios({
            method:"POST",
            url:`${apiUrl}/savings`,
            data:params
        })
        const type = response.data.type;
        const message = response.data.message;
        const lastSavingId = response.data.lastSavingId
        if(type === "success" ){
            return {
                type: type, 
                message: message,
                lastSavingId: lastSavingId
            };
       
        }else{
            return {
                type: type || "error", 
                message: message || "Error desconocido, intentelo más tarde.",
            };
        }
    } catch (error) {
        return {
            type: "error", 
            message: "Ocurrio un error inesperado, intentelo mas tarde.",
        };
    }
}


export const deleteSaving = async (savingHistoryId) => {
    const apiUrl = config.apiUrl;
    try {
        const response = await axios({
            method:"DELETE",
            url:`${apiUrl}/savings/${savingHistoryId}`,
        })
        const type = response.data.type;
        const message = response.data.message;
        if(type === "success" ){
            return {
                type: type, 
                message: message,
            };
       
        }else{
            return {
                type: type || "error", 
                message: message || "Error desconocido, intentelo más tarde.",
            };
        }
    } catch (error) {
        return {
            type: "error", 
            message: "Ocurrio un error inesperado, intentelo mas tarde.",
        };
    }
}