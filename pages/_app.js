// pages/_app.js
import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import {
  faClock,
  faClipboardCheck,
  faHandshake,
  faComment,
  faGlasses,
  faStopwatch
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faClock,
  faClipboardCheck,
  faHandshake,
  faComment,
  faGlasses,
  faStopwatch
);

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component && Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    // console.log(reduxStore);
    return (
      <Container>
        <Provider store={reduxStore}>
          <Head>
            <title>ClickCleanit v2</title>
          </Head>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
