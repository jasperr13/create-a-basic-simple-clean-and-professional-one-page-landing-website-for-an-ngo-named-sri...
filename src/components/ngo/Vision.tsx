import visionImage from "@/assets/vision.jpg";

export function Vision() {
  return (
    <section id="vision" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Vision
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Better Future Through Seva
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We believe that education, healthcare, compassion, and selfless
            service can create meaningful change in society. Our vision is to
            build a community where nobody feels alone or helpless.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Education that opens doors of opportunity",
              "Healthcare that reaches the unreached",
              "Compassion that heals and uplifts",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
            <img
              src={visionImage}
              alt="Volunteers and community members united in service"
              width={1024}
              height={720}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
