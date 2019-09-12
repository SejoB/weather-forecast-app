import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from '../theme'
import Header from './Header/Header'
import Home from './Home/Home'
import Favorites from './Favorites/Favorites'

class App extends Component {

  
  render(){ 
  return (
          <Router>
            <MuiThemeProvider theme={theme}>
              <Header />

              <Route exact path='/' component={Home} />
              <Route path='/favorites' component={Favorites} />
            </MuiThemeProvider>
          </Router>
  )
}
}

export default App
