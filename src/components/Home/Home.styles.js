import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ToggleButton from '@material-ui/lab/ToggleButton'

export const ForecastContainer = withStyles( {
    root: {
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 0 2rem',
        borderRadius: '25px',
        border: '1px solid #526984',
        alignItems: 'center',
        '@media (max-width: 670px)': {
            border: 'none',
            maxWidth: '100%',
            height: '100%'
        }
    }
} )( Container )
export const OneDayGridContainer = withStyles( {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '16.875rem',
        padding: '0 1.6rem 2rem',
        '@media (max-width: 670px)': {
            width: '100%',
            padding: '0 1rem'
        }
    }
} )( Grid )
export const OneDayWidget = withStyles( {
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '42%',
        padding: '10px 20px',
        borderRadius: '25px',
        border: '1px solid #526984',
        '@media (max-width: 670px)': {
            width: '100%'
        }
    }
} )( Grid )
export const OneDayCityFavBtnGrid = withStyles( {
    root: {
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        display: 'flex'
    }
} )( Grid )
export const OneDayTempIcnGrid = withStyles( {
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
} )( Grid )
export const TypographyCity = withStyles( {
    root: {
        fontSize: '2rem',
        color: 'white',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    }
} )( Typography )
export const TypographyDate = withStyles( {
    root: {
        fontSize: '1.5rem',
        color: 'white',
        fontWeight: 100
    }
} )( Typography )
export const TypographyTemp = withStyles( {
    root: {
        display: 'inline-flex',
        fontSize: '5.5rem',
        alignItems: 'center',
        color: 'white',
        fontWeight: 100
    }
} )( Typography )
export const ToggleFahrCel = withStyles( {
    root: {
        fontSize: '1.3rem',
        fontWeight: 300,
        color: 'grey'
    }
} )( ToggleButton )
export const AvatarIcon = withStyles( {
    root: {
        alignSelf: 'center'
    }
} )( Avatar )
export const FButton = withStyles( {
    root: {
        whiteSpace: 'nowrap',
        color: 'white',
        borderRadius: '10px',
        border: '1px solid #526984',
        '@media (max-width: 670px)': {
            display: 'none'
        }
    }
} )( Button )
export const FIcon = withStyles( {
    root: {
        display: 'none',
        '@media (max-width: 670px)': {
            display: 'inline-block',
            fontSize: '2.5rem'
        }
    }
} )( FavoriteIcon )
export const FTypography = withStyles( {
    root: {
        fontSize: '2rem',
        display: 'flex',
        fontFamily: 'inherit',
        alignItems: 'center',
        color: 'white',
        justifyContent: 'flex-end'
    }
} )( Typography )
export const FiveDayGridCont = withStyles( {
    root: {
        justifyContent: 'space-evenly',
        display: 'flex',
        marginTop: '3rem',
        flexWrap: 'nowrap',
        '@media (max-width: 670px)': {
            flexDirection: 'column',
            overflow: 'scroll',
            height: '50vh',
            flexWrap: 'inherit',
            justifyContent: 'flex-start',
            marginTop: '1rem',
            padding: '0 1rem'
        }
    }
} )( Grid )

export const FiveDayGridItem = withStyles( {
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        minWidth: '9rem',
        borderRadius: '25px',
        border: '1px solid #526984',
        '@media (max-width: 670px)': {
            marginBottom: '1rem'
        }
    }
} )( Grid )
export const FiveDayGrid = withStyles( {
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    }
} )( Grid )
export const TypographyDay = withStyles( {
    root: {
        fontWeight: 500,
        color: 'white',
        alignSelf: 'center',
        fontSize: '2rem'
    }
} )( Typography )
export const TypographyMin = withStyles( {
    root: {
        fontWeight: 400,
        color: 'white',
        alignSelf: 'center',
        fontSize: '1.5rem'
    }
} )( Typography )
export const TypographyMax = withStyles( {
    root: {
        fontWeight: 400,
        color: 'white',
        alignSelf: 'center',
        fontSize: '1.5rem'
    }
} )( Typography )
