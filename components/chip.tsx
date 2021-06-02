import React, { PropsWithChildren } from "react"

export default function Chip(
  props: PropsWithChildren<{ active: boolean; onClick: () => void }>
): JSX.Element {
  const { active, children, onClick } = props

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      className={`rounded-full px-3 border-primary-500 border-2 bg-primary-500  ${
        active ? "bg-opacity-100" : "bg-opacity-30"
      }`}
    >
      {children}
    </div>
  )
}
