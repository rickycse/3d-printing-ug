import React from "react"
import { CONSTANTS } from "./constants/constants"

export default function Home() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-24 sm:px-6 sm:py-24 flex flex-col gap-4 lg:grid lg:grid-cols-[2fr_3fr] lg:items-center lg:px-8 lg:py-32">
        <div className="w-[80%] text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Unofficial Guide Into
            <strong className="text-indigo-600"> 3D Printing </strong>& Safety
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            {CONSTANTS.HOME.DESCRIPTION}
          </p>

          <p className="mt-4 italic text-xs text-red-600">
            {CONSTANTS.DISCLAIMER}
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#getting_started"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>

        <img src={"./setup.jpg"} className="rounded-2xl" />
      </div>
    </section>
  )
}
