import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent  from '@material-ui/core/CardContent'


export const FSContainer = styled(Container)({
    display: 'flex',
    marginTop: '1.25rem',
    justifyContent: 'center',
    marginBottom: '1.25rem',
    minWidth: '20rem',
})
export const FSPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    width: '30rem',
    boxShadow: 'none'
})
// export const FSInput = styled(Input)({
//     paddingLeft: '1.6rem',
// })
// export const FSButton = styled(Button)({
//     color: 'grey',
//     boxShadow: 'inset 1px 4px 20px 0px rgba(0, 0, 0, 0.14)',
//     borderRadius: '0px'
// })


export const FSGContainer = styled(Container)({
    maxWidth: '60rem',
    minWidth: '22rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
})
export const FSGPaper = styled(Paper)({
    padding: '1rem'
})
export const FGContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'space-between'
})
export const OneDayCard = styled(Card)({
    minWidth: '15.625rem'
})
export const OneDayContent = styled(CardContent)({
    minWidth: '15.625rem'
})
export const TypographyCity = styled(Typography)({
    fontSize: '1.5rem',
    color: 'darkgrey',
    fontWeight: 500
})
export const TypographyDate = styled(Typography)({
    fontSize: '1rem',
    color: 'grey',
    fontWeight: 300
})
export const TypographyTemp = styled(Typography)({
    display: 'flex',
    fontSize: '4rem',
    margin: '0 0.3125rem 0 0',
    justifyContent: 'flex-end',
    // color: 'darkslategray'
})


export const FButton = styled(Button)({
    height: '2.2rem',
    marginTop: '1.25rem',
    whiteSpace: 'nowrap',
    color: 'grey',
    boxShadow: 'inset 1px 4px 20px 0px rgba(0, 0, 0, 0.14)',
})


export const FContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.625rem'
})
export const FTypografy = styled(Typography)({
    fontSize: '3rem',
    display: 'inline-block',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
    marginTop: '0.08125rem'
})


export const FiveDayGrid = styled(Grid)({
    justifyContent: 'space-around'
    // change to display block
})
export const FiveDayContent = styled(CardContent)({
    display: 'flex',
    justifyContent: 'space-around'
    
})
export const TypographyDay = styled(Typography)({
    display: 'flex'
})
export const TypographyMinMax = styled(Typography)({
    display: 'flex'
    
})