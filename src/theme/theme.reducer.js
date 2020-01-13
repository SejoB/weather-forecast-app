const DARK_THEME = 'DARK_THEME'
const LIGHT_THEME = 'LIGHT_THEME'

let initialState = {
    themeMode: {
        mode: 'light',
        backGround: 'linear-gradient(to bottom right, #36516f, #394655, #2b3541)'
    }
}
export const changeTheme = selected => {
    return dispatch => {
        if (!selected) {
            dispatch({ type: DARK_THEME })
        } else {
            dispatch({ type: LIGHT_THEME })
        }
    }
}
export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_THEME:
            return {
                ...state,
                themeMode: {
                    mode: 'light',
                    backGround: 'linear-gradient(to bottom right, #36516f, #394655, #2b3541)'
                }
            }
        case DARK_THEME:
            return {
                ...state,
                themeMode: {
                    mode: 'dark',
                    backGround: 'linear-gradient(to bottom right, #333030, #303030, #1d1b1b)'
                }
            }
        default:
            return state
    }
}
