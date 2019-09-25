import React, { Component } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"

import { getDailyForecast, getFiveDayForecast, getGeoPosition } from './../API/API'
import Header from './Header/Header'
import Home from './Home/Home'
import Favorites from './Favorites/Favorites'

class App extends Component {


  state = {
    prevState: '',
    key: '',
    city: '',
    oneDay: {
      date: '',
      temperature: null,
      text: '',
      unit: '',
      weatherIcon: null
    },
    daily: []
  }

  componentDidMount() {
    this.getPosition()
  }
  componentDidUpdate(prevProps, prevState) {
    let key = this.state.key
    if (this.state.key !== prevState.key) {
      this.loadDailyForecast(key)
      this.loadFiveDayForecast(key)
    }
  }
  getPosition = () => {
    const getLatLon = function (options) {
      return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        } else {
          alert('Geolocation is not enabled')
        }
      })
    }
    getLatLon()
      .then((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        getGeoPosition(lat, lon)
        .then((data) => {
            this.setState({
              key: data.Key,
              city: data.LocalizedName
            })
          })
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  loadDailyForecast = (key) => {
    getDailyForecast(key)
      .then((data) => {
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const date = new Date(data[0].LocalObservationDateTime)
        const temperature = (data[0].Temperature.Imperial.Value)
        const unit = (data[0].Temperature.Imperial.Unit)
        const text = (data[0].WeatherText)
        const oneDayIcon = (data[0].WeatherIcon)
        this.setState({
          oneDay: {
            date: `${weekday[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`,
            temperature: temperature,
            text: text,
            unit: unit,
            oneDayIcon: oneDayIcon
          }
        })
      })
  }
  loadFiveDayForecast = (key) => {
    getFiveDayForecast(key)
      .then((data) => {
        const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let arr = []
        data.DailyForecasts.forEach(i => {
          const date = new Date(i.Date)
          const max = i.Temperature.Maximum.Value
          const min = i.Temperature.Minimum.Value
          const fiveDayIcon = i.Day.Icon
          arr.push({
            date: `${weekday[date.getDay()]}`,
            min: min,
            max: max,
            fiveDayIcon: fiveDayIcon
          })
        })
        this.setState(
          {
            daily: arr
          }
        )
      })
  }
  getSelectedCity = (selectedCity) => {
    const city = selectedCity.label
    const key = selectedCity.key
    return this.setState({
      city: city,
      key: key
    })
  }
  setFavorites = () => {
    const { city, key } = this.state
    localStorage.setItem(city, key)
  }
  getFavoriteCity = (city, key) => {
    this.setState({
      key: key,
      city: city
    })
  }


  render() {
    return (
      <React.Fragment>
      <HashRouter>
          <Header />
          <Switch>
            <Route  exact path='/'
                    render={() => <Home data={this.state}
                                        addFavorites={this.setFavorites}
                                        selectCity={this.getSelectedCity} />}
            />
            <Route  path='/favorites' render={() => <Favorites loadFavorites={this.getFavoriteCity} />} />
            <Route  exact path='/' component={Home}/>
          </Switch>
      </HashRouter>
        </React.Fragment>
    )
  }
}


export default App
