import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './components/App'
import theme from '../src/theme/theme'

class Root extends Component {
    render() {
        const themeMode = this.props.themeMode
        const darkTheme = createMuiTheme({
            ...theme,
            palette: {
                type: themeMode,
            }
        })
        return (
            <Provider store={this.props.store}>
                <HashRouter>
                    <MuiThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <App />
                    </MuiThemeProvider>
                </HashRouter>
            </Provider>
        )
    }
}
const mapStateToProps = state => {
    const { themeMode
    } = state.theme
    return {
        themeMode
    }
}
export default connect(mapStateToProps, null)(Root)
