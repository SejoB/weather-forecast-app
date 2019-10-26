import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import './index.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import App from './components/App/App'
import theme from '../src/theme'
import configureStore from './configureStore'

import {getPosition} from '../src/components/Home/Home.actions'


const store = configureStore()

store.dispatch(getPosition())

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </MuiThemeProvider>
        </HashRouter>
    </Provider>
    , document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
