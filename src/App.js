import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import './App.css';
import HomePage from './components/HomeActivity';
import GoogleAuth from './DataHandler/Auth';
import MainApp from './components/MainActivity';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#145ea8',
    },
    secondary: {
      main: '#ef6c00',
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1520,
    },
  },
  typography: {
    fontFamily: [
      'Work Sans',
    ].join(','),
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, toast: '' };
    this.authHandler = new GoogleAuth();
  }

  componentDidMount = () => {
    this.authHandler.onSignInWithGoogle(
      (user) => {
        this.setState({ user });
      },
      (error) => {
       // console.log(error);
        if (error.error && error.error === 'access_denied') {
          this.setState({ toast: 'App cannot proceed since permission to access drive has been denied' });
          return;
        }
        if (error.details && error.details.includes('Cookies')) {
          this.setState({ toast: 'Cookies are disabled. Google Sign In will not work.' });
        }
      },
    );
  }

  render() {
    const { user } = this.state;

    let screen = <MainApp authHandler={this.authHandler} />;
    if (!user) {
      screen = <HomePage authHandler={this.authHandler} />;
    }
    return (
      <>
        {screen}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={Boolean(this.state.toast)}
          autoHideDuration={5000}
          message={this.state.toast}
          onClose={() => { this.setState({ toast: '' }); }}
          key={this.state.toast}
        />
      </>
    );
  }
}

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
