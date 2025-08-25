import React from "react"
import { CONSTANTS } from "./constants/constants"

export default function Landing() {
  return (
    <section className="lg:grid lg:h-screen lg:place-content-center bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-24 sm:px-6 sm:py-24 flex flex-col gap-4 lg:grid lg:grid-cols-[2fr_3fr] lg:items-center lg:px-8 lg:py-32">
        <div className="w-[80%] text-left">
          <h1 className="text-4xl font-bold sm:text-5xl text-white">
            Unofficial Guide Into
            <strong className="text-indigo-600"> 3D Printing </strong>& Safety
          </h1>

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
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium shadow-sm transition-color dark:border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
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
