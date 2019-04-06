// pages/_app.js
import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>ClickCleanit v2</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
