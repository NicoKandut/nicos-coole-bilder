import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-row justify-between opacity-50 py-3">
      <a href="https://github.com/NicoKandut/nicos-coole-bilder">
        <FontAwesomeIcon icon={faGithub} /> View Source on Github
      </a>
      <p>© 2021 Nico Kandut</p>
    </footer>
  )
}
