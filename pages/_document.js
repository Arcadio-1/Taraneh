import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="manifest.json" />
          <meta name="کافه ترانه" content="فروشگاه انلاین کافه ترانه" />
          {/* <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta name="description" content="Best PWA App in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link
            rel="apple-touch-icon"
            href="/image/ui/appIcons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/image/ui/appIcons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/image/ui/appIcons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/image/ui/appIcons/icon-512x512.pngg"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/image/ui/appIcons/icon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/image/ui/appIcons/icon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/image/ui/appIcons/maskicon-512x512.png"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="PWA App" />
          <meta
            name="twitter:description"
            content="Best PWA App in the world"
          />
          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PWA App" />
          <meta property="og:description" content="Best PWA App in the world" />
          <meta property="og:site_name" content="PWA App" /> */}
        </Head>
        <body>
          <div id="overLay" className="" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
