import { createMuiTheme } from "@material-ui/core/styles";

const createMuiTheme = () => ({
  overrides: {
    MuiTypography: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    }
  }
})

export default createMuiTheme