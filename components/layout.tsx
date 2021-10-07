import React, { PropsWithChildren } from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout(
  props: PropsWithChildren<Record<string, unknown>>
): JSX.Element {
  const { children } = props

  return (
    <div className="layout-container bg-layer-0 text-white overflow-auto">
      <div className="container mx-auto flex flex-col gap-5  h-full">
        <Header />
        <main className="flex flex-col flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
