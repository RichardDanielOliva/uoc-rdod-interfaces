import { Provider } from "react-redux";
import Head from "next/head";
import store from "../redux/store";
import Layout from "../components/layout/layout.component";
import GlobalStyle from "../config/styles/global-styles";
import AppInsightsContextProvider from "../config/app-insights/context-provider";

export const App = ({ Component, pageProps }) => {
  return (
    <AppInsightsContextProvider>
      <Provider store={store}>
        <Layout>
            <Head>
              <title>RDOD&reg; - Diseño de interfaces</title>
            </Head>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyle />
      </Provider>
    </AppInsightsContextProvider>
  );
};

export default App;
