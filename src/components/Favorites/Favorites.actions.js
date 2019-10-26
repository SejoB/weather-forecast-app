export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
export const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE'
export const LOAD_FAVORITE_LIST = 'LOAD_FAVORITE_LIST'
export const LOAD_CITY_FROM_FAVORITES = 'LOAD_CITY_FROM_FAVORITES'


export const addToFavorites = (city, cityKey) => {
    return dispatch => {
        dispatch({ type: ADD_TO_FAVORITE })
        localStorage.setItem(city, cityKey)
    }
}
export const loadFavoritesList = () => {
    return dispatch => {
        const fav = { ...localStorage }
        const items = Object.entries(fav)
        dispatch({
            type: LOAD_FAVORITE_LIST,
            payload: items
        })
    }
}
export const deleteFavoritesCity = (value) => {
    return dispatch => {
       
            localStorage.removeItem(value)
            const fav = { ...localStorage }
            const items = Object.entries(fav)
            dispatch({
                type: DELETE_FROM_FAVORITE,
                payload: items
            })
        }
}
export const loadFavoritesCity = (value) => {
    return dispatch => {
        dispatch({
            type: LOAD_CITY_FROM_FAVORITES,
            payload: value
        })
    }
}
