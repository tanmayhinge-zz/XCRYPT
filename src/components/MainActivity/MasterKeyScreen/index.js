import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import VerifyPassword from './VerifyPassword';

const SetPassword = React.lazy(() => import('./SetPassword'));

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    flexDirection: 'column',
  },
  text: {
    margin: 20,
  },
  actions: {
    position: 'fixed',
    bottom: theme.spacing(2),
    textAlign: 'center',
    color: '#e0e0e0',
  },
}));

export default (props) => {
  const {
    action, message, database, onPasswordLoaded, email, authHandler,
  } = props;
  const classes = useStyles();

  let content = (
    <>
      <CircularProgress color="inherit" />
      <Typography variant="body" className={classes.text}>{ message }</Typography>
      {email
        ? (
          <div className={classes.actions}>
            <Typography variant="body2" style={{ margin: 8 }}>
              Welcome, 
              {' '}
              { email }
            </Typography>
          </div>
        )
        : null}
    </>
  );

  // if action is one of 'verify' or 'add' we set content to SetPassword or VerifyPassword
  if (action === 'verify') {
    content = <VerifyPassword database={database} onPasswordLoaded={onPasswordLoaded} />;
  } else if (action === 'add') {
    const loading = <CircularProgress color="inherit" />;

    content = (
      // experimental feature, maybe replace with a good alternative
      <React.Suspense fallback={loading}>
        <SetPassword database={database} onPasswordLoaded={onPasswordLoaded} email={email} />
        {' '}
      </React.Suspense>
    );
  }
  return (
    <div>
      <Backdrop className={classes.backdrop} open>
        {content}
      </Backdrop>
    </div>
  );
};
