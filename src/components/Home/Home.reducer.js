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

let initialState = {
    cityKey: 0,
    city: '',
    daily: [],
    notification: '',
    oneDay: {
        date: '',
        temperature: 0,
        text: '',
        unit: '',
        weatherIcon: 0
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
                notification: ''
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
            const temperature = (action.payload[0].Temperature.Imperial.Value)
            const unit = (action.payload[0].Temperature.Imperial.Unit)
            const text = (action.payload[0].WeatherText)
            const oneDayIcon = (action.payload[0].WeatherIcon)
            return {
                ...state,
                oneDay: {
                    date: `${weekday[date.getDay()]} ${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`,
                    temperature: temperature,
                    text: text,
                    unit: unit,
                    weatherIcon: oneDayIcon
                },
                notification: ''
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
                const max = i.Temperature.Maximum.Value
                const min = i.Temperature.Minimum.Value
                const fiveDayIcon = i.Day.Icon
                arr.push({
                    date: `${shortWeekday[date.getDay()]}`,
                    min: min,
                    max: max,
                    fiveDayIcon: fiveDayIcon
                })
            })
            return {
                ...state,
                daily: arr,
                notification: ''
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
        default:
            return state
    }
}

