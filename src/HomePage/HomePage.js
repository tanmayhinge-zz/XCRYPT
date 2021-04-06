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

  {
    header: 'Privacy First',
    content: 'XCRYPT has no server 😉 All data is saved to your own Google Drive inside a Google Sheet, so it doesn\'t use much space.',
  },
  {
    header: 'One master password, for all of it',
    content: 'Just remember one master password which will be used to unlock XCRYPT and let it handle the rest',
  },
  {
    header: 'Advanced Encryption',
    content: 'All passwords are encrypted using AES-256, an algorithm that takes "27 trillion trillion trillion trillion trillion years" for an advanced computer to crack',
  },
  {
    header: 'Open Sourced, but safely',
    content: 'The encryption is private for security purposes, but 70% of the app is opsn-sounsr',
  },
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
            <img src="./assets/Logo.svg" alt="hello" width="100%" style={{ maxWidth: 450 }} />

            <Typography
              color="textSecondary"
              variant="body2"
              align="center"
              gutterBottom
            >
              An app to manage all your passwords, securely with no central database!
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
          <div className="landing heavyTopMargin">
            <Typography variant="h5">Features</Typography>
            <div className="featuregrid">
              {featureItems.map((item) => (
                <FeatureItem {...item} />
              ))}
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
