import React, { memo, useCallback, useEffect, useState } from "react";
import Accordion from "~/components/Accordion";
import Footer from "./Footer";
import Divider from "~/components/Divider";
import Landing from "./Landing";
import VideoComponent from "~/components/VideoComponent";

type OpenMap = Record<string, boolean>;

function useOpenRegistry() {
  const [openMap, setOpenMap] = useState<OpenMap>({});
  const register = useCallback((id: string, initial: boolean) => {
    setOpenMap((m) => (id in m ? m : { ...m, [id]: initial }));
  }, []);

  const setAll = useCallback((val: boolean) => {
    setOpenMap((m) =>
      Object.fromEntries(Object.keys(m).map((k) => [k, val]))
    );
  }, []);

  const setOne = useCallback((id: string, val: boolean) => {
    setOpenMap((m) => ({ ...m, [id]: val }));
  }, []);

  return { openMap, register, setAll, setOne };
}

const Section = memo(function Section({
  id,
  title,
  color,
  children,
  // wiring from parent
  openMap,
  register,
  setOne,

  globalDefault,
}: {
  id: string;
  title: string;
  color?: string;
  children: React.ReactNode;
  openMap: OpenMap;
  register: (id: string, initial: boolean) => void;
  setOne: (id: string, val: boolean) => void;
  globalDefault: boolean;
}) {
  useEffect(() => {
    register(id, globalDefault);
  }, [id, globalDefault, register]);

  const open = !!openMap[id];

  return (
    <Accordion
      title={title}
      color={color}
      open={open}
      onOpenChange={(o) => setOne(id, o)}
    >
      <div className="py-2">{children}</div>
    </Accordion>
  );
});

export default function About({ CONSTANTS }: { CONSTANTS: Record<string, any> }) {
  const [expandAll, setExpandAll] = useState(false);

  const { openMap, register, setAll, setOne } = useOpenRegistry();

  return (
    <div className="w-[100%] flex flex-col justify-center bg-gray-900 text-white">
      <Landing />
      <Divider />

      <div className="flex flex-col gap-4 w-[90%] mx-auto my-4 whitespace-pre-line md:w-[80%] lg:w-[70%]">
        <div className="flex justify-end gap-4 my-2">
          <button
            onClick={() => {
              setExpandAll(true);
              setAll(true);
            }}
          >
            Expand All
          </button>

          <button
            onClick={() => {
              setExpandAll(false);
              setAll(false);
            }}
          >
            Collapse All
          </button>
      </div>
      
      <div className="text-2xl">Optional Read</div>

      <Section
        id="yapping"
        title="My Yapping Session"
        color="blue"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        <div className="pt-4 flex flex-col gap-4 whitespace-pre-line">
          <div>{CONSTANTS.STATIC.YAPPING}</div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <VideoComponent src="https://www.youtube.com/embed/9FHjfzS4BqQ?si=Njy4q9bREv1cy0OS" />
          </div>
        </div>
      </Section>
      
      <div className="text-2xl">The Basics</div>
      <Section
        id="printers"
        title="Choosing Your Printer"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        {CONSTANTS.STATIC.PRINTERS}
      </Section>
    
      <Section
        id="filaments"
        title="Filaments"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        <div className="flex flex-col w-full gap-2 my-2">
          <Section
            id="types"
            title="Types of Filament"
            color="slate"
            openMap={openMap}
            register={register}
            setOne={setOne}
            globalDefault={expandAll}
          >
            {CONSTANTS.FILAMENTS.TYPES}
          </Section>
          <Section
            id="drying"
            title="Drying Your Filament"
            color="slate"
            openMap={openMap}
            register={register}
            setOne={setOne}
            globalDefault={expandAll}
          >
            {CONSTANTS.FILAMENTS.DRYING}
          </Section>
          <Section
            id="multicolor"
            title="Multicolor Printing"
            color="slate"
            openMap={openMap}
            register={register}
            setOne={setOne}
            globalDefault={expandAll}
          >
            {CONSTANTS.FILAMENTS.MULTICOLOR}
          </Section>
        </div>
        {CONSTANTS.FILAMENTS.DESCRIPTION}
      </Section>
      
      <div className="text-2xl">Safety First</div>
      <Section
        id="safety"
        title="Ventilation vs. Filtration"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        <div className="flex flex-col w-full gap-2 my-2">
          <Section
            id="ventilation"
            title="Ventilation"
            color="slate"
            openMap={openMap}
            register={register}
            setOne={setOne}
            globalDefault={expandAll}
          >
            {CONSTANTS.SAFETY.VENTILATION}
            <div className="flex flex-col gap-4 justify-center items-center my-4">
              <VideoComponent
                src={
                  "https://www.youtube.com/embed/aRwxBNV3Ssc"
                }
              />
            </div>
          </Section>
          <Section
            id="filtration"
            title="Filtration"
            color="slate"
            openMap={openMap}
            register={register}
            setOne={setOne}
            globalDefault={expandAll}
          >
            {CONSTANTS.SAFETY.FILTRATION}
          </Section>
        </div>
        {CONSTANTS.SAFETY.DESCRIPTION}
      </Section>

      <Section
        id="fans"
        title="Fans and Enclosures"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        <div className="flex flex-col w-full gap-2 my-2">
          <Section
            id="speeds"
            title="Fan Speeds and Pressure"
            color="slate"
            openMap={openMap}
            register={register}
            setOne={setOne}
            globalDefault={expandAll}
          >
            {CONSTANTS.SAFETY.FANS}
            <div className="flex flex-col gap-4 justify-center items-center my-4">
              <VideoComponent
                src={
                  "https://www.youtube.com/embed/dnUz8IxtlMo?si=p1XhIQPNj0m2vJyk"
                }
              />
            </div>
          </Section>
          {CONSTANTS.SAFETY.ENCLOSURE}
          <div className="flex flex-col gap-4 justify-center items-center my-4">
            <VideoComponent
              src={
                "https://www.youtube.com/embed/QkvE0x5SQVo?si=aQsYWx4UZPDH47kj"
              }
            />
          </div>
          Make sure you do your own research and find out what's best for your setup.
        </div>
      </Section>
      
      <div className="text-2xl">That's It!</div>
      <Section
        id="end"
        title="Start Printing!"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        {CONSTANTS.STATIC.FINALE}
      </Section>

      <div className="text-2xl">Common Problems & Fixes</div>
      {CONSTANTS.PROBLEMS.WIP}
      <Section
        id="fummes"
        title="Lingering Fumes"
        color="red"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        {CONSTANTS.PROBLEMS.LINGERING_FUMES}
      </Section>
      <Section
        id="wifi"
        title="A1 Mini WiFi Problems"
        color="red"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        {CONSTANTS.PROBLEMS.A1_MINI_GHZ}
      </Section>
      
      <div className="text-2xl">Concerns</div>
      <div className="italic text-sm">
        Likewise with the Common Problems & Fixes Section, I wanted to add a
        Section to address any concerns beyond the printers. If you have any
        concerns and answers, feel free to contribute!
      </div>
      <Section
        id="food"
        title="Food Safety"
        color="yellow"
        openMap={openMap}
        register={register}
        setOne={setOne}
        globalDefault={expandAll}
      >
        {CONSTANTS.CONCERNS.FOOD_SAFETY}
      </Section>
      </div>
      <Footer />
    </div>
  )
}
