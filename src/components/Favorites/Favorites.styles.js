import { withStyles } from '@material-ui/core/styles'

import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'

export const FDIcon = withStyles( {
    root: {
        cursor: 'pointer',
        color: 'white'
    }
} )( DeleteIcon )
export const FGrid = withStyles( {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '85vh',
        flexWrap: 'nowrap',
        padding: '0 2rem 0 2rem',
        overflow: 'overlay'
    }
} )( Grid )
export const ItemGrid = withStyles( {
    root: {
        height: '4rem',
        width: '20rem',
        margin: '1rem 0 1rem 0',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: '1px solid #526984',
        borderRadius: '10px'
    }
} )( Card )
export const FTypography = withStyles( {
    root: {
        fontSize: '2rem',
        color: 'white',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }
} )( Typography )
