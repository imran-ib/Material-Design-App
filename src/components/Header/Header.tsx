import React, { PropsWithChildren, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '../utils/Link';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `3em`,
  },
  logo: {
    height: `8em`,
  },
  LogoContainer: {
    padding: 0,
    '&:hover': {
      backgoundColor: `transparent`,
    },
  },
  tabContainer: {
    marginLeft: `auto`,
  },
  tab: {
    fontFamily: `Raleway`,
    textTransform: `none`,
    fontWeight: 700,
    fontSize: `1rem`,
    minWidth: `10px`,
    marginLeft: `25px`,
  },
  btn: {
    borderRadius: `50px`,
    marginLeft: `50px`,
    marginRight: `25px`,
    fontFamily: `Pacifico`,
    fontSize: `1rem`,
    textTransform: `none`,
    height: `45px`,
    color: `#fff`,
  },
  menu: {
    backgroundColor: theme.palette.common.blue!,
    borderRadius: 0,
  },
  menuItem: {
    color: `white`,
    fontFamily: `Raleway`,
    textTransform: `none`,
    fontWeight: 700,
    fontSize: `1rem`,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const Header = (props: PropsWithChildren<any>) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.location.pathname === `/` && value !== 0) {
        setValue(0);
      }
      if (
        window.location.pathname === `/services` ||
        window.location.pathname === `/customsoftware` ||
        window.location.pathname === `/mobileapps` ||
        (window.location.pathname === `/websites` && value !== 1)
      ) {
        setValue(1);
      }
      if (window.location.pathname === `/revolution` && value !== 2) {
        setValue(2);
      }
      if (window.location.pathname === `/about` && value !== 3) {
        setValue(3);
      }
      if (window.location.pathname === `/contact` && value !== 4) {
        setValue(4);
      }
      if (window.location.pathname === `/estimate` && value !== 5) {
        setValue(5);
      }
    }
  }, [value]);
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              href="/"
              className={classes.LogoContainer}
            >
              <img
                src="/assets/logo.svg"
                alt="Site Logo"
                className={classes.logo}
              />
            </Button>

            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                href="/"
              />

              <Tab
                aria-controls={anchorEl ? `simple-menu` : undefined}
                aria-haspopup={anchorEl ? `true` : undefined}
                onMouseEnter={(event: any) => handleClick(event)}
                className={classes.tab}
                label="Services"
                component={Link}
                href="/services"
              />
              <Tab
                className={classes.tab}
                label="The Revolution"
                component={Link}
                href="/revolution"
              />
              <Tab
                className={classes.tab}
                label="About Us"
                component={Link}
                href="/about"
              />
              <Tab
                className={classes.tab}
                label="Conatact Us"
                component={Link}
                href="/contact"
              />

              <Link href="/estimate">
                <Button
                  className={classes.btn}
                  color="secondary"
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Link>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}
              >
                <MenuItem
                  classes={{ root: classes.menuItem }}
                  component={Link}
                  href="/services"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Services
                </MenuItem>
                <MenuItem
                  classes={{ root: classes.menuItem }}
                  component={Link}
                  href="/customsoftware"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Custom Software Development
                </MenuItem>
                <MenuItem
                  classes={{ root: classes.menuItem }}
                  component={Link}
                  href="/mobileapps"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Mobile App Development
                </MenuItem>
                <MenuItem
                  classes={{ root: classes.menuItem }}
                  component={Link}
                  href="/websites"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Website Development
                </MenuItem>
              </Menu>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
