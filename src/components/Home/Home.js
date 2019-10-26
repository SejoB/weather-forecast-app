import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadDailyForecast, loadFiveDayForecast, loadCitiesList, getSelectedCity } from './Home.actions'
import { addToFavorites } from '../Favorites/Favorites.actions'


import { FIcon, AvatarIcon, FavoriteHiddenBtn, OneDayPaper, TypographyCity, FiveDayGrid, 
         FiveDayGridCont, FiveDayGridItem, TypographyDate, TypographyTemp, SearchContainer, 
         ForecastContainer, ForecastPaper, SearchPaper, OneDayGridContainer, FButton, FTypography, 
         TypographyDay, TypographyMax, TypographyMin } from './Home.styles'
import { Paper, Container, Grid } from '@material-ui/core'
import AsyncSelect from 'react-select/async'


class Home extends Component {


    componentDidUpdate(prevProps, prevState) {
        let cityKey = this.props.cityKey
        if (this.props.cityKey !== prevProps.cityKey) {
            this.props.doLoadDailyForecast(cityKey)
            this.props.doLoadFiveDayForecast(cityKey)
        }
    }
    addFavoritesHandler = () => {
        const { city, cityKey, doAddFavoritesHandler} = this.props
        doAddFavoritesHandler(city, cityKey)
    }

    render() {
        const { oneDay, daily, city } = this.props
        const { doLoadCitiesList, doGetSelectedCity, selectedCity } = this.props
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
                                            <FIcon onClick={this.addFavoritesHandler}></FIcon>
                                        </FavoriteHiddenBtn>
                                    </Grid>
                                    <Grid item>
                                        <TypographyDate>{oneDay.date}</TypographyDate>
                                        <TypographyTemp>{oneDay.temperature}{oneDay.unit}{'°'}</TypographyTemp>
                                        <FTypography component='div'>
                                            <AvatarIcon src={"https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/" + oneDay.weatherIcon + "-s.png"} alt='icon' />
                                            {oneDay.text}
                                        </FTypography>
                                    </Grid>
                                </OneDayPaper>
                                <Grid item>
                                    <FButton onClick={this.addFavoritesHandler}>Add to Favorites</FButton>
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
        notification
    } = state.home
    return {
        cityKey,
        city,
        oneDay,
        daily,
        notification

    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLoadDailyForecast:    (cityKey)               => dispatch(loadDailyForecast(cityKey)),
        doLoadFiveDayForecast:  (cityKey)               => dispatch(loadFiveDayForecast(cityKey)),
        doLoadCitiesList:       (inputValue, callback)  => dispatch(loadCitiesList(inputValue, callback)),
        doGetSelectedCity:      (selectedCity)          => dispatch(getSelectedCity(selectedCity)),
        doAddFavoritesHandler:  (city, cityKey)         => dispatch(addToFavorites(city, cityKey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

