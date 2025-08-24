import React, { memo, useEffect, useRef, useState } from "react"
import Accordion from "./Accordion"
import { CONSTANTS } from "./constants/constants"
import Home from "./Home"
import Footer from "./Footer"
import Divider from "./Divider"

export const TOPICS = {
  YAPPING: "YAPPING",
  CHOOSING: "CHOOSING",
  FDM: "FDM",
  SLA: "SLA",
  FILAMENTS: "FILAMENTS",
  FILAMENT_TYPES: "FILAMENT_TYPES",
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
  LINGERING_FUMES: "LINGERING_FUMES",
  SCIENCE_WIP: "SCIENCE_WIP",
  FOOD_SAFETY: "FOOD_SAFETY",
} as const

export type Topic = (typeof TOPICS)[keyof typeof TOPICS]

const makeAll = (value: boolean): Record<Topic, boolean> =>
  Object.values(TOPICS).reduce(
    (acc, k) => {
      acc[k] = value
      return acc
    },
    {} as Record<Topic, boolean>
  )

const VideoComponent = memo(function VideoComponent({ src }: { src: string }) {
  const ref = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    if (ref.current && ref.current.src !== src) {
      ref.current.src = src
    }
  }, [src])

  return (
    <iframe
      ref={ref}
      className="w-[90%] md:w-[70%] lg:w-[50%] min-h-[200px] md:min-h-[300px] 2xl:min-h-[400px]"
      src={src}
    />
  )
})

export default function About() {
  const [openById, setOpenById] = useState<Record<Topic, boolean>>(() =>
    makeAll(false)
  )

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

  function Section({
    topic,
    title,
    color,
    children,
  }: {
    topic: Topic
    title: string
    color?: string
    children: React.ReactNode
  }) {
    return (
      <Accordion
        title={title}
        color={color}
        open={openById[topic]}
        setOpen={() => toggle(topic)}
      >
        <div className="py-2">{children}</div>
      </Accordion>
    )
  }

  return (
    <div className="w-[100%] flex flex-col justify-center bg-gray-900 text-white">
      <Home />
      <Divider />

      <div className="flex flex-col gap-4 w-[90%] mx-auto my-4 whitespace-pre-line md:w-[80%] lg:w-[70%]">
        <div className="flex justify-end gap-4 my-2">
          <button onClick={() => setAll(true)}>Expand All</button>
          <button onClick={() => setAll(false)}>Collapse All</button>
        </div>

        <div className="text-2xl">Optional Read</div>
        <Section topic={TOPICS.YAPPING} title="My Yapping Session" color="blue">
          <div className="pt-4 flex flex-col gap-4 whitespace-pre-line">
            <div>{CONSTANTS.YAPPING}</div>
            <div>
              If you somehow haven't seen any of Scott Yu-Jan's videos, here's
              the one that got me into printing:
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <VideoComponent
                src={"https://www.youtube.com/embed/9FHjfzS4BqQ"}
              />
            </div>
          </div>
        </Section>

        <div className="text-2xl">The Basics</div>
        <div className="flex flex-col w-full gap-4">
          <Section topic={TOPICS.CHOOSING} title="Choosing Your Printer">
            {CONSTANTS.PRINTERS}
          </Section>

          <Section topic={TOPICS.FILAMENTS} title="Filaments">
            <div className="pt-4 flex flex-col gap-4">
              <Section
                topic={TOPICS.FILAMENT_TYPES}
                title="Types of Filament"
                color="slate"
              >
                <div className="pt-4 flex flex-col gap-4">
                  <div>{CONSTANTS.FILAMENTS.TYPES}</div>
                  <div>
                    I would also recommend watching Zack Freedman's video if you
                    want to learn about all of the different filaments:
                  </div>
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <VideoComponent
                      src={
                        "https://www.youtube.com/embed/weeG9yOp3i4"
                      }
                    />
                  </div>
                </div>
              </Section>
              <Section
                topic={TOPICS.DRYING}
                title="Drying Your Filament"
                color="slate"
              >
                {CONSTANTS.FILAMENTS.DRYING}
              </Section>
              <Section
                topic={TOPICS.MULTICOLOR}
                title="Multicolor Printing"
                color="slate"
              >
                {CONSTANTS.FILAMENTS.MULTICOLOR}
              </Section>

              <div className="pt-2">{CONSTANTS.FILAMENTS.DESCRIPTION}</div>
            </div>
          </Section>
        </div>

        <div className="text-2xl">Safety First</div>
        <div className="flex flex-col w-full gap-4">
          <Section
            topic={TOPICS.FENT_OR_VENT}
            title="Ventilation vs. Filtration"
          >
            <div className="pt-4 flex flex-col gap-4">
              <Section
                topic={TOPICS.VENTILATION}
                title="Ventilation"
                color="slate"
              >
                {CONSTANTS.SAFETY.VENTILATION}
              </Section>
              <Section
                topic={TOPICS.FILTRATION}
                title="Filtration"
                color="slate"
              >
                <div className="pt-4 flex flex-col gap-4">
                  <div>{CONSTANTS.SAFETY.FILTRATION}</div>
                </div>
              </Section>

              <div className="pt-2">{CONSTANTS.SAFETY.DESCRIPTION}</div>
            </div>
          </Section>

          <Section topic={TOPICS.ENCLOSURE} title="Enclosures and Fans">
            <div className="pt-4 flex flex-col gap-4">
              <Section
                topic={TOPICS.FANS}
                title="Fan Speeds and Pressure"
                color="slate"
              >
                <div className="pt-4 flex flex-col gap-4">
                  {CONSTANTS.SAFETY.FANS}
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <VideoComponent
                      src={"https://www.youtube.com/embed/dnUz8IxtlMo"}
                    />
                  </div>
                </div>
              </Section>
              {CONSTANTS.SAFETY.ENCLOSURE}
              <div className="flex flex-col gap-4 justify-center items-center">
                <VideoComponent
                  src={"https://www.youtube.com/embed/QkvE0x5SQVo"}
                />
              </div>
              Make sure you do your own research and find out what's best for
              your setup.
            </div>
          </Section>
        </div>

        <div className="text-2xl">That's It!</div>
        <div className="flex flex-col w-full gap-4">
          <Section topic={TOPICS.SOFTWARE} title="Start Printing!">
            {CONSTANTS.FINALE}
          </Section>
        </div>

        <div className="text-2xl">Common Problems & Fixes</div>
        <div className="flex flex-col w-full gap-4">
          <Section topic={TOPICS.PROBLEMS} title="WIP" color="red">
            {CONSTANTS.PROBLEMS.WIP}
          </Section>
          <Section
            topic={TOPICS.LINGERING_FUMES}
            title="Lingering Fumes"
            color="red"
          >
            {CONSTANTS.PROBLEMS.LINGERING_FUMES}
          </Section>
        </div>

        <div className="text-2xl">Concerns</div>
        <div className="flex flex-col w-full gap-4">
          <Section
            topic={TOPICS.FOOD_SAFETY}
            title="Food Safety"
            color="yellow"
          >
            {CONSTANTS.CONCERNS.FOOD_SAFETY}
          </Section>
        </div>

        {/* <div className="text-2xl">Le Science</div>
        <div className="flex flex-col w-full gap-4">
          <Section topic={TOPICS.SCIENCE_WIP} title="WIP" color="green">
            {CONSTANTS.SCIENCE.WIP}
          </Section>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}
