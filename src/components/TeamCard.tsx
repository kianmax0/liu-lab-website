import Image from "next/image";
import type { Member } from "@/data/team";

interface TeamCardProps {
  member: Member;
  large?: boolean; // used for the PI card
}

/** Returns initials from full name (max 2 chars) */
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamCard({ member, large = false }: TeamCardProps) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      {/* Photo or initials placeholder */}
      <div
        className={`relative overflow-hidden bg-[var(--bg-off)] ${
          large ? "w-52 h-52 rounded-2xl" : "w-40 h-40 rounded-xl"
        }`}
      >
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
            sizes={large ? "208px" : "160px"}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className={`font-semibold text-[var(--fg-2)] ${
                large ? "text-4xl" : "text-2xl"
              }`}
            >
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {/* Hover overlay with research interests */}
        <div className="absolute inset-0 bg-[var(--fg)]/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3">
          <p className="text-[var(--bg)] text-[12px] leading-snug">
            {member.interests}
          </p>
        </div>
      </div>

      {/* Name */}
      <p
        className={`mt-3 font-semibold text-[var(--fg)] tracking-tight ${
          large ? "text-[19px]" : "text-[16px]"
        }`}
      >
        {member.website ? (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-2"
          >
            {member.name}
          </a>
        ) : (
          member.name
        )}
      </p>

      {/* Role */}
      <p
        className={`text-[var(--fg-2)] ${large ? "text-[15px] mt-1" : "text-[13px] mt-0.5"}`}
      >
        {member.role}
      </p>
    </div>
  );
}
