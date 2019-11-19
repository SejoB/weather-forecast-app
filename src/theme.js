import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiAppBar:{
      colorPrimary: {
        backgroundColor: 'transparent'
      }
    },
    MuiCardContent: {
      root: {
        borderBottomColor: 'none',
        "&:last-child": {
          padding: '1rem !important',
        }
      }
    }
  }
})
