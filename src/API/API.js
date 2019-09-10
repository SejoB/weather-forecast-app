import axios from 'axios'

// const API_KEY     = process.env.REACT_APP_API_KEY
// const API_HOST    = process.env.REACT_APP_API_HOST
// const API_VERSION = process.env.REACT_APP_API_VERSION


const autoCompleteUrl = (query) => `${API_HOST}/locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}=&Q=${query}`
// const dailyForecastUrl = () => `${API_HOST}/currentconditions/${API_VERSION}/${key}?apikey=${API_KEY}`
// const autoCompleteUrl = () => 'https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/autoComplete.json'
// const dailyForecastUrl = () => `${API_HOST}/currentconditions/${API_VERSION}/${key}?apikey=${API_KEY}`


const getAutoComplete = async (query) => {
    // console.log(query)
    try{
            const  response = await axios.get(autoCompleteUrl(query))
            const  data     = await response.data
            console.log(data)
            return data
    }catch (error){
        console.log(error)
    }
}

export default getAutoComplete
