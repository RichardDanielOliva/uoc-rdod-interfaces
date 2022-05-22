import { Provider } from "react-redux";
import Head from "next/head";
import store from "../redux/store";
import Layout from "../components/layout/layout.component";
import GlobalStyle from "../config/styles/global-styles";

export const App = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Layout>
            <Head>
              <title>RDOD&reg; - Diseño de interfaces</title>
            </Head>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyle />
      </Provider>
  );
};

export default App;
