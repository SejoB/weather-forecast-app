const DARK_THEME = 'DARK_THEME'
const LIGHT_THEME = 'LIGHT_THEME'

let initialState = {
    themeMode: 'light'
}
export const changeTheme = (selected) => {
    return (dispatch) => {
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
                themeMode: 'light'
            }
        case DARK_THEME:

            return {
                ...state,
                themeMode: 'dark'
            }
        default:
            return state
    }
}
