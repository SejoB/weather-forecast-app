import React, { Component } from 'react'

import { FSButton, FSContainer,  FSInput, FSGContainer, ItemCard, CityCard, FSGPaper, FSPaper, FGContainer, FButton, FTypografy, FContainer, } from './Home.styles'
import { Grid, Typography, CardContent } from '@material-ui/core'
import SerchBar from './../SearchBar'



class Home extends Component {

    state = {
        FiveDaysForecast: '',
        OneDayForecast: ''
    }


    render() {
        return (
            <React.Fragment>
                <FSContainer>
                    <FSPaper>
                        <SerchBar/>
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