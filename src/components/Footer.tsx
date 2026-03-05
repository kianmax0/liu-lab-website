import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-40 border-t border-[var(--border)] bg-[var(--bg-off)]">
      <div className="max-w-[1400px] mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-[13px] font-semibold text-[var(--fg)] tracking-tight mb-2">
            {site.name}
          </p>
          <p className="text-[13px] text-[var(--fg-2)] leading-relaxed">
            {site.fullName}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[12px] font-semibold text-[var(--fg)] uppercase tracking-wider mb-3">
            Navigation
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/research", label: "Research" },
              { href: "/publications", label: "Publications" },
              { href: "/team", label: "Team" },
              { href: "/news", label: "News" },
              { href: "/lab-life", label: "Lab Life" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[13px] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[12px] font-semibold text-[var(--fg)] uppercase tracking-wider mb-3">
            Contact
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="text-[13px] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-200 block mb-3"
          >
            {site.contact.email}
          </a>
          <p className="text-[13px] text-[var(--fg-2)] whitespace-pre-line leading-relaxed">
            {site.contact.address}
          </p>

          {/* Social links */}
          <div className="flex gap-3 mt-4">
            {site.links.github && (
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-200"
              >
                GitHub
              </a>
            )}
            {site.links.googleScholar && (
              <a
                href={site.links.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-200"
              >
                Scholar
              </a>
            )}
            {site.links.twitter && (
              <a
                href={site.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-200"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pb-8">
        <p className="text-[12px] text-[var(--fg-2)]">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
