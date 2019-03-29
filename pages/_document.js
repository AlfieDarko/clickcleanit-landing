import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // const initialProps = await Document.getInitialProps(ctx);

    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
    // return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
          <link
            href="https://fonts.googleapis.com/css?family=Heebo|Open+Sans:600|Roboto:500|Work+Sans:600"
            rel="stylesheet"
          />
          <link href="/static/style.css" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
