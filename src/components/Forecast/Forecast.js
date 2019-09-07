import React, { Component } from 'react'

import { FSButton, FSContainer, FSInput, FSGContainer, ItemPaper, CityCard, FSGPaper, FSPaper, FGContainer, FButton, FTypografy, FContainer, } from './Forecast.styles'
import { Grid, Typography, CardContent } from '@material-ui/core'




class Forecast extends Component {


    render() {
        return (
            <React.Fragment>
                <FSContainer>
                    <FSPaper>
                        <FSInput placeholder='Enter City' />
                        <FSButton>Search</FSButton>
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
                                <Grid key={value}><ItemPaper /></Grid>
                            ))}
                        </Grid>
                    </FSGPaper>
                </FSGContainer>
            </React.Fragment>

        )
    }
}

export default Forecast