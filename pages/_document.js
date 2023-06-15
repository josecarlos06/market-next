import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <meta name='description'content='Eccomerce MarketConnect es una empresa importadora que trabaja con disinet'></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Lora:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
