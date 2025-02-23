import { config } from "./config"



export const getIndividualAmount = (number,numberOfUsers) =>{
    const numberPerGroup = config.numberPerGroup;
    const groupsNumber = config.groupsNumber;
    return number > (numberPerGroup*groupsNumber)/2 ? number / numberOfUsers: number; 
}

export const getTotalAmount = (number,numberOfUsers) =>{
    const numberPerGroup = config.numberPerGroup;
    const groupsNumber = config.groupsNumber;
    return number > (numberPerGroup*groupsNumber)/2 ? number : number * numberOfUsers; 
}