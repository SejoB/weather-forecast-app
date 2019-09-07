import React from 'react'
import { styled } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'


const HContainer = styled(AppBar)({
    background: 'white',
    borderEndEndRadius: 3,
    flexGrow: 1,
    position: 'static',
    boxShadow: ' 0px 2px 1px -1px rgba(0,0,0,0.12)'
})
const HTitle = styled(Typography)({
    color: 'grey',
    fontWeight: 600,
    flexGrow: 1
})
const HButton = styled(Button)({
    color: 'grey',
    
})



const Header = () => {
    
  return  <HContainer>
            <Toolbar>
                <HTitle>Forecast Application</HTitle>
                <HButton to='/'>HOME</HButton>
                <HButton to='/favorites'>FAVORITES</HButton>
                <HButton>Dark Theme</HButton>
            </Toolbar>
          </HContainer>
}

export default Header