import { GraduationCap, HeartPulse, Users, HandHeart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: GraduationCap,
    title: "Free Education",
    description:
      "Providing education and learning opportunities to children and students who need support.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Support",
    description:
      "Helping people receive proper medical attention, treatment, and healthcare support.",
  },
  {
    icon: Users,
    title: "Elderly Care",
    description:
      "Providing care, respect, companionship, and support to elderly people.",
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description:
      "Helping families and individuals in need through care, resources, and community assistance.",
  },
];

export function Mission() {
  return (
    <section
      id="mission"
      className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Mission
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our mission is to serve humanity by providing essential support,
            opportunities, care, and compassion to those who need it most.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
