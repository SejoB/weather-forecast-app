import {
    ADD_TO_FAVORITE,
    DELETE_FROM_FAVORITE,
    LOAD_FAVORITE_LIST,
} from './Favorites.actions'

let initialState = {
    favorites: [],
    notification: ''
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state,
                notification: 'city is added'
            }
        case LOAD_FAVORITE_LIST:
            console.log(action.payload)
            return {
                ...state, 
                favorites: action.payload
            }
        case DELETE_FROM_FAVORITE:
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state
    }
}