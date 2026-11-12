import type { Metadata, Viewport } from "next";
import { Amiri, Bodoni_Moda, Geist, Geist_Mono, IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { MotionProvider } from "@/components/layout/MotionProvider";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { configuredSocials, siteConfig } from "@/config/site";
import { localeDir, localePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { absoluteUrl } from "@/lib/seo";
import "../globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400", "500"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  preload: false,
});
// Accent for page titles: Bodoni Moda Italic for Latin scripts, Amiri for Arabic.
const bodoni = Bodoni_Moda({ variable: "--font-bodoni", subsets: ["latin"], style: "italic", axes: ["opsz"] });
const arabicSerif = Amiri({ variable: "--font-arabic-serif", subsets: ["arabic"], weight: "700", preload: false });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t.meta.defaultTitle, template: `%s | ${siteConfig.name}` },
    description: t.meta.description,
    keywords: t.meta.keywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale, t } = await getDictionary();
  const socials = configuredSocials().map((s) => s.href);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl(localePath(locale, "/")),
    logo: absoluteUrl("/android-chrome-512.png"),
    description: t.meta.description,
    alternateName: "انطلاقة",
    slogan: t.home.hero.titleLead + " " + t.home.hero.titleLink + " " + t.home.hero.titleAccent,
    founder: { "@type": "Person", name: siteConfig.founder },
    subOrganization: t.group.companies.map((company) => ({ "@type": "Organization", name: company.name, description: company.sector })),
    knowsLanguage: ["en", "fr", "ar"],
    email: siteConfig.contact.email,
    ...(socials.length ? { sameAs: socials } : {}),
  };

  return (
    <html
      lang={locale}
      dir={localeDir[locale]}
      className={`${geist.variable} ${geistMono.variable} ${inter.variable} ${arabic.variable} ${bodoni.variable} ${arabicSerif.variable}`}
    >
      <body className="min-h-dvh">
        <a
          href="#content"
          className="fixed start-3 top-3 z-[100] -translate-y-20 rounded-[6px] bg-ink px-4 py-2.5 font-body text-[14px] text-white transition-transform focus:translate-y-0"
        >
          {t.common.skipToContent}
        </a>
        <JsonLd data={organization} />
        <MotionProvider>
          <Navbar locale={locale} nav={t.nav} common={t.common} siteName={t.meta.siteName} />
          <div className="flex w-full flex-col items-center overflow-x-clip">
            <main id="content" tabIndex={-1} className="flex w-full flex-col items-center outline-none">
              {children}
            </main>
            <Footer locale={locale} t={t} />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
