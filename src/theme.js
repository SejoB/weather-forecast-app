import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    root: {
      '&:label.Mui-focused': {
        color: 'green',
      }
    }
  }
})

// export default createMuiTheme