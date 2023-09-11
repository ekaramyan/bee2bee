import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/roboto';
import '@fontsource/roboto-condensed';
import '@fontsource/roboto-slab';

const theme = createTheme({
  overrides: {
    '*': {
      scrollBehavior: 'smooth',
    },
  },
  components: {
   
  },

  palette: {
    primary: {
      main: '#FF5733',  // основной цвет
      contrastText: '#FFF',  // цвет текста
    },
    secondary: {
      main: '#FFFFFFB2',
      contrastText: '#FFFFFFB2'
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    button: {
      textTransform: "none",
    },
    allVariants: {
      cursor: "default",
      fontSize: 20,
      fontWeight: 300,
      color: "#241f55",
      lineHeight: 1.55,
    },
}});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;