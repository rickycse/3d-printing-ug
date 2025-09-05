import React, { memo, useCallback, useState } from "react"
import clsx from "clsx"

type AccordionProps = {
  title: string;
  expandAll: boolean;
  color?: string;
  children: React.ReactNode;
}

const colorStyles: Record<string, string> = {
  blue: "border-blue-700 bg-blue-900",
  green: "border-green-700 bg-green-800",
  red: "border-red-700 bg-red-800",
  gray: "border-gray-700 bg-gray-800",
  slate: "border-slate-600 bg-slate-700",
  yellow:
    "border-yellow-600 bg-yellow-700",
}

export const Accordion = memo(function Accordion({
  title,
  children,
  expandAll,
  color = "gray",
}: AccordionProps) {
  const [open, setOpen] = useState(expandAll);

  const onToggle = useCallback(() => setOpen(!open), [open, setOpen])

  return (
    <div className="space-y-4">
      <details
        open={open}
        className={clsx(
          "border-s-4 p-4",
          colorStyles[color] ?? colorStyles.gray
        )}
      >
        <summary
          className="flex items-center justify-between gap-1.5 text-white cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            onToggle()
          }}
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <svg
            className={`size-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div className={open ? "block" : "hidden"}>{children}</div>
      </details>
    </div>
  )
})

export default Accordion
