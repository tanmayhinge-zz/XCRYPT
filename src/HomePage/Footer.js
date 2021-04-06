import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AndroidIcon from '@material-ui/icons/Android';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';

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

export default ({ className, children }) => {
    const classes = useStyles();
    return(
        <>
        <a href="https://github.com/" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
          <GitHubIcon className="fa" color="action" fontSize="small" />
        </a>
        <a href="https://github.com/" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
          <AndroidIcon className="fa" color="action" fontSize="small" />
        </a>
      </>
    )   
};