import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import AndroidIcon from '@material-ui/icons/Android';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

import AppBarPopoverMenu from './AppBarPopoverMenu';
import ApiHandlerContext from '../provider/ApiHandlerContext';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
    verticalAlign: 'bottom',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

// Customized app bar with menu items
export default ({ className, children }) => {
  const classes = useStyles();

  // Get user's profile details
  const { authHandler } = React.useContext(ApiHandlerContext);
  const user = authHandler.getUser();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" className={className} style={{ background: '#424242' }}>
        <Toolbar>
          {children}

          {/* // github */}
          <Tooltip title="Github Repo Link" className={classes.sectionDesktop}>
            <IconButton
              aria-label="github repo"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <a
                href="https://github.com/tanmayhinge/XCRYPT"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none', height: 24 }}
              >
                <GitHubIcon />
              </a>
            </IconButton>
            {/* // android */}
          </Tooltip>


          <Tooltip title="Android App" className={classes.sectionDesktop}>
            <IconButton
              aria-label="android app"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.tanmayhinge.xcrypt"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none', height: 24 }}
              >
                <AndroidIcon />
              </a>
            </IconButton>
          </Tooltip>

          <Tooltip title="Menu">
            <IconButton
              aria-label="about"
              aria-controls="menu-appbar"
              color="inherit"
              aria-owns={anchorEl ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onClick={handlePopoverOpen}
            >
              <Avatar className={classes.small} src={user.getImageUrl()} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <AppBarPopoverMenu
        {...{ user, handlePopoverClose, anchorEl }}
        mobileToggleClass={classes.sectionMobile}
      />

    </>
  );
};
