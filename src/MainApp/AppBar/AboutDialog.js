/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default ({ aboutOpen, toggleAboutOpen }) => (
  <Dialog fullScreen open={aboutOpen} onClose={toggleAboutOpen} TransitionComponent={Transition}>
    <Toolbar>
      <Typography variant="h5" style={{ textAlign: 'center', flexGrow: 1, marginLeft: 48 }}>
        <b>About</b>
      </Typography>
      <IconButton edge="end" color="inherit" onClick={toggleAboutOpen} aria-label="close">
        <CloseIcon />
      </IconButton>
    </Toolbar>
    <div className="container">

      <img
        alt="logo"
        align="center"
        src={"./assets/logo.png"}
        style={{
          maxWidth: 380, width: '100%', display: 'block', margin: 'auto',
        }}
      />
      <Typography gutterBottom style={{ marginTop: 48 }}>
        XCRYPT is a web app that can be used to store your passwords and manage all your social accounts in one place. 
        XCRYPT encrypts and stores your all your data on your own Google Drive so no one else has the access to it.
        And this data is only visible when decrypted using the Master Password which is set by you.
    
      </Typography>

      <Typography variant="h5" gutterBottom style={{ marginTop: 48 }}></Typography>
      <Typography gutterBottom>
        Also, the Google Drive doesn't consume much of your Drive Space, just a few kilobytes.
      </Typography>
      <Typography gutterBottom>
        The Google Sheet is accessed using the Google API. The only data stored by XCRYPT is your Google Login Session detail.. that too temporarily
      </Typography>
    </div>
  </Dialog>
);
