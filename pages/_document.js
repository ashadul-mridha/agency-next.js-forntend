// internal import 
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

//external Import
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* google font import  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600&family=Kdam+Thmor+Pro&display=swap" rel="stylesheet" />

        {/* bootstrap added  */}
        <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin  strategy="lazyOnload" />
        <Script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin strategy="lazyOnload" />
        <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin strategy="lazyOnload" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}