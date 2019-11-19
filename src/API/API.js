import axios from 'axios'

const API_KEY     = process.env.REACT_APP_API_KEY
const API_HOST    = process.env.REACT_APP_API_HOST
const API_VERSION = process.env.REACT_APP_API_VERSION

const autoCompleteUrl            = (query)      => `${API_HOST}/locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}&q=${query}`
const autoCompleteUrlDaily       = (key)        => `${API_HOST}/currentconditions/${API_VERSION}/${key}?apikey=${API_KEY}`
const autoCompleteUrlFiveDay     = (key)        => `${API_HOST}/forecasts/${API_VERSION}/daily/5day/${key}?apikey=${API_KEY}`
const autoCompleteUrlGeoPosition = (lat, lon)   => `${API_HOST}/locations/${API_VERSION}/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%20%2C%20${lon}%20&toplevel=false`

export const getAutoComplete = async (query) => {
    try {
        const response = await axios.get(autoCompleteUrl(query))
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getGeoPosition = async (lat, lon) => {
    try {
        const response = await axios.get(autoCompleteUrlGeoPosition(lat, lon))
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getDailyForecast = async (key) => {
    try {
        const response = await axios.get(autoCompleteUrlDaily(key))
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getFiveDayForecast = async (key) => {
    try {
        const response = await axios.get(autoCompleteUrlFiveDay(key))
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}


