import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'


export const FSContainer = styled(Container)({
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'center',
    marginBottom: '20px',
    minWidth: '360px'
})
export const FSButton = styled(Button)({
    color: 'grey',
    boxShadow: 'inset 1px 4px 20px 0px rgba(0, 0, 0, 0.14)',
    borderRadius: '0px'
})
export const FSPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    boxShadow: 'none'
})
export const FSInput = styled(Input)({
    paddingLeft: '10px',
    '&:underline:after':{
    borderBottomColor: 'none'}
})
export const FSGContainer = styled(Container)({
    maxWidth: '700px',
    minWidth: '360px',
})
export const ItemCard = styled(Card)({
    height: '100px',
    width: '100px',
    margin: '15px 0 15px 0'
})
export const CityCard = styled(Card)({
    width: '100px',
    height: '100px',
    margin: '20px',
})
export const FSGPaper = styled(Paper)({
    padding: '15px'
})
export const FGContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap'
})
export const FButton = styled(Button)({
    height: '35px',
    marginTop: '20px',
    whiteSpace: 'nowrap',
    color: 'grey',
    boxShadow: 'inset 1px 4px 20px 0px rgba(0, 0, 0, 0.14)',
})
export const FTypografy = styled(Typography)({
    fontSize: '3rem',
    display: 'inline-block',
    fontFamily: 'Oxygen',
    whiteSpace: 'nowrap'
})
export const FContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px'
})