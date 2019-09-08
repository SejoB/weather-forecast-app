import React, { Component } from 'react'
// import Select from  'react-select'
import AsyncSelect from 'react-select/async'
import getAutoComplete from '../components/API'

class SearchBar extends Component {

    state = {
        locationKey: null,
        citiesList: [],
        selectedCity: '',
        query: ''
    }

    // componentDidMount(){
    //     this.getCitiesList(this.state.query)
    // }
    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
          this.getCitiesList()
        }
      }

    handleInputChange = (newValue) => {
        const inputValue = newValue
        this.setState({
            query: inputValue
        })
        console.log(this.state.query)
    }
    getCitiesList = (query) => {
        console.log(query)
         getAutoComplete(query).then((data)=>{
             console.log(data)
         })
        
        
    }

    render() {
        const {citiesList, handleInputChange, getCitiesList} = this
        return(
            <AsyncSelect 
                
                placeholder='Search City'
                onInputChange={handleInputChange, getCitiesList}
                options={citiesList}
                />
                
        )
    }
}

export default SearchBar