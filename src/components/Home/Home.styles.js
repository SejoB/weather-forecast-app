import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'

export const FSContainer = withStyles({
    root: {
        display: 'flex',
        marginTop: '1.25rem',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        minWidth: '22rem',
    }
})(Container)
export const FSPaper = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '30rem',
        boxShadow: 'none'
    }
})(Paper)


export const FSGContainer = withStyles({
    root: {
        maxWidth: '60rem',
        minWidth: '22rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    }
})(Container)
export const FSGPaper = withStyles({
    root: {
        padding: '1rem',
    }
})(Paper)
export const FGContainer = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    }
})(Grid)
export const OneDayCard = withStyles({
    root: {
        minWidth: '15.625rem',
    }
})(Card)
export const OneDayContent = withStyles({
    root: {
        minWidth: '15.625rem',
    }
})(CardContent)
export const TypographyCity = withStyles({
    root: {
        fontSize: '1.5rem',
        color: 'darkgrey',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        display: 'flex',
        fontSize: '4rem',
        margin: '0 0.3125rem 0 0',
        justifyContent: 'flex-end',
    }
})(Typography)

export const AvatarIcon = withStyles({
    root: {
        display: 'flex',
        fontSize: '4rem',
        margin: '0 0.3125rem 0 0',
        justifyContent: 'flex-end',
    }
})(Avatar)


export const FButton = withStyles({
    root: {
        height: '2.2rem',
        marginTop: '1.25rem',
        whiteSpace: 'nowrap',
        color: 'grey',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    }
})(Button)
export const FIcon = withStyles({
    root: {
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


export const FiveDayGrid = withStyles({
    root: {
        justifyContent: 'space-between',
        display: 'flex',
        marginTop: '1.5rem'
        
    }
    // change to display block
})(Grid)
export const FiveDayCard = withStyles({
    root: {
        // padding: '1rem'
    }
    // change to display block
})(Card)
export const FiveDayContent = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '4rem'
    },

})(CardContent)
export const TypographyDay = withStyles({
    root: {
        display: 'flex',
        fontWeight: 500,
        color: 'darkgrey'
        
    }
})(Typography)
export const TypographyMin = withStyles({
    root: {
        fontWeight: 400,
        color: 'darkgrey'
    }
})(Typography)
export const TypographyMax = withStyles({
    root: {
        fontWeight: 400,
        color: 'grey'
        
    }
})(Typography)