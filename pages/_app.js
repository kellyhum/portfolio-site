import "../styles/globals.css";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS}');
        `}
      </Script>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp;
