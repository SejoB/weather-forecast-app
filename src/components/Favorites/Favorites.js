import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


import Grid from '@material-ui/core/Grid'
import { FContainer, ItemCard, FTypography, FPaper, FGrid, FDIcon } from './Favorites.styles'


class Favorites extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        this.getFavoritesList()
    }
    getFavoritesList = () => {
        const fav = { ...localStorage }
        const items = Object.entries(fav)
        this.setState({
            favorites: items
        })
    }
    deleteFavoriteHandler = (value) => {
        localStorage.removeItem(value)
        const fav = { ...localStorage }
        const items = Object.entries(fav)
        this.setState({
            favorites: items
        })
    }
    loadFavoriteCityHandler = (value) => {
        const [city, key] = value
        this.props.loadFavorites(city, key)
        this.props.history.push('/')
    }

    render() {
        const favorites = this.state.favorites
        return (
        <FContainer>
            <FPaper>
                <FGrid container>
                    {favorites.map((value, key) => (
                        <Grid item key={key}>
                            <ItemCard>
                                <FTypography onClick={() => this.loadFavoriteCityHandler(value)} >{value[0]}<FDIcon onClick={() => this.deleteFavoriteHandler(value[0])} /></FTypography>
                            </ItemCard>
                        </Grid>
                    ))}
                </FGrid>
            </FPaper>
        </FContainer>

        )
    }
}
export default withRouter(Favorites)