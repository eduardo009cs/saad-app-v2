export const validateData  = (date, amount) => {
    if(date === ''){
        return {
            error:true,
            description: "La fecha no debe estar vacia"
        }
    }else if(amount <= 0){
        return {
            error:true,
            description: "El monto debe de ser mayor a cero"
        }
    }
    return {
        error:false,
        description: "Datos correctos"
    };
};