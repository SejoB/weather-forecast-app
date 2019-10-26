import { combineReducers } from 'redux'

import {homeReducer} from '../components/Home/Home.reducer'
import {favoritesReducer} from '../components/Favorites/Favorites.reducer'


const rootReducer = combineReducers({
    home:       homeReducer,
    favorite:   favoritesReducer
})

export default rootReducer