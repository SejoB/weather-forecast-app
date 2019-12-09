import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ToggleButton from '@material-ui/lab/ToggleButton'
import BrightnessMediumRoundedIcon from '@material-ui/icons/BrightnessMediumRounded';

export const AppContainer = withStyles({
    root: {
        position: 'static',
        boxShadow: '0px 1px 1px -1px rgba(0,0,0,0.12)'
    }
})(AppBar)
export const HTitle = withStyles({
    root: {
        color: 'grey',
        fontWeight: 600,
        flexGrow: 1,
        whiteSpace: 'nowrap'
    }
})(Typography)
export const HButton = withStyles({
    root: {
        color: 'grey',
        marginLeft: '5px',
        textDecoration: 'none',
        fontWeight: 400
    }
})(Button)
export const ThemeButton = withStyles({
    root: {
        border: 'none',
        borderRadius: '25px'
    }
})(ToggleButton)
export const ThemeIcon = withStyles({
    root: {
    }
})(BrightnessMediumRoundedIcon)