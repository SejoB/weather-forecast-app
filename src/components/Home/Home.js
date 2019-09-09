import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import getAutoComplete from '../../API/API'

import { FSContainer, FSGContainer, ItemCard, CityCard, FSGPaper, FSPaper, FGContainer, FButton, FTypografy, FContainer, } from './Home.styles'
import { Grid, Typography, CardContent } from '@material-ui/core'



class Home extends Component {

    state = {
        locationKey: null,
        selectedCity: {},
        inputValue: ''
    }



    loadData = (inputValue, callback) => {
        let tempArr = []
        getAutoComplete(inputValue)
            .then((data) => {
                data.forEach(i => {
                    tempArr.push({ label: i.LocalizedName })
                })
                callback(tempArr)
            })
    }

    onCitySelect = (selectedCity) => {
        console.log(selectedCity)
        if (selectedCity) {
            this.setState({
                selectedCity
            })
        }
    }

    render() {
        const { loadData, onCitySelect } = this
        return (
            <React.Fragment>
                <FSContainer>
                    <FSPaper>
                        <AsyncSelect
                            value={this.state.selectedCity}
                            loadOptions={loadData}
                            onChange={(e) => { onCitySelect(e) }}
                            
                        />
                    </FSPaper>
                </FSContainer>
                <FSGContainer>
                    <FSGPaper>
                        <FGContainer container>
                            <Grid item>
                                <CityCard>
                                    <CardContent>
                                        <Typography>Scatterd clouds</Typography>
                                    </CardContent>
                                </CityCard>
                            </Grid>
                            <Grid item>
                                <FButton>Add to Favorites</FButton>
                            </Grid>
                        </FGContainer>
                        <FContainer>
                            <FTypografy>Scatterd clouds</FTypografy>
                        </FContainer>
                        <Grid container justify='space-around' >
                            {[0, 1, 2, 3, 4].map(value => (
                                <Grid key={value} item><ItemCard></ItemCard></Grid>
                            ))}
                        </Grid>
                    </FSGPaper>
                </FSGContainer>
            </React.Fragment>

        )
    }
}

export default Home