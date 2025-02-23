import { DateTime } from "luxon";
import sound from "../assets/audio/sound.mp3"

export const playSound = () => {
    const audio = new Audio(sound);
    audio.play()
}

export const getDateFormated = (date) => {
    return DateTime.fromISO(date.split("T")[0]).setLocale('es').toFormat('dd LLLL yyyy');
}
