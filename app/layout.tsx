import type { Metadata } from "next";
import "./globals.css";
import "@/public/css/styles.css";
import "@/public/css/vendor.css";
import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Resurection Anglican Church",
  description: "Fine dining restaurant experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-js">
      <head>
        {/* Favicon & manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body id="top">
        <div id="preloader">
          <div id="loader" className="dots-fade">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <script
          src="/js/plugins.js"
          async
          onLoad={() => {
            document.documentElement.classList.remove("no-js");
            document.documentElement.classList.add("js");
          }}
        />
        <script src="/js/main.js" async /> */}
        <Script
          src="/js/plugins.js"
          strategy="afterInteractive"
          // onLoad={() => {
          //   // This runs when plugins.js finishes loading
          //   document.documentElement.classList.remove("no-js");
          //   document.documentElement.classList.add("js");
          // }}
        />

        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
