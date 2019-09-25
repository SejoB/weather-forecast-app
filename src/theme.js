import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  // palette: {
  //   type: 'dark',
  //   // type: 'light'
  // },
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

// export default createMuiTheme