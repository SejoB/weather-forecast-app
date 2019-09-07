import React from 'react'
import { styled } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'


const HContainer = styled(AppBar)({
    background: 'white',
    position: 'static',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.12)'
})
const HTitle = styled(Typography)({
    color: 'grey',
    fontWeight: 600,
    flexGrow: 1,
    whiteSpace: 'nowrap'
})
const HButton = styled(Button)({
    color: 'grey',
    marginLeft: '5px'
    
})



const Header = () => {
    
  return  <Grid container>
      <HContainer>
            <Toolbar>
                <HTitle>Forecast Application</HTitle>
                <HButton to='/'>HOME</HButton>
                <HButton to='/favorites'>FAVORITES</HButton>
                {/* <HButton xs={12}>Dark Theme</HButton> */}
            </Toolbar>
          </HContainer>
          </Grid>
}

export default Header