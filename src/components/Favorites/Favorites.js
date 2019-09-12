import React from 'react'

import Grid from '@material-ui/core/Grid'
import { FContainer, ItemCard, FTypography, FPaper, FGrid, FDIcon } from './Favorites.styles'



const Favorites = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]

    return <FContainer>
                <FPaper>
                    <FGrid container>
                        {arr.map(value => (
                            <Grid item key={value}>
                                <ItemCard>
                                    <FTypography>City<FDIcon/></FTypography>
                                </ItemCard>
                            </Grid>
                        ))}
                    </FGrid>
                </FPaper>
            </FContainer>


}

export default Favorites