import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './HomePage.css';
import Footer from './Footer';

const FeatureItem = ({ header, content }) => (
  
  <div className="item">
    <Typography variant="h6" style={{fontWeight:"bold", textDecoration:"underline"}}>{header}</Typography>
    <Typography
      variant="body1"
      color="textPrimary"
      align="justify"
      style={{ textAlignLast: 'center' }}
    >
      {content}
    </Typography>
  </div>
);

const featureItems = [


];
  
export default class HomePage extends React.Component {

  handleGoogleSignIn = () => {
    this.props.authHandler.signInWithGoogle();
  }

  render() {
    return (
      <div id="#home">
        <div className="background"><img src="./assets/background.svg" alt="background" /></div>
        <Paper className="container" elevation={2}>
          <div className="landing">
            <img src="./assets/logo.png" alt="hello" width="100%" style={{ maxWidth: 250 }} />

            <Typography
              color="textSecondary"
              variant="body2"
              align="center"
              gutterBottom
            >
              ONE PLACE TO MANAGE ALL YOUR CREDENTIALS
            </Typography>
            

            <div className="google-btn" onClick={this.handleGoogleSignIn}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google-icon"
                />
              </div>
              <p className="btn-text" ><b>Sign In with Google</b></p>
            </div>
          </div>
          <div className="heavyTopMargin footer">
            <Footer />
          </div>
        </Paper>
      </div>
    );
  }
}
