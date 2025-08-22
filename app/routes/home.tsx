import type { Route } from "./+types/home";
import About from "~/about/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3D Printing UG" },
    { name: "3D Printing UG", content: "An unofficial guide into 3d printing!" },
  ];
}

export default function Home() {
  return <About />
}
