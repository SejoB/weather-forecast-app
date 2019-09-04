import React from 'react';
import Header from './../ForecastContainer/Header'
import { ThemeProvider } from '@material-ui/styles'
import { useTheme, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
function App() {
  
  return (

    <ThemeProvider theme={theme}>
        <Header/>
    </ThemeProvider>
  );
}

export default App;
