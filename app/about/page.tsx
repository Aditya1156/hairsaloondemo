import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | Luxe Hair Studio",
  description: "Learn about our story, our mission, and meet the talented team behind Luxe Hair Studio.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
