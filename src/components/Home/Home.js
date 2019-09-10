import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import getAutoComplete from '../../API/API'
import { getDailyForecast, getFiveDayForecast } from '../../API/API'

import { OneDayContent, OneDayCard, TypographyCity, FiveDayGrid, FiveDayContent, TypographyDate, TypographyTemp, FSContainer, FSGContainer, CityCard, FSGPaper, FSPaper, FGContainer, FButton, FTypografy, FContainer, DayFiveContent, TypographyDay, TypographyMinMax } from './Home.styles'
import { Card, Grid } from '@material-ui/core'



class Home extends Component {

    state = {
        key: '',
        city: '',
        // degree: '°',
        oneDay: {
            date: '',
            temperature: null,
            text: '',
            unit: ''
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
                this.setState({
                    oneDay: {
                        date: `${weekday[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`,
                        temperature: temperature,
                        text: text,
                        unit: unit
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
        }
    }

    render() {
        const { oneDay, city, degree } = this.state
        const { loadCityKey, onCitySelect } = this
        return (
            <React.Fragment>
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
                                        <TypographyCity>{city}</TypographyCity>
                                        <TypographyDate>{oneDay.date}</TypographyDate>
                                        <TypographyTemp>{oneDay.temperature} {oneDay.unit}</TypographyTemp>
                                    </OneDayContent>
                                </OneDayCard>
                            </Grid>
                            <Grid item>
                                <FButton>Add to Favorites</FButton>
                            </Grid>
                        </FGContainer>
                        <FContainer>
                            <FTypografy>{oneDay.text}</FTypografy>
                        </FContainer>
                        <FiveDayGrid container justify='space-around'>
                            {[0, 1, 2, 3, 4].map(value => (
                                <Grid key={value} item>
                                    <Card>
                                        <FiveDayContent>
                                            <TypographyDay>{'Monday'}</TypographyDay>
                                            <TypographyMinMax>{'30   25'}</TypographyMinMax>
                                        </FiveDayContent>
                                    </Card>
                                </Grid>
                            ))}
                        </FiveDayGrid>
                    </FSGPaper>
                </FSGContainer>
            </React.Fragment>

        )
    }
}

export default Home