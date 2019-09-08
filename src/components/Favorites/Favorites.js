import React from 'react'


import { Grid, Paper } from '@material-ui/core'

import ItemCard from './Favorites.styles'



const Favorites = () => {


    return <div>
        <Paper>
            <Grid container justify='space-around' >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => (
                    <Grid item key={value}><ItemCard></ItemCard></Grid>
                ))}
            </Grid>
        </Paper>

    </div>
}

export default Favorites