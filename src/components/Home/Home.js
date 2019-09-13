import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import getAutoComplete from '../../API/API'
import { getDailyForecast, getFiveDayForecast } from '../../API/API'
// import icons from './weather_forecast/src/media/weatherIcons' 

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
            weatherIcon: null
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
                const oneDayIcon =  (data[0].WeatherIcon)
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
                    const date        = new Date(i.Date)
                    const max         = i.Temperature.Maximum.Value
                    const min         = i.Temperature.Minimum.Value
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
                    console.log(this.state.daily[3].fiveDayIcon)
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
        console.log(daily[3], oneDay.oneDayIcon)
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
                                                {/* <AvatarIcon src={"../../media/weatherIcons/34-s.png"} alt='icon' /> */}
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
                                                {/* <AvatarIcon  src={"https://github.com/SejoB/Sergey-Bekker-04-09-2019/tree/919d69579efd59501e245baa6f36350ff5c1e380/public/weatherIcons/03-s.png"} alt='icon' />
                                                <AvatarIcon  src={"https://github.com/SejoB/Sergey-Bekker-04-09-2019/tree/919d69579efd59501e245baa6f36350ff5c1e380/public/weatherIcons/03-s.png"} alt='icon' /> */}
                                                <AvatarIcon  src={"https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/919d69579efd59501e245baa6f36350ff5c1e380/public/weatherIcons/" +d.fiveDayIcon+ "-s.png"} alt='icon' />
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