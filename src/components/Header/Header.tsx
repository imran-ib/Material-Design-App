import React, { PropsWithChildren, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, useScrollTrigger, useTheme } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import Link from '../utils/Link';
import LargeScreenTabs from './LargeScreenTabs';
import { Desktop, Mobile, Tablet } from '../utils/useMediaQuery';
import Drawer from './SmallScreenDrawer';

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

const Header = (props: PropsWithChildren<any>) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState(0);
  const [selectIndex, setSelectIndex] = useState(0);
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
  const handleMenuClick = (e: any, i: number) => {
    setAnchorEl(null);
    setSelectIndex(i);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.location.pathname === `/` && value !== 0) {
        setValue(0);
      } else if (window.location.pathname === `/services` && value !== 1) {
        setValue(1);
        setSelectIndex(0);
      } else if (window.location.pathname === `/revolution` && value !== 2) {
        setValue(2);
      } else if (window.location.pathname === `/about` && value !== 3) {
        setValue(3);
      } else if (window.location.pathname === `/contact` && value !== 4) {
        setValue(4);
      } else if (window.location.pathname === `/estimate` && value !== 5) {
        setValue(5);
      } else if (window.location.pathname === `/customsoftware`) {
        setValue(1);
        setSelectIndex(1);
      } else if (window.location.pathname === `/mobileapps`) {
        setValue(1);
        setSelectIndex(2);
      } else if (window.location.pathname === `/websites`) {
        setValue(1);
        setSelectIndex(3);
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
            <Desktop>
              <LargeScreenTabs
                anchorEl={anchorEl}
                value={value}
                selectIndex={selectIndex}
                handleChange={handleChange}
                handleClick={handleClick}
                handleClose={handleClose}
                handleMenuClick={handleMenuClick}
              />
            </Desktop>
            <Mobile>
              <Drawer value={value} />
            </Mobile>
            <Tablet>
              <Drawer value={value} />
            </Tablet>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
