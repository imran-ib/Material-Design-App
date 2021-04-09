import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Menu from '@material-ui/core/Menu';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuLinks } from './NavLinksData';
import { useStyles } from './HeaderStyles';
import Link from '../utils/Link';

interface Props {
  anchorEl: HTMLElement | null;
  value: number;
  selectIndex: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  handleClick: (event: any) => void;
  handleClose: () => void;
  handleMenuClick: (e: any, i: number) => void;
}

const LargeScreenTabs: React.FC<Props> = ({
  anchorEl,
  value,
  selectIndex,
  handleChange,
  handleClick,
  handleClose,
  handleMenuClick,
}) => {
  const classes = useStyles();

  return (
    <>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        indicatorColor="primary"
      >
        <Tab className={classes.tab} label="Home" component={Link} href="/" />

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
          <Button className={classes.btn} color="secondary" variant="contained">
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
          {MenuLinks.map((link, i) => (
            <MenuItem
              selected={i === selectIndex}
              key={link.to}
              classes={{ root: classes.menuItem }}
              component={Link}
              href={link.to}
              onClick={(e: any) => {
                handleClose();
                handleMenuClick(e, i);
              }}
            >
              {link.content}
            </MenuItem>
          ))}
        </Menu>
      </Tabs>
    </>
  );
};

export default LargeScreenTabs;
