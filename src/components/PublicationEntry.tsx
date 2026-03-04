import type { Publication } from "@/data/publications";

interface PublicationEntryProps {
  pub: Publication;
}

export default function PublicationEntry({ pub }: PublicationEntryProps) {
  const hasLinks = pub.pdfUrl || pub.codeUrl || pub.doiUrl;

  return (
    <article className="group py-5 border-b border-[#e5e5ea] last:border-b-0">
      {/* Title */}
      <h3 className="text-[15px] font-semibold text-[#1d1d1f] leading-snug mb-1.5 tracking-tight">
        {pub.title}
      </h3>

      {/* Authors */}
      <p className="text-[13px] text-[#86868b] mb-1 leading-relaxed">
        {pub.authors.map((author, idx) => (
          <span key={idx}>
            {author.labMember ? (
              <span className="font-semibold text-[#1d1d1f] underline underline-offset-2 decoration-[#d2d2d7]">
                {author.name}
              </span>
            ) : (
              author.name
            )}
            {idx < pub.authors.length - 1 && ", "}
          </span>
        ))}
      </p>

      {/* Venue */}
      <p className="text-[13px] text-[#86868b] italic mb-2">{pub.venue}</p>

      {/* Links — only shown on hover of the article */}
      {hasLinks && (
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {pub.pdfUrl && (
            <a
              href={pub.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#1d1d1f] underline underline-offset-2 decoration-[#d2d2d7] hover:decoration-[#1d1d1f] transition-all duration-150 font-medium"
            >
              PDF
            </a>
          )}
          {pub.codeUrl && (
            <a
              href={pub.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#1d1d1f] underline underline-offset-2 decoration-[#d2d2d7] hover:decoration-[#1d1d1f] transition-all duration-150 font-medium"
            >
              Code
            </a>
          )}
          {pub.doiUrl && (
            <a
              href={pub.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#1d1d1f] underline underline-offset-2 decoration-[#d2d2d7] hover:decoration-[#1d1d1f] transition-all duration-150 font-medium"
            >
              DOI
            </a>
          )}
        </div>
      )}
    </article>
  );
}
