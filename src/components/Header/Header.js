import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { AppContainer, HTitle, HButton, ThemeIcon, ThemeButton} from './Header.styles'
import Toolbar from '@material-ui/core/Toolbar'

import { changeTheme } from '../../theme/theme.reducer'

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

class Header extends Component {
    state = {
        selected: false,
    }
    changeThemeHandler = () => {
        let selected = this.state.selected
        if (!selected) {
            this.props.doChangeTheme(selected)
            this.setState({
                selected: true
            })
        } else {
            this.props.doChangeTheme(selected)
            this.setState({
                selected: false,
            })
        }
    }
    render() {
        const { selected } = this.state
        return (
            <AppContainer>
                <Toolbar>
                    <HTitle>Forecast Application</HTitle>
                    <HButton to='/' component={AdapterLink}>HOME</HButton>
                    <HButton to='/favorites' component={AdapterLink}>FAVORITES</HButton>
                    <ThemeButton value='ThemeIcon'
                        onChange={this.changeThemeHandler}
                        selected={selected}
                    >
                        <ThemeIcon />
                    </ThemeButton>
                </Toolbar>
            </AppContainer>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doChangeTheme: (selected) => dispatch(changeTheme(selected)),
    }
}
export default connect(null, mapDispatchToProps)(Header)