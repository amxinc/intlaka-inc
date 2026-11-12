import type { ReactNode } from "react";
import { Accent } from "./Accent";
import { HorizonGlow, Orbits, PointField } from "./Orbits";
import { SectionTag } from "./SectionTag";

type PageHeroProps = {
  tag: string;
  /** Words wrapped in *asterisks* use the accent face. */
  title: string;
  subtitle: ReactNode;
  actions?: ReactNode;
};

/**
 * Top of every inner page: tag, the page's single h1, subtitle and optional actions.
 * Desktop: the text beside the orbits. Tablet and phone: the text alone, on one centred axis.
 */
export function PageHero({ tag, title, subtitle, actions }: PageHeroProps) {
  return (
    <div className="relative isolate flex w-full justify-center overflow-clip bg-night text-white">
      <PointField />
      <HorizonGlow />
      <div className="relative flex w-full max-w-[1400px] flex-col items-center px-8 pt-[176px] pb-[148px] desktop:grid desktop:grid-cols-[minmax(0,1fr)_auto] desktop:gap-x-14 desktop:pt-[152px] desktop:pb-[88px] phone:px-5 phone:pt-[124px] phone:pb-[96px]">
        <div className="flex max-w-[736px] flex-col items-center gap-5 text-center desktop:items-start desktop:text-start">
          <SectionTag dark>{tag}</SectionTag>
          <h1 className="type-page">
            <Accent text={title} />
          </h1>
          <p className="max-w-[580px] font-body text-[17px] leading-[1.6] text-pretty text-silver phone:text-[16px]">{subtitle}</p>
          {actions && <div className="flex flex-wrap items-center justify-center gap-3 pt-3 desktop:justify-start">{actions}</div>}
        </div>
        <Orbits className="hidden w-[clamp(260px,27vw,380px)] desktop:me-10 desktop:block" />
      </div>
    </div>
  );
}
