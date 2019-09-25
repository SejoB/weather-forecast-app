import { withStyles } from '@material-ui/core/styles'

import DeleteIcon from '@material-ui/icons/Delete';
import  Typography from '@material-ui/core/Typography'
import  Grid from '@material-ui/core/Grid'
import  Paper from '@material-ui/core/Paper'
import  Container from '@material-ui/core/Container'
import  Card from '@material-ui/core/Card'


export const FDIcon = withStyles({
    root: {
        cursor: 'pointer'
    }
})(DeleteIcon)
export const FContainer = withStyles({
    root: {
        display: 'flex',
        maxWidth: '38rem'
    }
})(Container)
export const ItemCard = withStyles({
    root: {
        height: '3rem',
        width: '20rem',
        margin: '1rem 0 1rem 0',
        padding: '1rem',
    }
})(Card)
export const FTypography = withStyles({
    root: {
        fontSize: '2rem',
        color: 'darkgrey',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
    }
})(Typography)
export const FGrid = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '85vh',
        flexWrap: 'nowrap',
        padding: '0 2rem 0 2rem',
        overflow: 'overlay'
    }
})(Grid)
export const FPaper = withStyles({
    root: {
        marginTop: '1rem'
    }
})(Paper)