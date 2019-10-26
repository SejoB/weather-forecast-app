import { getDailyForecast, getFiveDayForecast, getGeoPosition, getAutoComplete } from '../../API/API'


export const FETCHING_LOCATION = 'FETCHING_LOCATION'
export const FETCHED_LOCATION = 'FETCHED_LOCATION'
export const LOCATION_ERROR = 'LOCATION_ERROR'

export const LOADING_DAILY_FORECAST = 'LOADING_DAILY_FORECAST'
export const DAILY_FORECAST_LOADED = 'DAILY_FORECAST_LOADED'
export const DAILY_FORECAST_ERROR = 'DAILY_FORECAST_ERROR'

export const LOADING_FIVE_DAY_FORECAST = 'LOADING_FIVE_DAY_FORECAST'
export const FIVE_DAY_FORECAST_LOADED = 'FIVE_DAY_FORECAST_LOADED'
export const FIVE_DAY_FORECAST_ERROR = 'FIVE_DAY_FORECAST_ERROR'

export const LOADING_CITIES_LIST = 'LOADING_CITIES_LIST'
export const CITIES_LIST_LOADED = 'CITIES_LIST_LOADED'
export const CITIES_LIST_ERROR = 'CITIES_LIST_ERROR'

export const GET_SELECTED_CITY = 'GET_SELECTED_CITY'






export const getPosition = () => {
    return (dispatch) => {

        dispatch({ type: FETCHING_LOCATION })

        const getLatLon = function (options) {
            return new Promise(function (resolve, reject) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(resolve, reject, options)
                } else {
                    alert('Geolocation is not enabled')
                }
            })
        }
        getLatLon()
            .then((position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                getGeoPosition(lat, lon)
                    .then(data =>
                        dispatch({
                            type: FETCHED_LOCATION,
                            payload: data
                        })
                    )
            })
            .catch(err =>
                dispatch({
                    type: LOCATION_ERROR,
                    payload: err.message
                })
            )
    }
}
export const loadDailyForecast = (cityKey) => {

    return dispatch => {

        dispatch({ type: LOADING_DAILY_FORECAST })

        getDailyForecast(cityKey)
            .then((data) => {
                dispatch({
                    type: DAILY_FORECAST_LOADED,
                    payload: data
                })
            })
            .catch(err =>
                dispatch({
                    type: DAILY_FORECAST_ERROR,
                    payload: err.message
                })
            )
    }
}
export const loadFiveDayForecast = (cityKey) => {

    return dispatch => {

        dispatch({ type: LOADING_FIVE_DAY_FORECAST })

        getFiveDayForecast(cityKey)
            .then((data) => {
                dispatch({
                    type: FIVE_DAY_FORECAST_LOADED,
                    payload: data
                })
            })
            .catch(err =>
                dispatch({
                    type: FIVE_DAY_FORECAST_ERROR,
                    payload: err.message
                })
            )
    }
}
export const loadCitiesList = (inputValue, callback) => {

    return dispatch => {
        dispatch({ type: LOADING_CITIES_LIST })

        let tempArr = []
        getAutoComplete(inputValue)
            .then((data) => {
                dispatch({
                    type: CITIES_LIST_LOADED,
                })
                data.forEach(i => {
                    tempArr.push({ label: i.LocalizedName, key: i.Key })
                })
                callback(tempArr)
            })
            .catch(err =>
                dispatch({
                    type: CITIES_LIST_ERROR,
                    payload: err.message
                })
            )
    }
}
export const getSelectedCity = (selectedCity) => {
    return dispatch => {
        dispatch({
            type: GET_SELECTED_CITY,
            payload: selectedCity
        })
    }
}
