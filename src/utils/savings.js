import { DateTime } from "luxon";
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

export const getAmountPerMonth = (savings) => {
    let months = new Array(12).fill(0,0)
    
    for (const saving of savings) {
        const index = DateTime.fromISO(saving.date.split("T")[0]).setLocale('es').month;
        months[index - 1] += getTotalAmount(saving.number,saving.savings_users.length); 
    }
    return months;
}

export const getMissingAmountPerUser = (savings) => {
    const missingAmountPerUser = {}
    for(const saving of savings){
        for(const savingUsers of saving.savings_users){
            if(!missingAmountPerUser[savingUsers.users.name]){
                missingAmountPerUser[savingUsers.users.name] = 0;
            } 
            
            missingAmountPerUser[savingUsers.users.name] += savingUsers.status ? 0 : getIndividualAmount(saving.number,saving.savings_users.length);

        }
    }
    return missingAmountPerUser;

}

export const getUnpaidMissingNumbers = (savings) => {
    let unpaidMissingNumbers = 0;
    for (const saving of savings) {
        let status = true;
        for (const savingUsers of saving.savings_users) {
            status = status && !savingUsers.status
        }
        if (status) {
            unpaidMissingNumbers ++;
        }
    }
    return unpaidMissingNumbers
}