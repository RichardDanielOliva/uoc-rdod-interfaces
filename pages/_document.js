import Document, { Html, Head, Main, NextScript } from "next/document";
//import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            as="font"
            crossOrigin=""
            href={"/fonts/FuturaLT/FuturaLT-Book.ttf"}
          />
           <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
            integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
            crossOrigin=""/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"/>
        </body>
      </Html>
    );
  }
}
