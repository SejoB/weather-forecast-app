import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            root: {
                border: 'none',
                boxShadow: 'none'
            },
            colorPrimary: {
                backgroundColor: 'transparent'
            }
        },
        MuiCardContent: {
            root: {
                borderBottomColor: 'none',
                '&:last-child': {
                    padding: '1rem !important'
                }
            }
        }
    }
})
export const asyncStyles = {
    container: provided => ({
        ...provided,
        display: 'flex',
        margin: '1.25rem 0',
        width: '30rem'
    }),
    control: provided => ({
        ...provided,
        width: '100%',
        backgroundColor: 'transparent',
        border: '1px solid #526984',
        borderRadius: '10px'
    }),
    placeholder: provided => ({
        ...provided,
        fontSize: '1.2rem'
    }),
    menu: provided => ({
        ...provided,
        fontSize: '1.2rem',
        color: '#808080',
        backgroundColor: 'transparent',
        fontWeight: 500
    }),
    input: provided => ({
        ...provided,
        fontSize: '1rem',
        color: '#808080'
    }),
    singleValue: provided => ({
        ...provided,
        color: '#808080',
        fontSize: '1.2rem'
    })
}
export default theme
