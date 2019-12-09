import axios from 'axios'

const API_KEY     = process.env.REACT_APP_API_KEY
const API_HOST    = process.env.REACT_APP_API_HOST
const API_VERSION = process.env.REACT_APP_API_VERSION

const autoCompleteUrl            = (query)          => `${API_HOST}/locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}&q=${query}`
const autoCompleteUrlCurrentCondition = (cityKey)   => `${API_HOST}/currentconditions/${API_VERSION}/${cityKey}?apikey=${API_KEY}`
const autoCompleteUrlFiveDay     = (cityKey)        => `${API_HOST}/forecasts/${API_VERSION}/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`
const autoCompleteUrlGeoPosition = (lat, lon)       => `${API_HOST}/locations/${API_VERSION}/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%20%2C%20${lon}%20&toplevel=false`

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
export const getDailyForecast = async (cityKey) => {
    try {
        const response = await axios.get(autoCompleteUrlCurrentCondition(cityKey))
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getFiveDayForecast = async (cityKey) => {
    try {
        const response = await axios.get(autoCompleteUrlFiveDay(cityKey))
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}


