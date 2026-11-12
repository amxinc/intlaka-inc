import { siteConfig } from "@/config/site";
import { localeDir, localeNames, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { ContactValues } from "@/lib/contact-schema";
import { fill } from "@/lib/utils";

/** Monochrome palette of the site (see globals.css). Email clients need literal colors. */
const COLOR = {
  ink: "#0a0a0a",
  slate: "#525252",
  muted: "#6e6e6e",
  fog: "#a0a0a0",
  line: "#e2e2e2",
  mist: "#f4f4f4",
  white: "#ffffff",
};

const LATIN_FONT = "Geist,Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const ARABIC_FONT = "'IBM Plex Sans Arabic',Tahoma,'Segoe UI',Arial,sans-serif";
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500&family=IBM+Plex+Sans+Arabic:wght@300;400;500&display=swap";

/** Punctuation differs by language: French spaces its colons, Arabic has its own comma. */
const COLON: Record<Locale, string> = { en: ":", ar: ":", fr: "\u00a0:" };
const LIST_SEPARATOR: Record<Locale, string> = { en: ", ", ar: "، ", fr: ", " };

const SUBJECT_PART_MAX = 60;
const PREVIEW_MAX = 120;

type Input = ContactValues & { locale: Locale };
type Strings = { email: Dictionary["contact"]["email"]; form: Dictionary["contact"]["form"] };

const clean = (value: string) => value.replace(/\s+/g, " ").trim();

const clip = (value: string, max: number) => {
  const text = clean(value);
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const mailto = (email: string) => `mailto:${encodeURIComponent(email).replace("%40", "@")}`;

/** Everything the template shows, resolved and translated, with unset optional fields left out. */
function resolve(values: Input, { email, form }: Strings) {
  const { labels } = email;
  const profile = form.profiles[values.profile as keyof typeof form.profiles];
  const interests = values.interests.map((i) => form.interestOptions[i as keyof typeof form.interestOptions]).filter(Boolean);
  // The organisation is optional: without one, the subject ends on the name.
  const subject = fill(email.subject, {
    name: clip(values.name, SUBJECT_PART_MAX),
    company: clip(values.company, SUBJECT_PART_MAX),
  }).replace(/\s*·\s*$/, "");

  return {
    subject,
    interests,
    firstName: values.name.split(/\s+/)[0],
    site: siteConfig.url.replace(/^https?:\/\//, ""),
    rows: [
      { label: labels.company, value: values.company },
      { label: labels.role, value: values.role },
      { label: labels.profile, value: profile ?? "" },
      { label: labels.email, value: values.email, href: mailto(values.email), ltr: true },
      { label: labels.phone, value: values.phone, href: `tel:${values.phone.replace(/[^\d+]/g, "")}`, ltr: true },
    ].filter((row) => row.value),
  };
}

export function renderContactEmail(values: Input, strings: Strings) {
  const data = resolve(values, strings);
  return { subject: data.subject, html: renderHtml(values, strings, data), text: renderText(values, strings, data) };
}

type Resolved = ReturnType<typeof resolve>;

function renderText(values: Input, { email }: Strings, data: Resolved) {
  const { labels } = email;
  const line = (label: string, value: string) => `${label}${COLON[values.locale]} ${value}`;
  return [
    email.eyebrow,
    "",
    line(labels.name, values.name),
    ...data.rows.map((row) => line(row.label, row.value)),
    ...(data.interests.length ? [line(labels.interests, data.interests.join(LIST_SEPARATOR[values.locale]))] : []),
    line(labels.language, localeNames[values.locale]),
    "",
    line(email.messageTitle, ""),
    values.message || email.noMessage,
    "",
    "--",
    fill(email.footer, { site: data.site, name: data.firstName }),
  ].join("\n");
}

function renderHtml(values: Input, { email }: Strings, data: Resolved) {
  const dir = localeDir[values.locale];
  const arabic = values.locale === "ar";
  const font = arabic ? ARABIC_FONT : LATIN_FONT;
  const align = dir === "rtl" ? "right" : "left";
  const opposite = dir === "rtl" ? "left" : "right";
  // Letter-spacing breaks joined Arabic letters.
  const tight = (px: string) => (arabic ? "" : `letter-spacing:${px};`);

  const name = escapeHtml(values.name);
  const firstName = escapeHtml(data.firstName);
  const company = escapeHtml(values.company);
  const role = escapeHtml(values.role);
  const preview = escapeHtml(clip(values.message || [values.name, values.company].filter(Boolean).join(" · "), PREVIEW_MAX));
  const logo = `${siteConfig.url}/email/intlaka-mark-white.png`;
  const replyHref = `${mailto(values.email)}?subject=${encodeURIComponent(`Re: ${data.subject}`)}`;

  const rows = data.rows
    .map(({ label, value, href, ltr }) => {
      const safe = escapeHtml(value);
      const content = href
        ? `<a href="${escapeHtml(href)}" style="color:${COLOR.ink};text-decoration:underline;">${safe}</a>`
        : safe;
      return detailRow(escapeHtml(label), ltr ? `<span dir="ltr">${content}</span>` : `<span dir="auto">${content}</span>`);
    })
    .join("");

  // In right-to-left mode the free space between pills sits on the left.
  const pillMargin = dir === "rtl" ? "0 0 6px 6px" : "0 6px 6px 0";
  const interests = data.interests.length
    ? detailRow(
        escapeHtml(email.labels.interests),
        data.interests
          .map(
            (interest) =>
              `<span style="display:inline-block;margin:${pillMargin};padding:5px 12px;border:1px solid ${COLOR.line};border-radius:999px;background-color:${COLOR.mist};font-size:13px;line-height:18px;color:${COLOR.ink};">${escapeHtml(interest)}</span>`,
          )
          .join(""),
        "padding-bottom:8px;",
      )
    : "";

  const message = values.message
    ? `<div dir="auto" style="padding:20px 22px;border-radius:10px;background-color:${COLOR.mist};font-size:15px;line-height:25px;color:${COLOR.ink};white-space:pre-wrap;word-break:break-word;">${escapeHtml(values.message)}</div>`
    : `<p style="margin:0;font-size:14px;line-height:22px;color:${COLOR.muted};">${escapeHtml(email.noMessage)}</p>`;

  function detailRow(label: string, value: string, cellStyle = "") {
    const cell = `padding-top:12px;padding-bottom:12px;border-top:1px solid ${COLOR.line};vertical-align:top;`;
    return `<tr><td class="ik-label" width="150" valign="top" style="${cell}padding-${opposite}:16px;width:150px;font-size:13px;line-height:21px;color:${COLOR.muted};">${label}</td><td style="${cell}${cellStyle}font-size:14px;line-height:21px;color:${COLOR.ink};word-break:break-word;">${value}</td></tr>`;
  }

  return `<!doctype html>
<html lang="${values.locale}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<meta name="format-detection" content="telephone=no,date=no,address=no,email=no">
<title>${escapeHtml(data.subject)}</title>
<link href="${FONTS_URL}" rel="stylesheet">
<style>
  :root { color-scheme: light only; supported-color-schemes: light only; }
  body { margin: 0; padding: 0; }
  @media (max-width: 600px) {
    .ik-outer { padding: 0 !important; }
    .ik-card { border-radius: 0 !important; border-left: 0 !important; border-right: 0 !important; }
    .ik-pad { padding-left: 22px !important; padding-right: 22px !important; }
    .ik-title { font-size: 25px !important; line-height: 32px !important; }
    .ik-source { display: none !important; }
    .ik-label { width: 112px !important; }
  }
</style>
</head>
<body dir="${dir}" style="margin:0;padding:0;background-color:${COLOR.mist};">
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;color:${COLOR.mist};font-size:1px;line-height:1px;">${preview}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" dir="${dir}" style="background-color:${COLOR.mist};">
<tr><td class="ik-outer" align="center" style="padding:32px 16px;">
  <table class="ik-card" role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" dir="${dir}" style="max-width:600px;border:1px solid ${COLOR.line};border-radius:12px;border-collapse:separate;overflow:hidden;background-color:${COLOR.white};font-family:${font};text-align:${align};">
    <tr><td class="ik-pad" bgcolor="${COLOR.ink}" style="padding:22px 36px;background-color:${COLOR.ink};border-radius:11px 11px 0 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td align="${align}" valign="middle">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" dir="ltr"><tr>
            <td valign="middle"><img src="${logo}" width="${arabic ? 30 : 26}" height="${arabic ? 30 : 26}" alt="Intlaka" style="display:block;border:0;"></td>
            ${arabic ? "" : `<td valign="middle" style="padding-left:9px;font-family:${LATIN_FONT};font-size:20px;line-height:24px;font-weight:500;letter-spacing:-0.4px;color:${COLOR.white};">Intlaka</td>`}
          </tr></table>
        </td>
        <td class="ik-source" align="${opposite}" valign="middle" style="font-size:12.5px;line-height:18px;color:${COLOR.fog};">${escapeHtml(email.source)}</td>
      </tr></table>
    </td></tr>

    <tr><td class="ik-pad" style="padding:36px 36px 30px;">
      <p style="margin:0 0 10px;font-size:13px;line-height:18px;font-weight:500;color:${COLOR.muted};">${escapeHtml(email.eyebrow)}</p>
      <h1 class="ik-title" style="margin:0;font-size:30px;line-height:38px;font-weight:300;${tight("-0.6px")}color:${COLOR.ink};"><span dir="auto">${name}</span></h1>
      <p style="margin:8px 0 0;font-size:15px;line-height:23px;color:${COLOR.slate};">${[role, company].filter(Boolean).map((part) => `<span dir="auto">${part}</span>`).join(" · ")}</p>
    </td></tr>

    <tr><td class="ik-pad" style="padding:0 36px 30px;">
      <p style="margin:0 0 10px;font-size:13px;line-height:18px;font-weight:500;color:${COLOR.ink};">${escapeHtml(email.messageTitle)}</p>
      ${message}
    </td></tr>

    <tr><td class="ik-pad" style="padding:0 36px 16px;">
      <p style="margin:0 0 12px;font-size:13px;line-height:18px;font-weight:500;color:${COLOR.ink};">${escapeHtml(email.detailsTitle)}</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" dir="${dir}" style="border-collapse:collapse;text-align:${align};">
        ${rows}${interests}
      </table>
    </td></tr>

    <tr><td class="ik-pad" style="padding:14px 36px 36px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" dir="${dir}"><tr>
        <td><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="${COLOR.ink}" style="border:1px solid ${COLOR.ink};border-radius:6px;background-color:${COLOR.ink};"><a href="${escapeHtml(replyHref)}" style="display:inline-block;padding:13px 22px;font-family:${font};font-size:14px;line-height:18px;font-weight:600;color:${COLOR.white};text-decoration:none;">${fill(escapeHtml(email.reply), { name: firstName })}</a></td></tr></table></td>
      </tr></table>
    </td></tr>

    <tr><td class="ik-pad" style="padding:18px 36px;border-top:1px solid ${COLOR.line};font-size:12.5px;line-height:19px;color:${COLOR.muted};">${fill(escapeHtml(email.footer), { site: escapeHtml(data.site), name: firstName })}<br><span style="color:${COLOR.fog};">${escapeHtml(email.labels.language)}${COLON[values.locale]} ${escapeHtml(localeNames[values.locale])}</span></td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}
