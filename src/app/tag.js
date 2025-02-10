'use client'
import Script from "next/script";
export const GoogleAnalyticsTracking = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Q7K4TMB70" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1Q7K4TMB70');
        `}
      </Script>
    </>
 );
}