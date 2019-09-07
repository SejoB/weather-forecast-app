import React from 'react'
import { Link } from 'react-router-dom'
import { HContainer, HTitle, HButton } from './Header.styles'
import Toolbar from '@material-ui/core/Toolbar'

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
const Header = () => {

    return  <HContainer>
                <Toolbar>
                    <HTitle>Forecast Application</HTitle>
                    <HButton to='/' component={AdapterLink}>HOME</HButton>
                    <HButton to='/favorites' component={AdapterLink}>FAVORITES</HButton>
                </Toolbar>
            </HContainer>
}

export default Header