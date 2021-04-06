import React from 'react';

import './Footer.css';

import GitHubIcon from '@material-ui/icons/GitHub';

export default () => (
  <div>
    <a href="https://github.com/" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
      <GitHubIcon className="fa" color="action" fontSize="small" />
    </a>

  </div>
);