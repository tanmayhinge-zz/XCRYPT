import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from './AppBar';
import DrawerContent from './DrawerContent';
import CategoryItems from './CategoryItems';
import AccountDialog, { Mode } from './AccountDialog';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    color: '#fcfcfc',
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  logoImg: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: 200,
      marginTop: 4,
    },
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      right: theme.spacing(2),
      bottom: theme.spacing(2),
    },
    color: theme.palette.common.white,
  },
}));

export default (props) => {
  const { window } = props;
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(-1); // -1 = all accounts

  const appBar = (
    <AppBar className={classes.appBar}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => { setMobileOpen(true); }}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <div className={classes.title}>

        <img src="./assets/Logo.svg" alt="logo" className={classes.logoImg} />
      </div>
    </AppBar>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = (
    <DrawerContent
      marginClassName={classes.toolbar}
      selectedCategoryIndex={selectedCategoryIndex}
      setSelectedCategoryIndex={setSelectedCategoryIndex}
      handleDrawerToggle={() => { setMobileOpen(false); }}
    />
  );

  const navigation = (
    <nav className={classes.drawer} aria-label="categories">
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => { setMobileOpen(false); }}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {appBar}
      {navigation}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CategoryItems
          selectedCategoryIndex={selectedCategoryIndex}
          setSelectedCategoryIndex={setSelectedCategoryIndex}
        />
      </main>
      {/* FAB to add a new account along with the account
        * dialog with mode set to new account */}
      <Fab aria-label="Add" className={classes.fab} color="primary" onClick={() => setDialogOpen(true)}>
        <AddCircleOutlineIcon />
      </Fab>
      <AccountDialog {...{ dialogOpen, setDialogOpen }} mode={Mode.NEW_ACCOUNT} />
    </div>
  );
};
