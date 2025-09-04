import React, { memo, useState } from "react"
import Accordion from "./components/Accordion"
import Footer from "./Footer"
import Divider from "./components/Divider"
import Landing from "./Landing"
import VideoComponent from "./components/VideoComponent"

const Section = memo(function Section({
  title,
  color,
  expandAll,
  children,
}: {
  title: string
  color?: string
  expandAll: boolean
  children: React.ReactNode
}) {
  return (
    <Accordion title={title} color={color} expandAll={expandAll}>
      <div className="py-2">{children}</div>
    </Accordion>
  )
})

export default function About({ CONSTANTS }: { CONSTANTS: Record<string, any> }) {
  const [expandAll, setExpandAll] = useState(false)

  return (
    <div className="w-[100%] flex flex-col justify-center bg-gray-900 text-white">
      <Landing />
      <Divider />

      <div className="flex flex-col gap-4 w-[90%] mx-auto my-4 whitespace-pre-line md:w-[80%] lg:w-[70%]">
        <div className="flex justify-end gap-4 my-2">
          <button onClick={() => setExpandAll(true)}>Expand All</button>
          <button onClick={() => setExpandAll(false)}>Collapse All</button>
        </div>

        <div className="text-2xl">Optional Read</div>
        <Section expandAll={expandAll} title="My Yapping Session" color="blue">
          <div className="pt-4 flex flex-col gap-4 whitespace-pre-line">
            <div>{CONSTANTS.YAPPING}</div>
            <div>
              And if you somehow haven't seen any of Scott Yu-Jan's videos,
              here's the one that got me into printing:
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <VideoComponent
                src={
                  "https://www.youtube.com/embed/9FHjfzS4BqQ?si=Njy4q9bREv1cy0OS"
                }
              />
            </div>
          </div>
        </Section>

        <div className="text-2xl">The Basics</div>
        <div className="flex flex-col w-full gap-4">
          <Section expandAll={expandAll} title="Choosing Your Printer">
            {CONSTANTS.PRINTERS}
          </Section>

          <Section expandAll={expandAll} title="Filaments">
            <div className="pt-4 flex flex-col gap-4">
              <Section
                expandAll={expandAll}
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
                        "https://www.youtube.com/embed/weeG9yOp3i4?si=ke2GphyxlrAVuF8K"
                      }
                    />
                  </div>
                </div>
              </Section>
              <Section
                expandAll={expandAll}
                title="Drying Your Filament"
                color="slate"
              >
                {CONSTANTS.FILAMENTS.DRYING}
              </Section>
              <Section
                expandAll={expandAll}
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
          <Section expandAll={expandAll} title="Ventilation vs. Filtration">
            <div className="pt-4 flex flex-col gap-4">
              <Section expandAll={expandAll} title="Ventilation" color="slate">
                <div className="pt-4 flex flex-col gap-4">
                  <div>{CONSTANTS.SAFETY.VENTILATION}</div>
                  <div>
                    I HIGHLY recommend watching Aris Alder's video on
                    ventilation below.{" "}
                    <span className="text-red-500 font-semibold">
                      If you have bad asthma or some sort of condition, I would
                      say GO ALL OUT on ventilation and filtration,
                      even if you're only printing with PLA. You only get one
                      set of lungs.
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <VideoComponent
                      src={
                        "https://www.youtube.com/embed/aRwxBNV3Ssc?si=AtHURzS9vZ5dVFxa"
                      }
                    />
                  </div>
                </div>
              </Section>
              <Section expandAll={expandAll} title="Filtration" color="slate">
                <div className="pt-4 flex flex-col gap-4">
                  <div>{CONSTANTS.SAFETY.FILTRATION}</div>
                </div>
              </Section>

              <div className="pt-2">{CONSTANTS.SAFETY.DESCRIPTION}</div>
            </div>
          </Section>

          <Section expandAll={expandAll} title="Enclosures and Fans">
            <div className="pt-4 flex flex-col gap-4">
              <Section
                expandAll={expandAll}
                title="Fan Speeds and Pressure"
                color="slate"
              >
                <div className="pt-4 flex flex-col gap-4">
                  {CONSTANTS.SAFETY.FANS}
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <VideoComponent
                      src={
                        "https://www.youtube.com/embed/dnUz8IxtlMo?si=p1XhIQPNj0m2vJyk"
                      }
                    />
                  </div>
                </div>
              </Section>
              {CONSTANTS.SAFETY.ENCLOSURE}
              <div className="flex flex-col gap-4 justify-center items-center">
                <VideoComponent
                  src={
                    "https://www.youtube.com/embed/QkvE0x5SQVo?si=aQsYWx4UZPDH47kj"
                  }
                />
              </div>
              Make sure you do your own research and find out what's best for
              your setup.
            </div>
          </Section>
        </div>

        <div className="text-2xl">That's It!</div>
        <div className="flex flex-col w-full gap-4">
          <Section expandAll={expandAll} title="Start Printing!">
            {CONSTANTS.FINALE}
          </Section>
        </div>

        <div className="text-2xl">Common Problems & Fixes</div>
        <div className="flex flex-col w-full gap-4">
          <div className="italic text-sm">{CONSTANTS.PROBLEMS.WIP}</div>
          <Section expandAll={expandAll} title="Lingering Fumes" color="red">
            {CONSTANTS.PROBLEMS.LINGERING_FUMES}
          </Section>
        </div>

        <div className="text-2xl">Concerns</div>
        <div className="flex flex-col w-full gap-4">
          <div className="italic text-sm">
            Likewise with the Common Problems & Fixes Section, I wanted to add a
            Section to address any concerns beyond the printers. If you have any
            concerns and answers, feel free to contribute!
          </div>
          <Section expandAll={expandAll} title="Food Safety" color="yellow">
            {CONSTANTS.CONCERNS.FOOD_SAFETY}
          </Section>
        </div>

        {/* <div className="text-2xl">Le Science</div>
        <div className="flex flex-col w-full gap-4">
          <Section expandAll={expandAll} title="WIP" color="green">
            {CONSTANTS.SCIENCE.WIP}
          </Section>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}
