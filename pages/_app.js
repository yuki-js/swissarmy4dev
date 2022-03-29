import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import GlobalContextsProvider from "../components/plasmic/swissarmy_4_dev/PlasmicGlobalContextsProvider";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <GlobalContextsProvider>
        <Component {...pageProps} />
      </GlobalContextsProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp;
