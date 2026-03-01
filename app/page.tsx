import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import GalleryPreview from "@/components/GalleryPreview";
import MastersCircle from "@/components/MastersCircle";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import InstagramSection from "@/components/InstagramSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <GalleryPreview />
      <MastersCircle />
      <TeamSection />
      <Testimonials />
      <WhyChooseUs />
      <ContactForm />
      <InstagramSection />
    </>
  );
}
