import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36"
    >
      {/* soft decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Heart className="h-3.5 w-3.5" />
            Non-Profit Initiative
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Serving Humanity with{" "}
            <span className="text-primary">Love, Care</span> & Compassion
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Sri Guru Ram Das Ji Niwas is dedicated to supporting children,
            students, elderly people, and those in need through education,
            healthcare, care, and community support.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#about"
              onClick={scrollTo("#about")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105 sm:w-auto"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-accent px-7 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <Heart className="h-4 w-4" />
              Support Our Mission
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <img
              src={heroImage}
              alt="Volunteers teaching and caring for children in the community"
              width={1024}
              height={720}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-card px-5 py-4 shadow-lg ring-1 ring-border sm:block">
            <p className="text-2xl font-bold text-primary">Seva</p>
            <p className="text-xs font-medium text-muted-foreground">
              Selfless service for all
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
