import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import getAutoComplete from '../../API/API'
import { getDailyForecast, getFiveDayForecast, getGeoPosition } from '../../API/API'

import { FIcon, AvatarIcon, OneDayContent, OneDayCard, TypographyCity, FiveDayGrid, FiveDayCard, FiveDayContent, TypographyDate, TypographyTemp, FSContainer, FSGContainer, FSGPaper, FSPaper, FGContainer, FButton, FTypography, TypographyDay, TypographyMax, TypographyMin } from './Home.styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'



class Home extends Component {

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
        console.log(this.state.key, prevState.key)
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
                            key:  data.Key,
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
            console.log(data)
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
                console.log(data)
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
    loadCitiesList = (inputValue, callback) => {
        let tempArr = []
        getAutoComplete(inputValue)
            .then((data) => {
                data.forEach(i => {
                    tempArr.push({ label: i.LocalizedName, key: i.Key })
                })
                callback(tempArr)
            })
    }
    onCitySelect = (selectedCity) => {
        if (selectedCity) {
            let city = selectedCity.label
            let key =  selectedCity.key
            this.setState({
                city: city,
                key: key
            })
        }
    }


    render() {
        const { oneDay, daily, city } = this.state
        const { loadCitiesList, onCitySelect } = this
        return (
            <React.Fragment>
                <Container>
                    <FSContainer>
                        <FSPaper>
                            <AsyncSelect
                                value={this.state.selectedCity}
                                loadOptions={loadCitiesList}
                                onChange={(e) => { onCitySelect(e) }}
                            />
                        </FSPaper>
                    </FSContainer>
                    <FSGContainer>
                        <FSGPaper>
                            <FGContainer container>
                                <Grid item>
                                    <OneDayCard>
                                        <OneDayContent>
                                            <TypographyCity>{city}<FIcon></FIcon></TypographyCity>
                                            <TypographyDate>{oneDay.date}</TypographyDate>
                                            <TypographyTemp>{oneDay.temperature} {oneDay.unit}{'°'}</TypographyTemp>
                                            <FTypography component='div'>
                                                <AvatarIcon src={"https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/" + oneDay.oneDayIcon + "-s.png"} alt='icon' />
                                                {oneDay.text}
                                            </FTypography>
                                        </OneDayContent>
                                    </OneDayCard>
                                </Grid>
                                <Grid item>
                                    <FButton>Add to Favorites</FButton>
                                </Grid>
                            </FGContainer>
                            <FiveDayGrid>
                                {daily.map((d, key) => {
                                    return <Grid key={key} item>
                                        <FiveDayCard>
                                            <FiveDayContent>
                                                <AvatarIcon src={"https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/" + d.fiveDayIcon + "-s.png"} alt='icon' />
                                                <TypographyDay>{d.date}</TypographyDay>
                                                <FiveDayGrid container>
                                                    <TypographyMin>{d.min}{'°'}</TypographyMin>
                                                    <TypographyMax>{d.max}{'°'}</TypographyMax>
                                                </FiveDayGrid>
                                            </FiveDayContent>
                                        </FiveDayCard>
                                    </Grid>
                                })}
                            </FiveDayGrid>
                        </FSGPaper>
                    </FSGContainer>
                </Container>
            </React.Fragment>

        )
    }
}

export default Home