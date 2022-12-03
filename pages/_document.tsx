import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Look at the pictures I take every now and then on my camera"
          />
          <meta property="og:site_name" content="gallery.yusuf.fyi" />
          <meta
            property="og:description"
            content="Look at the pictures I take every now and then on my camera"
          />
          <meta property="og:title" content="Yusuf's Photo Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Yusuf's Photo Gallery" />
          <meta
            name="twitter:description"
            content="Look at the pictures I take every now and then on my camera"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
