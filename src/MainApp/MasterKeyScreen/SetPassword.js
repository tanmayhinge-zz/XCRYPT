import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';

import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';

export default ({
  database, onPasswordLoaded, email,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const [dialogContentIdx, setDialogContentIdx] = React.useState(0);

  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [showPassword, toggleShowPassword] = React.useReducer((val) => !val, false);

  const [retypedPassword, setRetypedPassword] = React.useState('');
  const [showRetypedPassword, toggleShowRetypedPassword] = React.useReducer((val) => !val, false);

  const [enabled, toggleEnabled] = React.useReducer((val) => !val, true);

  const setMasterPassword = async () => {
    if (password !== retypedPassword) {
      setErrorMessage('Passwords Do Not Match');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Passwords must be atleast 8 characters long');
      return;
    }

    setErrorMessage('');
    toggleEnabled();
    const usersEmail = email;
    // state to loading
    onPasswordLoaded('loading');

    database.initialize(password).then(async () => {

      // Create a master password entry as well? Probable unnecessary feature update?


      // await database.insertAccount({
      //   name: 'App',
      //   category: 'other',
      //   note: 'just a file making sure you have google account connected to password manager app',
      //   field1: `Gmail - ${usersEmail}`,

      // });
      
      // password loaded
      onPasswordLoaded();
    }).catch((err) => {
      console.log(err);
      toggleEnabled();
      setErrorMessage('Error encrypting Password. Try again later');
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const driveFolderDialogContent = (
    <>
      <DialogTitle align="center">About Drive Folder</DialogTitle>
      <DialogContent>
        <Typography variant="body2" align="justify">
          A Google Drive Folder and a Goolge Sheet has been created in your Google Drive where all your passwords will be stored in encrypted format... So your data is secured and with you 😃. 
          Do not delete that folder from your Drive, or you will lose all the passwords from this app.
        </Typography>
      </DialogContent>
      <DialogActions style={{ paddingRight: '24px' }}>
        <Button onClick={() => { setDialogContentIdx(1); }} color="primary">
          Next
        </Button>
      </DialogActions>
    </>
  );

  const rememberPasswordDialogContent = (
    <>
      <DialogTitle align="center">Note</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Now let's setup your master password, please remember the master password.
          You need to remember this password since it cannot be reset or recovered.
        </Typography>
      </DialogContent>
      <DialogActions style={{ paddingRight: '24px' }}>
        <Button onClick={() => { setDialogContentIdx(2); }} color="primary">
          Next
        </Button>
      </DialogActions>
    </>
  );
  const passwordDialogContent = (
    <>
      <DialogTitle id="responsive-dialog-title" align="center">Set Password</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="textSecondary">
          Set master password, it will also act as the key for encryptoin
        </Typography>
        <FormControl error={Boolean(errorMessage)} size="small" fullWidth variant="outlined" style={{ marginTop: 20 }}>
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
            disabled={!enabled}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
            label="Password"
          />
          <FormHelperText id="helper">{errorMessage}</FormHelperText>
        </FormControl>

        <FormControl fullWidth variant="outlined" size="small" style={{ marginTop: 16 }}>
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="password"
            value={retypedPassword}
            onChange={(e) => { setRetypedPassword(e.target.value); }}
            disabled={!enabled}
            label="Re-enter Password"
          />
        </FormControl>
      </DialogContent>
      <DialogActions style={{ paddingRight: '24px' }}>
        <Button onClick={setMasterPassword} disabled={!enabled && password.length > 0} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </>
  );
  const contentArray = [
    driveFolderDialogContent,
    rememberPasswordDialogContent,
    passwordDialogContent,
  ];
  return (
    <Dialog
      open
      fullWidth
      disableBackdropClick
      disableEscapeKeyDown
      fullScreen={fullScreen}
    >
      {contentArray[dialogContentIdx]}
    </Dialog>
  );
};