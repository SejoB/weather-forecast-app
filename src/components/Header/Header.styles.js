import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'





export const AppContainer = withStyles({
    root: {
        background: 'white',
        position: 'static',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.12)'
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