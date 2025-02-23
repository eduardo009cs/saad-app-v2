import axios from "axios";
import { config } from "../utils/config";

export const addNewSavingUser = async (savingId,users) => {
    const apiUrl = config.apiUrl;
    let params = []
    try {
        for(let user of users){
            params.push({
                status:false,
                user_id:user.user_id,
                saving_history_id: savingId
            })
        }
        const response = await axios({
            method:"POST",
            url:`${apiUrl}/savingUsers`,
            data:params
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
        console.log(error)
        return {
            type: "error", 
            message: "Ocurrio un error inesperado, intentelo mas tarde.",
        };
    }
}

export const updateSavingUser = async (savingUserId) => {
    const apiUrl = config.apiUrl;
    try {
        const params = {
            status: true
        }
        const response = await axios({
            method:"PUT",
            url:`${apiUrl}/savingUsers/${savingUserId}`,
            data:params
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
        console.log(error);
        return {
            type: type || "error", 
            message: message || "Error desconocido, intentelo más tarde.",
        };
    }
    
}