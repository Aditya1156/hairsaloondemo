import type { Metadata } from "next";
import GalleryPageContent from "./GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery | Luxe Hair Studio",
  description: "Browse our gallery of stunning hair transformations, styles, and coloring work.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
