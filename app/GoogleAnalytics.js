"use client";

import Script from "next/script";
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            gtag('event', 'conversion', {'send_to': '${GA_TRACKING_ID}/ZHdhCLbgg5QZEMDexKs9','value': '${1.0}',
            'currency': 'CAD'});
          `,
        }}
      />
      <Script />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                function gtag_report_conversion(url) {
                  var callback = function () {
                    if (typeof(url) != 'undefined') {
                      window.location = url;
                    }
                  };
                  gtag('event', 'conversion', {
                      'send_to': 'AW-10843063554/r3OgCKvClLgYEIKKsLIo',
                      'event_callback': callback
                  });
                  return false;
                }
              `,
        }}
      ></Script>
    </>
  );
};

export default GoogleAnalytics;
