import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadDailyForecast, loadFiveDayForecast, loadCitiesList, getSelectedCity } from './Home.actions'
import { addToFavorites } from '../Favorites/Favorites.actions'
import { convertCelsToFahr, convertFahrToCels } from '../Home/celciumConverter.actions'

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { Paper, Container, Grid } from '@material-ui/core'
import AsyncSelect from 'react-select/async'
import {
    FIcon, AvatarIcon, FavoriteHiddenBtn, OneDayPaper, TypographyCity, FiveDayGrid,
    FiveDayGridCont, FiveDayGridItem, TypographyDate, TypographyTemp, SearchContainer,
    ForecastContainer, ForecastPaper, SearchPaper, OneDayGridContainer, FButton, FTypography,
    TypographyDay, TypographyMax, TypographyMin, ToggleFahrCel
} from './Home.styles'

class Home extends Component {
    state = {
        favColor: false,
        measure: 'celsium',
    }
    componentDidMount() {
        const { city, cityKey, doLoadDailyForecast, doLoadFiveDayForecast } = this.props
        if (cityKey) {
            doLoadDailyForecast(cityKey)
            doLoadFiveDayForecast(cityKey)
        }
        if (city) {
            this.checkCityInFav(city)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const { city, cityKey, doLoadDailyForecast, doLoadFiveDayForecast } = this.props
        if (this.props.cityKey !== prevProps.cityKey) {
            doLoadDailyForecast(cityKey)
            doLoadFiveDayForecast(cityKey)
        }
        if (this.props.city !== prevProps.city) {
            this.checkCityInFav(city)
        }
    }
    addFavoritesHandler = () => {
        const { city, cityKey, doAddFavoritesHandler } = this.props
        doAddFavoritesHandler(city, cityKey)
        this.setState({
            favColor: true
        })
    }
    checkCityInFav = (city) => {
        let fav = { ...localStorage }
        for (let item in fav) {
            if (item === city) {
                return this.setState({
                    favColor: true
                })
            } else {
                this.setState({
                    favColor: false
                })
            }
        }
    }
    changeMeasurementHandler = (event, newMeasure) => {
        const obj = this.props.daily
        switch (newMeasure) {
            case 'fahrenheit':
                this.props.doConvertCelsToFahr(obj)
                return this.setState({
                    measure: 'fahrenheit',
                })
            case 'celsium':
                this.props.doConvertFahrToCels(obj)
                return this.setState({
                    measure: 'celsium',
                })
            default:
                return this.state
        }
    }
    render() {
        const { oneDay, daily, city } = this.props
        const { doLoadCitiesList, doGetSelectedCity, selectedCity } = this.props
        const { favColor, measure } = this.state
        const favoritesBtn = { color: (favColor ? 'red' : '') }
        return (
            <React.Fragment>
                <Container>
                    <SearchContainer>
                        <SearchPaper>
                            <AsyncSelect
                                value={selectedCity}
                                loadOptions={doLoadCitiesList}
                                onChange={doGetSelectedCity}
                            />
                        </SearchPaper>
                    </SearchContainer>
                    <ForecastContainer>
                        <ForecastPaper>
                            <OneDayGridContainer container>
                                <OneDayPaper>
                                    <Grid item style={{ justifyContent: 'space-between', flexWrap: 'nowrap', display: 'flex' }}>
                                        <TypographyCity>{city}</TypographyCity>
                                        <FavoriteHiddenBtn>
                                            <FIcon style={favoritesBtn} onClick={this.addFavoritesHandler}></FIcon>
                                        </FavoriteHiddenBtn>
                                    </Grid>
                                    <TypographyDate>{oneDay.date}</TypographyDate>
                                    <Grid container style={{ justifyContent: 'flex-end' }}>
                                        <TypographyTemp>
                                            {measure === 'celsium' ? oneDay.metricTemp : oneDay.imperialTemp}
                                        </TypographyTemp>
                                        <ToggleButtonGroup exclusive
                                            onChange={this.changeMeasurementHandler}
                                            value={measure}
                                            size='medium'
                                            style={{ alignSelf: 'center' }}>
                                            <ToggleFahrCel value='celsium'>{'C°'}</ToggleFahrCel>
                                            <ToggleFahrCel value='fahrenheit'>{'F°'}</ToggleFahrCel>
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <FTypography component='div'>
                                        <AvatarIcon src={"https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/" + oneDay.weatherIcon + "-s.png"} alt='icon' />
                                        {oneDay.text}
                                    </FTypography>
                                </OneDayPaper>
                                <Grid item>
                                    <FButton style={favoritesBtn} onClick={this.addFavoritesHandler}>Add to Favorites</FButton>
                                </Grid>
                            </OneDayGridContainer>
                            <FiveDayGridCont container>
                                {daily.map((d, key) => {
                                    return <Paper key={key} style={{ padding: '0.5rem', margin: '0.5rem' }}>
                                        <FiveDayGridItem item>
                                            <AvatarIcon src={"https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/" + d.fiveDayIcon + "-s.png"} alt='icon' />
                                            <TypographyDay>{d.date}</TypographyDay>
                                            <FiveDayGrid>
                                                <TypographyMin>{d.min}{'°'}</TypographyMin>
                                                <TypographyMax>{d.max}{'°'}</TypographyMax>
                                            </FiveDayGrid>
                                        </FiveDayGridItem>
                                    </Paper>
                                })}
                            </FiveDayGridCont>
                        </ForecastPaper>
                    </ForecastContainer>
                </Container>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    const {
        cityKey,
        city,
        oneDay,
        daily,
        notification,
    } = state.home
    return {
        cityKey,
        city,
        oneDay,
        daily,
        notification,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLoadDailyForecast: (cityKey) => dispatch(loadDailyForecast(cityKey)),
        doLoadFiveDayForecast: (cityKey) => dispatch(loadFiveDayForecast(cityKey)),
        doLoadCitiesList: (inputValue, callback) => dispatch(loadCitiesList(inputValue, callback)),
        doGetSelectedCity: (selectedCity) => dispatch(getSelectedCity(selectedCity)),
        doAddFavoritesHandler: (city, cityKey) => dispatch(addToFavorites(city, cityKey)),
        doConvertCelsToFahr: (obj) => dispatch(convertCelsToFahr(obj)),
        doConvertFahrToCels: (obj) => dispatch(convertFahrToCels(obj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

