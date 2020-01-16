import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './components/App'
import theme from '../src/theme/theme'

class Root extends Component {
    render () {
        const themeMode = this.props.themeMode
        const darkTheme = createMuiTheme( {
            ...theme,
            overrides: {
                MuiCssBaseline: {
                    '@global': {
                        html: {
                            height: '100%',
                            width: '100%',
                            fontSize: '10px',
                            '@media (min-width:670px)': {
                                fontSize: '10px'
                            },
                            '@media (min-width:770px)': {
                                fontSize: '12px'
                            },
                            '@media (min-width:960px)': {
                                fontSize: '14px'
                            },
                            '@media (min-width:1280px)': {
                                fontSize: '16px'
                            },
                            '@media (min-width:1920px)': {
                                fontSize: '18px'
                            }
                        },
                        body: {
                            height: '100%',
                            width: '100%',
                            backgroundImage: themeMode.backGround,
                            overflow: 'hidden'
                        }
                    }
                }
            },
            palette: {
                type: themeMode.mode
            }
        } )
        return (
            <Provider store={ this.props.store }>
                <HashRouter>
                    <MuiThemeProvider theme={ darkTheme }>
                        <CssBaseline />
                        <App />
                    </MuiThemeProvider>
                </HashRouter>
            </Provider>
        )
    }
}
const mapStateToProps = state => {
    const { themeMode } = state.theme
    return {
        themeMode
    }
}
export default connect( mapStateToProps, null )( Root )
