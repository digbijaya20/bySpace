import "../styles/globals.css";
import theme from "../config/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
