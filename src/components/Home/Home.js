import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadDailyForecast, loadFiveDayForecast, loadCitiesList, getSelectedCity } from './Home.actions'
import { addToFavorites } from '../Favorites/Favorites.actions'
import { convertCelsToFahr, convertFahrToCels } from '../Home/celciumConverter.actions'

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { Grid } from '@material-ui/core'
import AsyncSelect from 'react-select/async'

import { asyncStyles } from '../../theme/theme'
import {
    FIcon,
    AvatarIcon,
    OneDayWidget,
    OneDayCityFavBtnGrid,
    OneDayTempIcnGrid,
    TypographyCity,
    FiveDayGrid,
    FiveDayGridCont,
    FiveDayGridItem,
    TypographyDate,
    TypographyTemp,
    ForecastContainer,
    OneDayGridContainer,
    FButton,
    FTypography,
    TypographyDay,
    TypographyMax,
    TypographyMin,
    ToggleFahrCel
} from './Home.styles'
import Skeleton from '@material-ui/lab/Skeleton'
class Home extends Component {
    state = {
        favColor: false,
        measure: 'celsium',
        loading: true
    }
    componentDidMount() {
        const { city, cityKey, doLoadDailyForecast, doLoadFiveDayForecast, daily, oneDay } = this.props
        if (daily && oneDay) {
            setTimeout(() => {
                return this.setState({
                    loading: false
                })
            }, 2500)
        }
        if (cityKey) {
            doLoadFiveDayForecast(cityKey)
            doLoadDailyForecast(cityKey)
        }
        if (city) {
            this.checkCityInFav(city)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const { city, cityKey, doLoadDailyForecast, doLoadFiveDayForecast } = this.props
        if (this.props.cityKey !== prevProps.cityKey) {
            doLoadFiveDayForecast(cityKey)
            doLoadDailyForecast(cityKey)
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
    checkCityInFav = city => {
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
                    measure: 'fahrenheit'
                })
            case 'celsium':
                this.props.doConvertFahrToCels(obj)
                return this.setState({
                    measure: 'celsium'
                })
            default:
                return this.state
        }
    }

    render() {
        const { oneDay, daily, city } = this.props
        const { doLoadCitiesList, doGetSelectedCity, selectedCity } = this.props
        const { favColor, measure, loading } = this.state
        const favoritesBtn = { color: favColor ? 'red' : '' }
        return (
            <ForecastContainer>
                <AsyncSelect styles={asyncStyles} value={selectedCity} loadOptions={doLoadCitiesList} onChange={doGetSelectedCity} />
                <OneDayGridContainer container>
                    <OneDayWidget item>
                        <OneDayCityFavBtnGrid item>
                            {loading ? (
                                <Skeleton
                                    variant='text'
                                    width={190}
                                    style={{
                                        fontSize: '2rem',
                                        borderRadius: '10px'
                                    }}
                                />
                            ) : (
                                <>
                                    <TypographyCity>{city ? city : 'City'}</TypographyCity>
                                    <FIcon
                                        style={{
                                            color: favColor ? 'red' : '',
                                            alignSelf: 'center'
                                        }}
                                        onClick={this.addFavoritesHandler}
                                    />
                                </>
                            )}
                        </OneDayCityFavBtnGrid>
                        {loading ? (
                            <Skeleton
                                variant='text'
                                width={120}
                                style={{
                                    fontSize: '1.5rem',
                                    borderRadius: '10px'
                                }}
                            />
                        ) : (
                            <TypographyDate>{oneDay.date}</TypographyDate>
                        )}
                        <OneDayTempIcnGrid container>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                {loading ? (
                                    <Skeleton
                                        variant='text'
                                        width={200}
                                        style={{
                                            fontSize: '5.5rem',
                                            borderRadius: '10px'
                                        }}
                                    />
                                ) : (
                                    <TypographyTemp>{measure === 'celsium' ? oneDay.metricTemp : oneDay.imperialTemp}</TypographyTemp>
                                )}
                                {loading ? null : (
                                    <ToggleButtonGroup
                                        exclusive
                                        onChange={this.changeMeasurementHandler}
                                        value={measure}
                                        size='medium'
                                        style={{
                                            alignSelf: 'center',
                                            backgroundColor: 'transparent'
                                        }}
                                    >
                                        <ToggleFahrCel value='celsium'>{'C°'}</ToggleFahrCel>
                                        <ToggleFahrCel value='fahrenheit'>{'F°'}</ToggleFahrCel>
                                    </ToggleButtonGroup>
                                )}
                            </div>
                            {loading ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                    <Skeleton
                                        variant='circle'
                                        width={40}
                                        height={40}
                                        style={{
                                            marginRight: '14px'
                                        }}
                                    />
                                    <Skeleton
                                        variant='text'
                                        width={120}
                                        style={{
                                            fontSize: '2rem',
                                            borderRadius: '10px'
                                        }}
                                    />
                                </div>
                            ) : (
                                <FTypography component='div'>
                                    <AvatarIcon src={'https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/' + oneDay.weatherIcon + '-s.png'} alt='icon' />
                                    {oneDay.text}
                                </FTypography>
                            )}
                        </OneDayTempIcnGrid>
                    </OneDayWidget>
                    <Grid item>
                        <FButton style={favoritesBtn} onClick={this.addFavoritesHandler}>
                            Add to Favorites
                        </FButton>
                    </Grid>
                </OneDayGridContainer>
                <FiveDayGridCont container>
                    {daily.map((d, key) => {
                        return (
                            <FiveDayGridItem key={key} item>
                                {loading ? (
                                    <Skeleton variant='circle' style={{ width: '40px', height: '40px', alignSelf: 'center' }} />
                                ) : (
                                    <AvatarIcon src={'https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/' + d.fiveDayIcon + '-s.png'} alt='icon' />
                                )}
                                {loading ? <Skeleton variant='text' style={{ height: '48px', width: '54px', borderRadius: '10px', alignSelf: 'center' }} /> : <TypographyDay>{d.date}</TypographyDay>}
                                {loading ? (
                                    <Skeleton variant='text' style={{ height: '35px', width: '102px', borderRadius: '10px', alignSelf: 'center' }} />
                                ) : (
                                    <FiveDayGrid container>
                                        <TypographyMin>
                                            {d.min}
                                            {'°'}
                                        </TypographyMin>
                                        <TypographyMax>
                                            {d.max}
                                            {'°'}
                                        </TypographyMax>
                                    </FiveDayGrid>
                                )}
                            </FiveDayGridItem>
                        )
                    })}
                </FiveDayGridCont>
            </ForecastContainer>
        )
    }
}
const mapStateToProps = state => {
    const { cityKey, city, oneDay, daily, notification } = state.home
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
        doLoadDailyForecast: cityKey => dispatch(loadDailyForecast(cityKey)),
        doLoadFiveDayForecast: cityKey => dispatch(loadFiveDayForecast(cityKey)),
        doLoadCitiesList: (inputValue, callback) => dispatch(loadCitiesList(inputValue, callback)),
        doGetSelectedCity: selectedCity => dispatch(getSelectedCity(selectedCity)),
        doAddFavoritesHandler: (city, cityKey) => dispatch(addToFavorites(city, cityKey)),
        doConvertCelsToFahr: obj => dispatch(convertCelsToFahr(obj)),
        doConvertFahrToCels: obj => dispatch(convertFahrToCels(obj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
