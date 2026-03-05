import type { Publication } from "@/data/publications";

interface PublicationEntryProps {
  pub: Publication;
}

export default function PublicationEntry({ pub }: PublicationEntryProps) {
  const hasLinks = pub.pdfUrl || pub.codeUrl || pub.doiUrl;

  return (
    <article className="group py-5 border-b border-[var(--border)] last:border-b-0">
      {/* Title */}
      <h3 className="text-[15px] font-semibold text-[var(--fg)] leading-snug mb-1.5 tracking-tight">
        {pub.title}
      </h3>

      {/* Authors */}
      <p className="text-[13px] text-[var(--fg-2)] mb-1 leading-relaxed">
        {pub.authors.map((author, idx) => (
          <span key={idx}>
            {author.labMember ? (
              <span className="font-semibold text-[var(--fg)] underline underline-offset-2 decoration-[var(--border)]">
                {author.name}
              </span>
            ) : (
              author.name
            )}
            {idx < pub.authors.length - 1 && ", "}
          </span>
        ))}
      </p>

      {/* Venue + links on same line */}
      <div className="flex items-center gap-4 flex-wrap">
        <p className="text-[13px] text-[var(--fg-2)] italic">{pub.venue}</p>

        {hasLinks && (
          <div className="flex gap-4">
            {pub.pdfUrl && (
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-[var(--fg-2)] underline underline-offset-2 decoration-[var(--border)] hover:text-[var(--fg)] hover:decoration-[var(--fg)] transition-all duration-150 font-medium"
              >
                PDF
              </a>
            )}
            {pub.codeUrl && (
              <a
                href={pub.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-[var(--fg-2)] underline underline-offset-2 decoration-[var(--border)] hover:text-[var(--fg)] hover:decoration-[var(--fg)] transition-all duration-150 font-medium"
              >
                Code
              </a>
            )}
            {pub.doiUrl && (
              <a
                href={pub.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-[var(--fg-2)] underline underline-offset-2 decoration-[var(--border)] hover:text-[var(--fg)] hover:decoration-[var(--fg)] transition-all duration-150 font-medium"
              >
                View →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
