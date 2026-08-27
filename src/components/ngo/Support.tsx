import { Heart, HandHeart } from "lucide-react";

export function Support() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="support" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="hero-cta relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Together, We Can Make a Difference
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Every act of kindness can change someone's life. Join us in our
            mission to support children, elderly people, and communities in
            need.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-sm transition-all hover:shadow-md hover:brightness-95 sm:w-auto"
            >
              <Heart className="h-4 w-4" />
              Support Us
            </a>
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              <HandHeart className="h-4 w-4" />
              Become a Volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
