import Image from "next/image";
import { teamPhoto } from "@/content/team";
import { cn } from "@/lib/utils";

type PersonCardProps = { id: string; name: string; role: string; bio?: string; className?: string };

/** A member of the team. Photos are mapped by id in src/content/team.ts. */
export function PersonCard({ id, name, role, bio, className }: PersonCardProps) {
  return (
    <article className={cn("flex flex-col gap-6 rounded-[10px] bg-mist p-7 max-[809px]:p-6", className)}>
      <div className="flex items-center gap-4">
        <Image src={teamPhoto(id)} alt="" sizes="56px" className="size-14 shrink-0 rounded-full object-cover" />
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="font-display text-[20px] leading-tight font-normal text-ink">{name}</h3>
          <p className="font-body text-[14px] text-slate">{role}</p>
        </div>
      </div>
      {bio && <p className="font-body text-[15.5px] leading-[1.65] font-light text-slate">{bio}</p>}
    </article>
  );
}
