import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="TOKO BIRU merupakan web e-commerce yang dibuat oleh Delza Ananjaya. Kami berusaha mendesign dengan tema modern dan menggunakan framework Next agar pengguna dapat merasakan pengalaman yang baik."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
