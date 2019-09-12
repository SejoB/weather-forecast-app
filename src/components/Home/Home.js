import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import getAutoComplete from '../../API/API'
import { getDailyForecast, getFiveDayForecast } from '../../API/API'

import { FIcon, AvatarIcon, OneDayContent, OneDayCard, TypographyCity, FiveDayGrid, FiveDayCard, FiveDayContent, TypographyDate, TypographyTemp, FSContainer, FSGContainer, CityCard, FSGPaper, FSPaper, FGContainer, FButton, FTypography, FContainer, DayFiveContent, TypographyDay, TypographyMax, TypographyMin } from './Home.styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'



class Home extends Component {

    state = {
        key: '',
        city: '',
        // degree: '°',
        oneDay: {
            date: '',
            temperature: null,
            text: '',
            unit: '',
            weatherIcon: null
        },
        fiveDay: {}
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
                let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                const date = new Date(data[0].LocalObservationDateTime)
                const temperature = (data[0].Temperature.Imperial.Value)
                const unit = (data[0].Temperature.Imperial.Unit)
                const text = (data[0].WeatherText)
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
        // getFiveDayForecast(key)
        //     .then((data) => {
        //         const date        = new Date(data[0].LocalObservationDateTime)
        //         const temperature = (data[0].Temperature.Imperial.Value)
        //         const unit        = (data[0].Temperature.Imperial.Unit)
        //         const text        = (data[0].WeatherText)
        //         this.setState({
        //             oneDay:{
        //                 date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} `,
        //                 temperature: temperature,
        //                 text: text,
        //                 unit: unit
        //             }
        //         })
        //     })
    }
    // loadFiveDayForecast = (key) => {
    //     console.log(key)
    //     getFiveDayForecast(key)
    //         .then((data) => {
    //             const date        = new Date(data[0].LocalObservationDateTime)
    //             const temperature = (data[0].Temperature.Imperial.Value)
    //             const unit        = (data[0].Temperature.Imperial.Unit)
    //             const text        = (data[0].WeatherText)
    //             this.setState({
    //                 oneDay:{
    //                     date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} `,
    //                     temperature: temperature,
    //                     text: text,
    //                     unit: unit
    //                 }
    //             })
    //         })
    // }
    // getIcon = () => {
    //     let pic = src{"https://developer.accuweather.com/sites/default/files/" + this.state.oneDay.weatherIcon + "-s.png"
    //     this.setState({
    //         weatherIcon: pic
    //     })
    // }
    
    onCitySelect = (selectedCity) => {
        if (selectedCity) {
            let city = selectedCity.label
            let key = selectedCity.key
            this.setState({
                city: city,
                key: key
            })
            this.loadDailyForecast(key)
            // this.loadFiveDayForecast(key)
            // this.getIcon()
        }
    }

    render() {
        const { oneDay, city, degree, weatherIcon } = this.state
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
                                        <TypographyTemp>{oneDay.temperature} {oneDay.unit}</TypographyTemp>
                                        <FTypography>
                                            <AvatarIcon src={"https://developer.accuweather.com/sites/default/files/" + oneDay.weatherIcon + "-s.png"}/>
                                            {oneDay.text}
                                        </FTypography>
                                    </OneDayContent>
                                </OneDayCard>
                            </Grid>
                            <Grid item>
                                <FButton>Add to Favorites</FButton>
                            </Grid>
                        </FGContainer>
                        <FContainer>
                        </FContainer>
                        <FiveDayGrid container justify='space-around'>
                            {[0, 1, 2, 3, 4].map(value => (
                                <Grid key={value} item>
                                    <FiveDayCard>
                                        <FiveDayContent>
                                            <AvatarIcon src={"https://developer.accuweather.com/sites/default/files/" + oneDay.weatherIcon + "-s.png"}/>
                                            <TypographyDay>{'Monday'}</TypographyDay>
                                            <FiveDayGrid container>
                                                <TypographyMin>{'25'}</TypographyMin>
                                                <TypographyMax>{'30'}</TypographyMax>
                                            </FiveDayGrid>
                                        </FiveDayContent>
                                    </FiveDayCard>
                                </Grid>
                            ))}
                        </FiveDayGrid>
                    </FSGPaper>
                </FSGContainer>
                </Container>
            </React.Fragment>

        )
    }
}

export default Home