import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ngo/Navbar";
import { Hero } from "@/components/ngo/Hero";
import { About } from "@/components/ngo/About";
import { Mission } from "@/components/ngo/Mission";
import { Vision } from "@/components/ngo/Vision";
import { Support } from "@/components/ngo/Support";
import { Contact } from "@/components/ngo/Contact";
import { Footer } from "@/components/ngo/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Guru Ram Das Ji Niwas | Serving Humanity with Compassion" },
      {
        name: "description",
        content:
          "Sri Guru Ram Das Ji Niwas is a non-profit initiative supporting children, students, elderly people, and those in need through education, healthcare, care, and community support.",
      },
      {
        property: "og:title",
        content: "Sri Guru Ram Das Ji Niwas | Serving Humanity with Compassion",
      },
      {
        property: "og:description",
        content:
          "A non-profit initiative supporting children, students, elderly people, and those in need through education, healthcare, care, and community support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Vision />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
