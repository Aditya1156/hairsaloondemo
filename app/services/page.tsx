import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services | Luxe Hair Studio",
  description: "Explore our premium hair services including haircuts, coloring, styling, bridal hair, and more.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
