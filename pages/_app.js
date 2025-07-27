import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.css";

import "highlight.js/styles/a11y-light.css";
import "../styles/variables.css";
import "../styles/footer.css";
import "../styles/courses.css";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <Component {...pageProps} />
    </Layout>
  );
}
