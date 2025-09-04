import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/home";
import About from "~/about/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3D Printing UG" },
    { name: "3D Printing UG", content: "An unofficial guide into 3d printing!" },
  ];
}

async function get_topic(topic: string) {
  const url = process.env.CONTENT_SERVER;
  const endpoint = `${url}/content/${topic}`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    return { [topic.toUpperCase()]: `Failed to fetch ${topic}` };
  }

  const data = await response.json();
  return data;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const topics = ["static", "printers", "problems", "safety", "filaments", "concerns"];

  let content: Record<string, unknown> = {};

  for (const t of topics) {
    const topicContent = await get_topic(t);
    content = { ...content, ...topicContent };
  }

  return content;
}

export default function Home() {
  const content = useLoaderData<typeof loader>();
  return <About CONSTANTS={content} />;
}