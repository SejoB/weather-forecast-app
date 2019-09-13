import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import getAutoComplete from '../../API/API'
import { getDailyForecast, getFiveDayForecast } from '../../API/API'

import { FIcon, AvatarIcon, OneDayContent, OneDayCard, TypographyCity, FiveDayGrid, FiveDayCard, FiveDayContent, TypographyDate, TypographyTemp, FSContainer, FSGContainer, FSGPaper, FSPaper, FGContainer, FButton, FTypography, TypographyDay, TypographyMax, TypographyMin } from './Home.styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'



class Home extends Component {

    state = {
        key: '',
        city: '',
        oneDay: {
            date: '',
            temperature: null,
            text: '',
            unit: '',
            weatherIcon: ''
        },
        daily: []
    }

    loadCityKey = (inputValue, callback) => {
        let tempArr = []
        getAutoComplete(inputValue)
            .then((data) => {
                data.forEach(i => {
                    tempArr.push({ label: i.LocalizedName, key: i.Key })
                })
                callback(tempArr)
            })
    }

    loadDailyForecast = (key) => {
        getDailyForecast(key)
            .then((data) => {
                const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                const date        = new Date(data[0].LocalObservationDateTime)
                const temperature = (data[0].Temperature.Imperial.Value)
                const unit        = (data[0].Temperature.Imperial.Unit)
                const text        = (data[0].WeatherText)
                const weatherIcon = (data[0].WeatherIcon)
                this.setState({
                    oneDay: {
                        date: `${weekday[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`,
                        temperature: temperature,
                        text: text,
                        unit: unit,
                        weatherIcon: weatherIcon
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
                    const date        = new Date(i.Date)
                    const max         = i.Temperature.Maximum.Value
                    const min         = i.Temperature.Minimum.Value
                    const weatherIcon = (i.Day.Icon)
                    arr.push({
                        date: `${weekday[date.getDay()]}`,
                        min: min,
                        max: max,
                        weatherIcon: weatherIcon
                    })
                })
                this.setState(
                    {
                        daily: arr
                    }
                )
            })      
    }


    onCitySelect = (selectedCity) => {
        if (selectedCity) {
            let city = selectedCity.label
            let key = selectedCity.key
            this.setState({
                city: city,
                key: key
            })
            this.loadDailyForecast(key)
            this.loadFiveDayForecast(key)
        }
    }

    render() {
        const { oneDay, daily, city } = this.state
        console.log(daily.weatherIcon, oneDay.weatherIcon)
        const { loadCityKey, onCitySelect } = this
        return (
            <React.Fragment>
                <Container>
                    <FSContainer>
                        <FSPaper>
                            <AsyncSelect
                                value={this.state.selectedCity}
                                loadOptions={loadCityKey}
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
                                                <AvatarIcon src={"../../../public/weatherIcons" + oneDay.weatherIcon + "-s.png"} />
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
                                                <AvatarIcon src={"../../../public/weatherIcons" + d.weatherIcon + "-s.png"} />
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