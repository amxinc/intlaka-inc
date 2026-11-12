import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";

export default async function NotFound() {
  const { locale, t } = await getDictionary();
  return (
    <>
      <title>{`${t.notFound.meta.title} | Intlaka`}</title>
      <PageHero
        tag={t.notFound.tag}
        title={t.notFound.title}
        subtitle={t.notFound.text}
        actions={
          <Button href={localePath(locale, "/")} variant="light">
            {t.common.backHome}
          </Button>
        }
      />
    </>
  );
}
