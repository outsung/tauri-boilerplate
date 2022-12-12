import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

import "../style.css";
import "../App.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#C00C3F" } }}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
