import axios from "axios";

export const sendEmailNotification = async (params) => {
    try{
        const url = import.meta.env.VITE_API_URL;
        const response =  await axios({
            method:"POST",
            url: `${url}/sendMessage`,
            data:params
        })
        console.log(response)
        
        return {message:response.data.message, type:response.data.type}
    }catch(error){
        console.log(error)
        return {message:"Error al enviar correo, intentelo más tarde", type:"error"}
        
    }
}