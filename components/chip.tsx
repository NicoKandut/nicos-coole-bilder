import React, { PropsWithChildren } from "react"

export default function Chip(
  props: PropsWithChildren<{ active: boolean; onClick: () => void }>
): JSX.Element {
  const { active, children, onClick } = props

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      className={`inline-flex gap-3 items-center rounded-full px-3 border-primary border-2 bg-primary cursor-pointer ${
        active ? "bg-opacity-100" : "bg-opacity-30 hover:bg-opacity-50"
      }`}
    >
      {children}
    </div>
  )
}
