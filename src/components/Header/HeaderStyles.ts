import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `3em`,
    [theme.breakpoints.down('md')]: {
      marginBottom: `2em`,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: `1.25em`,
    },
  },
  logo: {
    height: `8em`,
    [theme.breakpoints.down('md')]: {
      height: `7em`,
    },
    [theme.breakpoints.down('xs')]: {
      height: `6em`,
    },
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
