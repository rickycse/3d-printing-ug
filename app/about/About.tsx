import React, { useState } from "react"
import Accordion from "./Accordion"
import { CONSTANTS } from "./constants"
import Home from "./Home"
import Footer from "./Footer"
import Divider from "./Divider"

const TOPICS = {
  YAPPING: "YAPPING",
  CHOOSING: "CHOOSING",
  FDM: "FDM",
  SLA: "SLA",
  FILAMENTS: "FILAMENTS",
  FILAMENT_TYPES: "FILAMENT_TYPES",
  FILAMENT_DRYING: "FILAMENT_DRYING",
  VENTILATION: "VENTILATION",
  FILTRATION: "FILTRATION",
  FENT_OR_VENT: "FENT_OR_VENT",
  ENCLOSURE: "ENCLOSURE",
  DRYING: "DRYING",
  MULTICOLOR: "MULTICOLOR",
  FANS: "FANS",
  SOFTWARE: "SOFTWARE",
  MODELING: "MODELING",
  PRINTING: "PRINTING",
  PROBLEMS: "PROBLEMS",
} as const

type Topic = (typeof TOPICS)[keyof typeof TOPICS]

const makeDefaultState = () =>
  Object.values(TOPICS).reduce(
    (acc, key) => ({ ...acc, [key]: false }),
    {} as Record<Topic, boolean>
  )

export default function About() {
  const [openById, setOpenById] =
    useState<Record<Topic, boolean>>(makeDefaultState())

  const toggle = (topic: Topic) => {
    setOpenById((prev) => ({ ...prev, [topic]: !prev[topic] }))
  }

  const setAll = (next: boolean) => {
    setOpenById(
      (prev) =>
        Object.fromEntries(Object.keys(prev).map((k) => [k, next])) as Record<
          Topic,
          boolean
        >
    )
  }

  return (
    <div className="w-[100%] flex flex-col justify-center bg-gray-900 text-white">
      <Home />
      <Divider />
      

      <div className="flex flex-col gap-4 w-[70%] mx-auto my-4 whitespace-pre-line">
        <div className="flex justify-end gap-4 my-2">
          <button onClick={() => setAll(true)}>Expand All</button>
          <button onClick={() => setAll(false)}>Collapse All</button>
        </div>
        <div className="flex justify-center flex-col">
          <div className="text-2xl">Optional Read</div>
          <Accordion
            color="blue"
            title="My Yapping Session"
            open={openById[TOPICS.YAPPING]}
            setOpen={() => toggle(TOPICS.YAPPING)}
            children={
              <div className="pt-2 whitespace-pre-line">
                {CONSTANTS.YAPPING}
              </div>
            }
          />          
        </div>

        <div className="flex justify-center flex-col">
          <div className="text-2xl">The Basics</div>

          <div className="flex flex-col w-[100%] gap-4">
            <Accordion
              title="Choosing Your Printer"
              open={openById[TOPICS.CHOOSING]}
              setOpen={() => toggle(TOPICS.CHOOSING)}
              children={
                <div className="pt-2">
                  {CONSTANTS.PRINTERS}
                </div>
              }
            />
            <Accordion
              title="Filaments"
              open={openById[TOPICS.FILAMENTS]}
              setOpen={() => toggle(TOPICS.FILAMENTS)}
              children={
                <div className="pt-4 text-gray-900 dark:text-white flex flex-col gap-4">
                  <Accordion
                    title="Types of Filament"
                    color="slate"
                    open={openById[TOPICS.FILAMENT_TYPES]}
                    setOpen={() => toggle(TOPICS.FILAMENT_TYPES)}
                    children={
                      <div className="pt-2">
                        {CONSTANTS.FILAMENTS.TYPES}
                      </div>
                    }
                  />
                  <Accordion
                    title="Drying Your Filament"
                    color="slate"
                    open={openById[TOPICS.DRYING]}
                    setOpen={() => toggle(TOPICS.DRYING)}
                    children={
                      <div className="pt-2">
                        {CONSTANTS.FILAMENTS.DRYING}
                      </div>
                    }
                  />
                  <Accordion
                    title="Multicolor Printing"
                    color="slate"
                    open={openById[TOPICS.MULTICOLOR]}
                    setOpen={() => toggle(TOPICS.MULTICOLOR)}
                    children={
                      <div className="pt-2">
                        {CONSTANTS.FILAMENTS.MULTICOLOR}
                      </div>
                    }
                  />
                  {CONSTANTS.FILAMENTS.DESCRIPTION}
                </div>
              }
            />
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="text-2xl">Safety First</div>
          <div className="flex flex-col w-[100%] gap-4">
            <Accordion
              title="Ventilation vs. Filtration"
              open={openById[TOPICS.FENT_OR_VENT]}
              setOpen={() => toggle(TOPICS.FENT_OR_VENT)}
              children={
                <div className="pt-4 text-gray-900 dark:text-white flex flex-col gap-4">
                  <Accordion
                    title="Ventilation"
                    color="slate"
                    open={openById[TOPICS.VENTILATION]}
                    setOpen={() => toggle(TOPICS.VENTILATION)}
                    children={
                      <div className="pt-2">
                        {CONSTANTS.SAFETY.VENTILATION}
                      </div>
                    }
                  />
                  <Accordion
                    title="Filtration"
                    color="slate"
                    open={openById[TOPICS.FILTRATION]}
                    setOpen={() => toggle(TOPICS.FILTRATION)}
                    children={
                      <div className="pt-2">
                        {CONSTANTS.SAFETY.FILTRATION}
                      </div>
                    }
                  />
                  {CONSTANTS.SAFETY.DESCRIPTION}
                </div>
              }
            />
            <Accordion
              title="Enclosures and Fans"
              open={openById[TOPICS.ENCLOSURE]}
              setOpen={() => toggle(TOPICS.ENCLOSURE)}
              children={
                <div className="pt-4 text-gray-900 dark:text-white flex flex-col gap-4">
                  <Accordion
                    title="Fan Speeds and Pressure"
                    color="slate"
                    open={openById[TOPICS.FANS]}
                    setOpen={() => toggle(TOPICS.FANS)}
                    children={
                      <div className="pt-2">
                        {CONSTANTS.SAFETY.FANS}
                      </div>
                    }
                  />
                  {CONSTANTS.SAFETY.ENCLOSURE}
                </div>
              }
            />
          </div>
        </div>
        <div className="flex justify-center flex-col text-gray-900 dark:text-white ">
          <div className="text-2xl">That's It!</div>
          <div className="flex flex-col w-[100%] gap-4">
            <Accordion
              title="Start Printing!"
              open={openById[TOPICS.SOFTWARE]}
              setOpen={() => toggle(TOPICS.SOFTWARE)}
              children={
                <div className="pt-2">
                  {CONSTANTS.FINALE}
                </div>
              }
            />
            </div>
        </div>

        <div className="flex justify-center flex-col text-gray-900 dark:text-white ">
          <div className="text-2xl">Common Problems & Fixes</div>
          <div className="flex flex-col w-[100%] gap-4">
            <Accordion
              title="WIP"
              color="red"
              open={openById[TOPICS.SOFTWARE]}
              setOpen={() => toggle(TOPICS.SOFTWARE)}
              children={
                <div className="pt-2">
                  {CONSTANTS.PROBLEMS.WIP}
                </div>
              }
            />
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
