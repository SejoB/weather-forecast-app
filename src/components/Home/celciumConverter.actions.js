export const CONVERT_TO_CELSIUM = 'CONVERT_TO_CELSIUM'
export const CONVERT_TO_FAHRENHEIT = 'CONVERT_TO_FAHRENHEIT'

export const convertCelsToFahr = obj => {
    return dispatch => {
        const tmp = []
        obj.forEach(i => {
            const min = Math.round(i.min * 1.8 + 32)
            const max = Math.round(i.max * 1.8 + 32)
            const obj = {
                ...i,
                min: min,
                max: max
            }
            return tmp.push(obj)
        })
        dispatch({
            type: CONVERT_TO_FAHRENHEIT,
            payload: tmp
        })
    }
}
export const convertFahrToCels = obj => {
    return dispatch => {
        const tmp = []
        obj.forEach(i => {
            const min = Math.round((i.min - 32) * 0.555)
            const max = Math.round((i.max - 32) * 0.555)
            const obj = {
                ...i,
                min: min,
                max: max
            }
            return tmp.push(obj)
        })
        dispatch({
            type: CONVERT_TO_FAHRENHEIT,
            payload: tmp
        })
    }
}
