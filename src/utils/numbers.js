import { DateTime } from "luxon";
import {config} from "./config.js"

export const getNumberGenerated = (savings) => {
    try {
        const groupsNumber = config.groupsNumber;
        const numberPerGroup =  config.numberPerGroup;
        let highestNumberOfAllGroups = groupsNumber * numberPerGroup;
        let group = []
        let groups = []
        for(let i = 0; i < groupsNumber; i++){
            group = [];
            let lowerNumberPerGroup = i * numberPerGroup;
            let highestNumberPerGroup = (i + 1)*numberPerGroup; 
            for(let saving of savings){
                if(saving.number > lowerNumberPerGroup && saving.number <= highestNumberPerGroup) {
                    group.push(saving.number);
                }else if(saving.number > highestNumberOfAllGroups && (i + 1) == groupsNumber ) {
                    group.push(saving.number)
                }
            }
            groups.push(group)
        }
        return {
            error: false,
            groups: groups
        }
    } catch (error) {
        return {
            error: true,
            description: `Error al generar grupos de números ${error}`
        }
    }
}

export const getNewNumber = (date) => {
    const day = DateTime.fromISO(date).toFormat("ccc")
    const days = config.days;
    const numberPerGroup = config.numberPerGroup;
    const lowerNumber = numberPerGroup * (days[day] - 1) + 1
    const highestNumber = numberPerGroup * (days[day])
    return Math.floor(Math.random()*(highestNumber - lowerNumber + 1)) + lowerNumber;
}

export const validateNumber = (number, numbersGenerated, date, attempt) => {
    const days = config.days;
    const numberPerGroup = config.numberPerGroup;
    const day = DateTime.fromISO(date).toFormat("ccc")
    //Validar que el número no exista ya dentro de mi arreglo de numberos generados de acuerdo algrupo que pertenece el dia    
    const numbersIncludesNewNumber = !numbersGenerated[days[day] - 1].includes(number);
    //Validar que el número sea menor o igual al limite mayor del grupo
    const numberIsLower = number <= days[day] * numberPerGroup;
    //Validar que el número sea mayot igual al limite menor del grupo
    const numberIsHighest = number > (days[day] - 1) * numberPerGroup;
    // Validar que el intento sea mayor a 10 
    const attemptHighestThanTen = attempt > 10;
    return ( numbersIncludesNewNumber &&  numberIsLower && numberIsHighest && attemptHighestThanTen )
}

export const assigningGroup = (number) => {
    const numberPerGroup = config.numberPerGroup;
    const groupsNumber = config.groupsNumber;
    const group = Math.ceil(number/numberPerGroup);
    return group > groupsNumber ? numberPerGroup : group;
}