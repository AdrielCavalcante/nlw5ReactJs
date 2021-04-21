export function convertDurationToTimeString(duration: number){
    const hours = Math.floor(duration/3600) //Seg para hora
    const minutes = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60

    const timeString = [hours, minutes, seconds]

    .map(unit => String(unit).padStart(2,'0')) //2 digitos sempre: 00:00:00
    .join(':')
    
    return timeString
}