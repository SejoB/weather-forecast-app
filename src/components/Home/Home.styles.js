import { withStyles } from '@material-ui/core/styles'
import theme from './../../theme/theme'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ToggleButton from '@material-ui/lab/ToggleButton'

export const SearchContainer = withStyles({
    root: {
        display: 'flex',
        marginTop: '1.25rem',
        justifyContent: 'center',
        marginBottom: '1.25rem',
    }
})(Container)
export const SearchPaper = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '30rem',
        boxShadow: 'none'
    }
})(Paper)
export const ForecastContainer = withStyles({
    root: {
        maxWidth: '60rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    }
})(Container)
export const ForecastPaper = withStyles({
    root: {
        padding: '1rem',
    }
})(Paper)
export const OneDayGridContainer = withStyles({
    root: {
        justifyContent: 'space-between',
        [theme.breakpoints.up('xs')]: {
            width: '100%'
        }
    }
})(Grid)
export const OneDayGridItem = withStyles({
    root: {
    }
})(Grid)
export const OneDayPaper = withStyles({
    root: {
        padding: '0.5rem 1rem',
        minWidth: '16.875rem',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    }
})(Paper)
export const FavoriteHiddenBtn = withStyles({
    root: {
        color: 'grey',
        borderRadius: '25px'
    }
})(Button)
export const TypographyCity = withStyles({
    root: {
        fontSize: '1.5rem',
        color: 'darkgrey',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    }
})(Typography)
export const TypographyDate = withStyles({
    root: {
        fontSize: '1rem',
        color: 'grey',
        fontWeight: 300,
    }
})(Typography)
export const TypographyTemp = withStyles({
    root: {
        display: 'inline-flex',
        fontSize: '4rem',
        alignItems: 'center'
    }
})(Typography)
export const ToggleFahrCel = withStyles({
    root: {
        fontSize: '1.3rem',
        fontWeight: 300,
        color: 'black'
    }
})(ToggleButton)
export const AvatarIcon = withStyles({
    root: {
        alignSelf: 'center'
    }
})(Avatar)
export const FButton = withStyles({
    root: {
        height: '2.2rem',
        marginTop: '1.25rem',
        whiteSpace: 'nowrap',
        color: 'grey',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
})(Button)
export const FIcon = withStyles({
    root: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'inline-block'
        }
    }
})(FavoriteIcon)
export const FTypography = withStyles({
    root: {
        fontSize: '1.5rem',
        display: 'flex',
        fontFamily: 'inherit',
        justifyContent: 'flex-end'
    }
})(Typography)
export const FiveDayGridCont = withStyles({
    root: {
        justifyContent: 'space-evenly',
        display: 'flex',
        marginTop: '3rem',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            overflow: 'scroll',
            height: '14.6875rem',
            flexWrap: 'inherit',
            justifyContent: 'flex-start',
            marginTop: '1rem'
        }
    }
})(Grid)
export const FiveDayGridItem = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '4rem'
    }
})(Grid)
export const FiveDayGrid = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})(Grid)
export const TypographyDay = withStyles({
    root: {
        fontWeight: 500,
        color: 'darkgrey',
        alignSelf: 'center'
    }
})(Typography)
export const TypographyMin = withStyles({
    root: {
        fontWeight: 400,
        color: 'darkgrey',
        alignSelf: 'center'
    }
})(Typography)
export const TypographyMax = withStyles({
    root: {
        fontWeight: 400,
        color: 'grey',
        alignSelf: 'center'
    }
})(Typography)