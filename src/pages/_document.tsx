import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="/asset/css/main.css"/>
            <link rel="stylesheet" href="/asset/css/style.css"/>
            <link rel="stylesheet" href="/asset/css/basa.css"/>
        </Head>
        <body className="antialiased">
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
