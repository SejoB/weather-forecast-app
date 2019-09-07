import React, { Component } from 'react'

import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Card, CardContent, Typography } from '@material-ui/core'


const FSContainer = styled(Container)({
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'center',
    marginBottom: '20px',
    minWidth: '360px'
})
const FSButton = styled(Button)({
    color: 'grey'
})
const FSPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    width: '400px'
})
const FSInput = styled(Input)({
    paddingLeft: '10px',
    '&:after': {
        borderBottom: 'none',
    },
    '&:focused': {
        borderBottom: 'none'
    }
})
const FSGContainer = styled(Container)({
    maxWidth: '700px',
    minWidth: '360px',
})
const ItemPaper = styled(Paper)({
    height: '100px',
    width: '100px',
    margin: '15px 0 15px 0'
})
const CityCard = styled(Card)({
    width: '100px',
    height: '100px',
    margin: '20px',
})
const FSGPaper = styled(Paper)({
    padding: '15px'
})
const FGContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap'
})
const FButton = styled(Button)({
    height: '35px',
    marginTop: '20px',
    whiteSpace: 'nowrap'
})
const FTypografy = styled(Typography)({
    fontSize: '3rem',
    display: 'inline-block',
    fontFamily: 'Oxygen',
    whiteSpace: 'nowrap'
})
const FContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px'
})


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