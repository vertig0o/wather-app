import { cities } from './data/cities'
export const apiCompleter = (id) => {
    const { latitude, longitude, name } = cities.find(item => item.id === id)
    return {
        URL: `${process.env.REACT_APP_BASE_URL}onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_APIKEY}`, name
    }
}
export const singleCity = (lat = 29.074, lon = 40.19) => {

    return `${process.env.REACT_APP_BASE_URL}weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
}



