import type { ReactNode } from "react";
import { Boxes, FlaskConical, LayoutGrid, Sparkles } from "lucide-react";
import { ListMockup } from "@/components/mockups/ListMockup";
import { Reveal } from "@/components/ui/Reveal";
import { Stage } from "@/components/ui/Stage";
import { APP_ICONS, COMPANY_ICONS, PROJECT_ICONS, SECTOR_STROKE } from "@/content/icons";
import type { Dictionary } from "@/i18n/dictionaries/en";

function Card({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-[10px] border border-line p-8 max-[809px]:p-5">
      <div className="flex max-w-[380px] flex-col gap-2">
        <h2 className="font-display text-[20px] leading-[1.3] font-normal text-ink">{title}</h2>
        <p className="font-body text-[15px] leading-[1.55] font-light text-slate">{text}</p>
      </div>
      <Stage className="min-h-[360px] flex-1 max-[809px]:min-h-0">{children}</Stage>
    </div>
  );
}

const headerIcon = "size-4 text-brand";

/** Four cards right under the hero: the companies, the apps, the research and the talent programme. */
export function FeatureBento({ t }: { t: Pick<Dictionary, "home" | "mockups" | "common" | "group" | "countdown"> }) {
  const b = t.home.bento;
  const { companies, apps, projects } = t.group;
  return (
    <div className="grid w-full max-w-[1464px] grid-cols-2 gap-5 px-8 pt-8 max-[1099px]:grid-cols-1 max-[809px]:gap-3 max-[809px]:px-5 max-[809px]:pt-5">
      <Card title={b.companies.title} text={b.companies.text}>
        <ListMockup
          title={t.mockups.group.title}
          icon={<Boxes className={headerIcon} strokeWidth={1.8} aria-hidden />}
          note={t.mockups.group.note}
          rows={companies.map((company) => {
            const Icon = COMPANY_ICONS[company.id];
            return { name: company.name, detail: company.sector, icon: <Icon strokeWidth={SECTOR_STROKE} aria-hidden /> };
          })}
        />
      </Card>
      <Card title={b.apps.title} text={b.apps.text}>
        <ListMockup
          title={t.mockups.apps.title}
          icon={<LayoutGrid className={headerIcon} strokeWidth={1.8} aria-hidden />}
          note={t.mockups.apps.note}
          rows={[
            { name: apps.rose.name, detail: apps.rose.kind, status: t.countdown.dateShort, icon: <APP_ICONS.rose strokeWidth={SECTOR_STROKE} aria-hidden /> },
            { name: apps.hera.name, detail: apps.hera.kind, status: t.common.comingSoon, icon: <APP_ICONS.hera strokeWidth={SECTOR_STROKE} aria-hidden /> },
            { name: apps.mimi.name, detail: apps.mimi.kind, status: t.common.comingSoon, icon: <APP_ICONS.mimi strokeWidth={SECTOR_STROKE} aria-hidden /> },
          ]}
        />
      </Card>
      <Reveal className="h-full">
        <Card title={b.projects.title} text={b.projects.text}>
          <ListMockup
            title={t.mockups.projects.title}
            badge={t.common.inResearch}
            icon={<FlaskConical className={headerIcon} strokeWidth={1.8} aria-hidden />}
            note={t.mockups.projects.note}
            rows={projects.map((project) => {
              const Icon = PROJECT_ICONS[project.id];
              return { name: project.name, detail: project.kind, icon: <Icon strokeWidth={SECTOR_STROKE} aria-hidden /> };
            })}
          />
        </Card>
      </Reveal>
      <Reveal className="h-full" delay={0.08}>
        <Card title={b.studio.title} text={b.studio.text}>
          <ListMockup
            title={t.mockups.studio.title}
            icon={<Sparkles className={headerIcon} strokeWidth={1.8} aria-hidden />}
            note={t.mockups.studio.note}
            rows={t.mockups.studio.rows}
          />
        </Card>
      </Reveal>
    </div>
  );
}
