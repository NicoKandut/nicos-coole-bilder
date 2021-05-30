import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Nico's Coole Bilder</h1>
      <p>A cool picture sharing application</p>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
}
