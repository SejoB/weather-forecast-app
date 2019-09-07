import { styled } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


export const HContainer = styled(AppBar)({
    background: 'white',
    position: 'static',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.12)'
})
export const HTitle = styled(Typography)({
    color: 'grey',
    fontWeight: 600,
    flexGrow: 1,
    whiteSpace: 'nowrap'
})
export const HButton = styled(Button)({
    color: 'grey',
    marginLeft: '5px',
    textDecoration: 'none'
})