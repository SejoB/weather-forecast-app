import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const API_HOST = process.env.REACT_APP_API_HOST
const API_VERSION = process.env.REACT_APP_API_VERSION

const autoCompleteUrl = query => `${ API_HOST }/locations/${ API_VERSION }/cities/autocomplete?apikey=${ API_KEY }&q=${ query }`
const autoCompleteUrlGeoPosition = ( lat, lon ) => `${ API_HOST }/locations/${ API_VERSION }/cities/geoposition/search?apikey=${ API_KEY }&q=${ lat }%20%2C%20${ lon }%20&toplevel=false`
const autoCompleteUrlCurrentCondition = cityKey => `${ API_HOST }/currentconditions/${ API_VERSION }/${ cityKey }?apikey=${ API_KEY }`
const autoCompleteUrlFiveDay = cityKey => `${ API_HOST }/forecasts/${ API_VERSION }/daily/5day/${ cityKey }?apikey=${ API_KEY }&metric=true`

const mockUpAutoCompleteUrl = () => 'https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/autoComplete.json'
const mockUpAutoCompleteUrlGeoPosition = () => 'https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/currentWeather.json'
const mockUpAutoCompleteUrlCurrentCondition = () => 'https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/currentWeather.json'
const mockUpAutoCompleteUrlFiveDay = () => 'https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/5dayWeather.json'

export const getAutoComplete = async query => {
    try {
        const response = await axios.get( autoCompleteUrl( query ) )
        const data = await response.data
        return data
    } catch ( error ) {
        const response = await axios.get( mockUpAutoCompleteUrl( query ) )
        const data = await response.data
        console.log( error, 'Loading mockUp API' )
        return data
    }
}
export const getGeoPosition = async ( lat, lon ) => {
    try {
        const response = await axios.get( autoCompleteUrlGeoPosition( lat, lon ) )
        const data = await response.data
        return data
    } catch ( error ) {
        const response = await axios.get( mockUpAutoCompleteUrlGeoPosition( lat, lon ) )
        const data = await response.data
        console.log( error, 'Loading mockUp API' )
        return data
    }
}
export const getDailyForecast = async cityKey => {
    try {
        const response = await axios.get( autoCompleteUrlCurrentCondition( cityKey ) )
        const data = await response.data
        return data
    } catch ( error ) {
        const response = await axios.get( mockUpAutoCompleteUrlCurrentCondition( cityKey ) )
        const data = await response.data
        console.log( error, 'Loading mockUp API' )
        return data
    }
}
export const getFiveDayForecast = async cityKey => {
    try {
        const response = await axios.get( autoCompleteUrlFiveDay( cityKey ) )
        const data = await response.data
        return data
    } catch ( error ) {
        const response = await axios.get( mockUpAutoCompleteUrlFiveDay( cityKey ) )
        const data = await response.data
        console.log( error, 'Loading mockUp API' )
        return data
    }
}
