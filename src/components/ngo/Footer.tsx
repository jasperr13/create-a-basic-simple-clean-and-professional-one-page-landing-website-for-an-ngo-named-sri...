import { Heart } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-foreground">
              Sri Guru Ram Das Ji Niwas
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Serving Humanity with Love, Care & Compassion
            </p>
          </div>

          <nav aria-label="Quick links">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Sri Guru Ram Das Ji Niwas. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" />{" "}
            for humanity
          </p>
        </div>
      </div>
    </footer>
  );
}
