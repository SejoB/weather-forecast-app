import { combineReducers } from 'redux'

import { homeReducer } from '../components/Home/Home.reducer'
import { favoritesReducer } from '../components/Favorites/Favorites.reducer'
import { themeReducer } from '../theme/theme.reducer'

const rootReducer = combineReducers({
    home: homeReducer,
    favorite: favoritesReducer,
    theme: themeReducer
})
export default rootReducer
