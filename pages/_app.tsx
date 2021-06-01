import React from "react";
import "../styles/globals.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp(props: any) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}
