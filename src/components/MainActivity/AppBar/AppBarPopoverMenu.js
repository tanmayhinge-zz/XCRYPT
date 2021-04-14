import React from 'react';

import Popover from '@material-ui/core/Popover';
import CardHeader from '@material-ui/core/CardHeader';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import AndroidIcon from '@material-ui/icons/Android';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import LogoutIcon from '@material-ui/icons/ExitToApp';

import ApiHandlerContext from '../provider/ApiHandlerContext';
import AboutDialog from './AboutDialog';

export default ({
  anchorEl, user, handlePopoverClose, mobileToggleClass,
}) => {
  const { authHandler } = React.useContext(ApiHandlerContext);
  const [aboutOpen, toggleAboutOpen] = React.useReducer(
    (val) => !val,
    false,
  );
  return (
    
    <>
      <Popover
        id="mouse-over-popover"
        open={anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >

        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={user.getImageUrl()} />
                }
          title={user.getName()}
          subheader={user.getEmail()}
        />

        //github
        <a
          href="https://github.com/tanmayhinge/XCRYPTgithub.com/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <MenuItem onClick={handlePopoverClose} className={mobileToggleClass}>
            <ListItemIcon>
              <GitHubIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Github Repo" />
          </MenuItem>
        </a>

        //android
        <a
          href="https://play.google.com/store/apps/details?id=com.tanmayhinge.xcrypt"
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <MenuItem onClick={handlePopoverClose} className={mobileToggleClass}>
            <ListItemIcon>
              <AndroidIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Android App" />
          </MenuItem>
        </a>

        <MenuItem onClick={() => { toggleAboutOpen(); handlePopoverClose(); }}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </MenuItem>

        <MenuItem onClick={authHandler.signOutFromGoogle}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>

      </Popover>
      <AboutDialog aboutOpen={aboutOpen} toggleAboutOpen={toggleAboutOpen} />
    </>
  );
};
