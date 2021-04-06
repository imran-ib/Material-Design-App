import { createMuiTheme } from '@material-ui/core/styles';

const blue = `#0b72b9`;
const orange = `#ffba60`;

export const theme = createMuiTheme({
  palette: {
    common: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      blue: `${blue}`,
      orange: `${orange}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${orange}`,
    },
  },
  typography: {}, 
});
