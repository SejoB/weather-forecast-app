import {
    FETCHING_LOCATION,
    LOCATION_ERROR,
    FETCHED_LOCATION,
    LOADING_DAILY_FORECAST,
    DAILY_FORECAST_LOADED,
    DAILY_FORECAST_ERROR,
    LOADING_FIVE_DAY_FORECAST,
    FIVE_DAY_FORECAST_LOADED,
    FIVE_DAY_FORECAST_ERROR,
    LOADING_CITIES_LIST,
    CITIES_LIST_LOADED,
    CITIES_LIST_ERROR,
    GET_SELECTED_CITY
} from './Home.actions'

import { LOAD_CITY_FROM_FAVORITES } from '../Favorites/Favorites.actions'
import { CONVERT_TO_FAHRENHEIT, CONVERT_TO_CELSIUM } from '../Home/celciumConverter.actions'

let initialState = {
    cityKey: '',
    city: '',
    daily: [],
    notification: '',
    oneDay: {
        date: '',
        metricTemp: null,
        imperialTemp: null,
        text: '',
        weatherIcon: null
    }
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_LOCATION:
            return {
                ...state,
                notification: 'fetching data...'
            }
        case FETCHED_LOCATION:
            return {
                ...state,
                cityKey: action.payload.Key,
                city: action.payload.LocalizedName,
                notification: null
            }
        case LOCATION_ERROR:
            return {
                ...state,
                notification: action.payload
            }
        case LOADING_DAILY_FORECAST:
            return {
                ...state,
                notification: 'loading daily forecast...'
            }
        case DAILY_FORECAST_LOADED:
            const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            const date = new Date(action.payload[0].LocalObservationDateTime)
            const metricTemp = Math.round(action.payload[0].Temperature.Metric.Value)
            const imperialTemp = action.payload[0].Temperature.Imperial.Value
            const text = action.payload[0].WeatherText
            const oneDayIcon = action.payload[0].WeatherIcon
            return {
                ...state,
                oneDay: {
                    date: `${weekday[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`,
                    metricTemp: metricTemp,
                    imperialTemp: imperialTemp,
                    text: text,
                    weatherIcon: oneDayIcon
                },
                notification: null
            }
        case DAILY_FORECAST_ERROR:
            return {
                ...state,
                notification: action.payload
            }
        case LOADING_FIVE_DAY_FORECAST:
            return {
                ...state,
                notification: 'loading five day forecast...'
            }
        case FIVE_DAY_FORECAST_LOADED:
            const shortWeekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            let arr = []
            action.payload.DailyForecasts.forEach(i => {
                const date = new Date(i.Date)
                const max = Math.round(i.Temperature.Maximum.Value)
                const min = Math.round(i.Temperature.Minimum.Value)
                const fiveDayIcon = i.Day.Icon
                const fiveDaysArr = {
                    date: `${shortWeekday[date.getDay()]}`,
                    min: min,
                    max: max,
                    fiveDayIcon: fiveDayIcon
                }
                arr.push(fiveDaysArr)
            })
            return {
                ...state,
                daily: arr,
                notification: null
            }
        case FIVE_DAY_FORECAST_ERROR:
            return {
                ...state,
                notification: action.payload
            }
        case LOADING_CITIES_LIST:
            return {
                ...state,
                notification: '...loading cities list'
            }
        case CITIES_LIST_LOADED:
            return {
                ...state,
                notification: 'cities list loaded'
            }
        case CITIES_LIST_ERROR:
            return {
                ...state,
                notification: action.payload
            }
        case GET_SELECTED_CITY:
            const city = action.payload.label
            const key = action.payload.key
            return {
                ...state,
                city: city,
                cityKey: key
            }
        case LOAD_CITY_FROM_FAVORITES:
            return {
                ...state,
                city: action.payload[0],
                cityKey: action.payload[1]
            }
        case CONVERT_TO_FAHRENHEIT:
            return {
                ...state,
                daily: action.payload
            }
        case CONVERT_TO_CELSIUM:
            return {
                ...state,
                daily: action.payload
            }
        default:
            return state
    }
}
