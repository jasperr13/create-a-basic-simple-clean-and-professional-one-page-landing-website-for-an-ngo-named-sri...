import aboutImage from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
            <img
              src={aboutImage}
              alt="A young volunteer caring for an elderly person"
              width={1024}
              height={720}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Sri Guru Ram Das Ji Niwas
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Sri Guru Ram Das Ji Niwas is a non-profit initiative created with the
            vision of serving humanity and supporting people who need care and
            opportunities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our aim is to create a safe and supportive environment where
            children can receive education, elderly people can receive proper
            care, and people in need can receive help and support with dignity
            and respect.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: "100%", label: "Driven by Seva" },
              { value: "All", label: "Welcome Here" },
              { value: "Care", label: "With Dignity" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card px-3 py-4 text-center"
              >
                <p className="text-xl font-bold text-accent">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
