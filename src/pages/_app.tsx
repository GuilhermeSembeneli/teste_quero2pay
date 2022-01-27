import Header from "components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppPropsWithLayout } from "interfaces";

import { GlobalStyle } from "styles/_global";
import { AuthProvider } from "context/auth";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <AuthProvider>
      <GlobalStyle />
      <Header />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
