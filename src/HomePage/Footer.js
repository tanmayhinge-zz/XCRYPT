import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AndroidIcon from '@material-ui/icons/Android';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';

export default () => {
    return(
        <div>
        <Tooltip title="GitHub"  style={{margin:"10px"}}>
                <IconButton
                  aria-label="android app"
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
        </Tooltip>
        <Tooltip title="Android App"  style={{margin:"10px"}}>
                <IconButton
                  aria-label="android app"
                  aria-controls="menu-appbar"
                  color="inherit"
                >
                  <a
                    href="https://github.com/tanmayhinge"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: 'inherit', textDecoration: 'none', height: 24 }}
                  >
                    <AndroidIcon />
                  </a>
                </IconButton>
        </Tooltip>
      </div>
    )   
};