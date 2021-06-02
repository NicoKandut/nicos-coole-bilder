import React from "react"
import NavbarLink from "./navbarLink"

export default function Header(): JSX.Element {
  return (
    <header className="py-4">
      <h1 className="text-3xl">Nico's Coole Bilder</h1>
      <p className="opacity-50">A cool picture sharing application</p>
      <nav className="flex flex-row gap-4 py-3 border-b-2 border-gray-600">
        <NavbarLink href="/" title="Home" />
        <NavbarLink href="/about" title="About" />
      </nav>
    </header>
  )
}
