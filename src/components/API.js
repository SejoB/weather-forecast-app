import axios from 'axios'

// const API_KEY     = process.env.REACT_APP_API_KEY
// const API_HOST    =     process.env.REACT_APP_API_HOST
// const API_VERSION = process.env.REACT_APP_API_VERSION


// const autoCompleteApiUrl = (query) => `${API_HOST}/locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}=&Q=${query}`
const autoCompleteApiUrl = (query) => './../../public/autoComplete.json'

const getAutoComplete = async (query) => {
    console.log(query)
    try{
            const response = await axios.get(autoCompleteApiUrl(query))
            const data   = response.data
            return data
    }catch (error){
        console.log(error)
    }
}

export default getAutoComplete
