import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface NavbarLinkProps {
  href: string
  title: string
}

export default function NavbarLink(props: NavbarLinkProps): JSX.Element {
  const { href, title } = props

  const router = useRouter()
  const active = router.pathname === href

  return (
    <Link href={href}>
      <a className={active ? "text-primary-500" : "text-current"}>{title}</a>
    </Link>
  )
}
