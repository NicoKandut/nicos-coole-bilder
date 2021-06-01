import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props: PropsWithChildren<{}>) {
  const { children } = props;

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
