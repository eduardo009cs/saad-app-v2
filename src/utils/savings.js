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

export const getTotalSavings = (savings) => {
    let totalSavings = 0;
    for(let saving of savings){
        for(let user of saving.savings_users){
            if(user.status) totalSavings += getIndividualAmount(saving.number,saving.savings_users.length)
        }
    }
    return totalSavings;
}
export const getWaitingSavings = (savings) => {
    let waitingSaving = 0;
    
    for(let saving of savings){
        waitingSaving += getTotalAmount(saving.number,saving.savings_users.length);
    }
    return waitingSaving;
}