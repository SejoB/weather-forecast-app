import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadFavoritesList, deleteFavoritesCity, loadFavoritesCity } from './Favorites.actions'
import Grid from '@material-ui/core/Grid'
import { FContainer, ItemCard, FTypography, FPaper, FGrid, FDIcon } from './Favorites.styles'


class Favorites extends Component {

    componentDidMount() {
        this.props.doLoadFavoritesList()
    }
    getFavoriteCityHandler = (value) => {
        this.props.doLoadFavoritesCity(value)
        this.props.history.push('/')
    }
    deleteFavoritesHandler = (value) => {
        const arr = this.props.favorites
        this.props.doDeleteFavoritesCity(value)
        if (arr.length <= 1) {
            this.props.history.push('/')
        }
    }
    render() {
        const favorites = this.props.favorites
        return (
            <FContainer>
                <FPaper>
                    <FGrid container>
                        {favorites.map((value, key) => (
                            <Grid item key={key}>
                                <ItemCard>
                                    <FTypography onClick={() => this.getFavoriteCityHandler(value)}>{value[0]}</FTypography>
                                    <FDIcon onClick={() => this.deleteFavoritesHandler(value[0])} />
                                </ItemCard>
                            </Grid>
                        ))}
                    </FGrid>
                </FPaper>
            </FContainer>

        )
    }
}
const mapStateToProps = state => {
    const {
        favorites
    } = state.favorite
    return {
        favorites

    }
}
const mapDispatchToProps = dispatch => {
    return {
        doLoadFavoritesList: () => dispatch(loadFavoritesList()),
        doDeleteFavoritesCity: (value) => dispatch(deleteFavoritesCity(value)),
        doLoadFavoritesCity: (value) => dispatch(loadFavoritesCity(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
