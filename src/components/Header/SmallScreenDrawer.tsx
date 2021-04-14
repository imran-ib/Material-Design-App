import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { MenuLinks } from './NavLinksData';
import Link from '../utils/Link';

const drawerWidth = 240;

interface Props {
  value: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginLeft: `auto`,
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    icon: {
      height: `50px`,
      width: `50px`,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    ListText: {
      fontFamily: `Raleway`,
      textTransform: `none`,
      fontWeight: 700,
      fontSize: `1rem`,
      minWidth: `10px`,
      marginLeft: `25px`,
      color: `#fff`,
    },
    estimate: {
      backgroundColor: `#ffba60`,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: `#0b72b9`,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

const Drawer: React.FC<Props> = ({ value }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* 
      //@ts-ignore */}
      <SwipeableDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List disablePadding>
          <ListItem
            selected={value === 0}
            button
            divider
            onClick={() => setOpen(false)}
            component={Link}
            href="/"
          >
            <ListItemText className={classes.ListText} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 1}
            button
            divider
            onClick={() => setOpen(false)}
            component={Link}
            href="/services"
          >
            <ListItemText className={classes.ListText} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 2}
            button
            divider
            onClick={() => setOpen(false)}
            component={Link}
            href="/revolution"
          >
            <ListItemText
              className={classes.ListText}
              color="white"
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 3}
            button
            divider
            onClick={() => setOpen(false)}
            component={Link}
            href="/about"
          >
            <ListItemText className={classes.ListText} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 4}
            button
            divider
            onClick={() => setOpen(false)}
            component={Link}
            href="/about"
          >
            <ListItemText className={classes.ListText} disableTypography>
              Conatact Us
            </ListItemText>
          </ListItem>
          <ListItem
            selected={value === 5}
            button
            divider
            onClick={() => setOpen(false)}
            component={Link}
            href="/estimate"
            className={classes.estimate}
          >
            <ListItemText className={classes.ListText} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default Drawer;
