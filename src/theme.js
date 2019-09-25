import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
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