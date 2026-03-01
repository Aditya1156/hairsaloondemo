import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Luxe Hair Studio",
  description: "Get in touch with Luxe Hair Studio. Book your appointment, find our location, or send us a message.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
