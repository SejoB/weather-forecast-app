import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header/Header'
import Home from './Home/Home'
import Favorites from './Favorites/Favorites'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} title='Home' />
                    <Route path='/favorites' component={Favorites} title='Favorites' />
                    <Route exact path='/' component={Home} />
                </Switch>
            </React.Fragment>
        )
    }
}
export default App
