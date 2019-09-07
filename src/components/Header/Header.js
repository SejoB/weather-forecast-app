import React from 'react'
import { HContainer, HTitle, HButton } from './Header.styles'
import Toolbar from '@material-ui/core/Toolbar'



const Header = () => {

    return  <HContainer>
                <Toolbar>
                    <HTitle>Forecast Application</HTitle>
                    <HButton to='/'>HOME</HButton>
                    <HButton to='/favorites'>FAVORITES</HButton>
                    {/* <HButton xs={12}>Dark Theme</HButton> */}
                </Toolbar>
            </HContainer>
}

export default Header