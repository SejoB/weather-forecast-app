import React, { Component } from 'react'

import getAutoComplete from '../../API/API'

import { FIcon, AvatarIcon, FavoriteHiddenBtn, OneDayPaper, TypographyCity, FiveDayGrid, FiveDayGridCont, FiveDayGridItem, TypographyDate, TypographyTemp, SearchContainer, ForecastContainer, ForecastPaper, SearchPaper, OneDayGridContainer, FButton, FTypography, TypographyDay, TypographyMax, TypographyMin } from './Home.styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AsyncSelect from 'react-select/async'
import { Button, Paper } from '@material-ui/core'


class Home extends Component {

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
    onCitySelectHandler = (selectedCity) => {
        if (selectedCity) {
            this.props.selectCity(selectedCity)
        }
    }
    addFavoritesHandler = () => {
        this.props.addFavorites()
    }

    render() {
        const state = this.props.data
        const { oneDay, daily, city } = state
        const { loadCitiesList, onCitySelectHandler, selectedCity } = this

        return (
            <React.Fragment>
                <Container>
                    <SearchContainer>
                        <SearchPaper>
                            <AsyncSelect
                                value={selectedCity}
                                loadOptions={loadCitiesList}
                                onChange={(e) => { onCitySelectHandler(e) }}
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
                                            <AvatarIcon src={"https://raw.githubusercontent.com/SejoB/Sergey-Bekker-04-09-2019/master/public/weatherIcons/" + oneDay.oneDayIcon + "-s.png"} alt='icon' />
                                            {oneDay.text}
                                        </FTypography>
                                    </Grid>
                                </OneDayPaper>
                                    <Grid item>
                                        <FButton onClick={this.addFavoritesHandler} >Add to Favorites</FButton>
                                    </Grid>
                            </OneDayGridContainer>
                            <FiveDayGridCont container>
                                {daily.map((d, key) => {
                                    return <Paper key={key} style={{ padding: '0.5rem', margin: '0.5rem' }}>
                                        <FiveDayGridItem  item>
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


export default Home

