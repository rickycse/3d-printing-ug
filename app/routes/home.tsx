import { useLoaderData, type LoaderFunctionArgs } from "react-router"
import type { Route } from "./+types/home"
import About from "~/about/About"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3D Printing UG" },
    {
      name: "3D Printing UG",
      content: "An unofficial guide into 3d printing!",
    },
  ]
}

const FAILURE_MSG =
  "Failed to load topic. Please refresh the page or try again later."

const DEFAULTS: GuideResponseType = {
  STATIC: {
    HOME: FAILURE_MSG,
    DISCLAIMER: FAILURE_MSG,
    YAPPING: FAILURE_MSG,
    PRINTERS: FAILURE_MSG,
    FINALE: FAILURE_MSG,
  },
  FILAMENTS: {
    TYPES: FAILURE_MSG,
    DRYING: FAILURE_MSG,
    MULTICOLOR: FAILURE_MSG,
    DESCRIPTION: FAILURE_MSG,
  },
  SAFETY: {
    VENTIALTION: FAILURE_MSG,
    FILTRATION: FAILURE_MSG,
    DESCRIPTION: FAILURE_MSG,
    ENCLOSURE: FAILURE_MSG,
    FANS: FAILURE_MSG,
  },
  PROBLEMS: { WIP: FAILURE_MSG, LINGERING_FUMES: FAILURE_MSG },
  CONCERNS: { FOOD_SAFETY: FAILURE_MSG },
} as const

async function get_topic(topic: string) {
  const url = process.env.CONTENT_SERVER || ""
  const endpoint = `${url}/content/${topic}`

  try {
    const response = await fetch(endpoint, {
      headers: { "x-internal-secret": process.env.INTERNAL_API_SECRET! },
    })

    if (!response.ok) {
      return {
        [topic.toLocaleUpperCase("en-US")]:
          DEFAULTS[topic.toLocaleUpperCase("en-US") as keyof GuideResponseType],
      }
    }

    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    return {
      [topic.toLocaleUpperCase("en-US")]:
        DEFAULTS[topic.toLocaleUpperCase("en-US") as keyof GuideResponseType],
    }
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const statics = await get_topic("static")
  const filaments = await get_topic("filaments")
  const problems = await get_topic("problems")
  const safety = await get_topic("safety")
  const concerns = await get_topic("concerns")

  const content = {
    ...statics,
    ...filaments,
    ...problems,
    ...safety,
    ...concerns,
  }

  return content
}

export default function Home() {
  const content = useLoaderData<typeof loader>()
  return <About CONSTANTS={content} />
}
