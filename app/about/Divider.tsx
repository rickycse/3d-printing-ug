import React from "react"

export default function Divider() {
  return (
    <span className="flex items-center" id="getting_started">
      <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></span>

      <span className="shrink-0 px-4 text-gray-900 dark:text-white">
        {" "}
        Getting Started{" "}
      </span>

      <span className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></span>
    </span>
  )
}
