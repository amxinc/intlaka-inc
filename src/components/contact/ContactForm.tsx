"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Mail } from "lucide-react";
import { sendContactMessage } from "@/app/[lang]/contact/actions";
import { mailtoHref } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePath, type Locale } from "@/i18n/config";
import { PROFILES, INTERESTS, LIMITS, type ContactField, type ContactState, type ContactValues } from "@/lib/contact-schema";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

type Props = { locale: Locale; t: Dictionary["contact"]["form"] };

const inputClass =
  "w-full rounded-[8px] border border-line bg-white px-3.5 py-3 font-body text-[15px] text-ink transition-colors placeholder:text-muted hover:border-ink/40 focus:border-brand focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand/30 aria-[invalid=true]:border-danger";

export function ContactForm(props: Props) {
  // Remounting the form gives a clean slate after a successful send.
  const [formKey, setFormKey] = useState(0);
  return <FormBody key={formKey} {...props} onReset={() => setFormKey((k) => k + 1)} />;
}

function FormBody({ locale, t, onReset }: Props & { onReset: () => void }) {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContactMessage, { status: "idle" });
  const id = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const values: Partial<ContactValues> = state.status === "invalid" || state.status === "error" ? state.values : {};
  const errors = state.status === "invalid" ? state.errors : {};

  // Move focus to the first invalid field, or to the status message.
  useEffect(() => {
    if (state.status === "invalid") {
      const first = (["name", "email", "consent"] as ContactField[]).find((f) => state.errors[f]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    } else if (state.status === "success" || state.status === "error") {
      statusRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-start gap-5 rounded-[12px] border border-brand/20 bg-brand-soft/50 p-8 outline-none"
      >
        <CircleCheck className="size-9 text-brand" strokeWidth={1.5} aria-hidden />
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-[24px] leading-tight font-light text-ink">{t.successTitle}</h2>
          <p className="font-body text-[16px] leading-[1.6] text-ink-soft">{t.successText}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-11 cursor-pointer items-center rounded-[6px] border border-ink px-5 font-body text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {t.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  const errorText = (field: ContactField) => {
    const code = errors[field];
    return code ? t.errors[code] : undefined;
  };

  // If the server cannot send the message, the visitor can still send what they wrote by email.
  const fallbackMail =
    state.status === "error"
      ? `${mailtoHref}?body=${encodeURIComponent([values.name, values.company, values.message].filter(Boolean).join("\n"))}`
      : null;

  return (
    <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5" aria-describedby={`${id}-status`}>
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot, hidden from people and assistive technology. */}
      <div aria-hidden className="absolute -start-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div id={`${id}-status`} ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {state.status === "invalid" && (
          <p className="flex items-center gap-2 rounded-[8px] bg-brand-soft px-4 py-3 font-body text-[14px] text-ink">
            <CircleAlert className="size-4 shrink-0" aria-hidden />
            {t.errors.fixFields}
          </p>
        )}
        {state.status === "error" && (
          <div className="flex flex-col items-start gap-3 rounded-[8px] bg-brand-soft px-4 py-3">
            <p className="flex items-center gap-2 font-body text-[14px] text-ink">
              <CircleAlert className="size-4 shrink-0" aria-hidden />
              {t.errors.generic}
            </p>
            {fallbackMail && (
              <a href={fallbackMail} className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-brand underline underline-offset-4">
                <Mail className="size-4" strokeWidth={1.8} aria-hidden />
                {t.sendByEmail}
              </a>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
        <Field id={`${id}-name`} label={t.name} required requiredLabel={t.required} error={errorText("name")}>
          {(props) => (
            <input {...props} name="name" type="text" autoComplete="name" maxLength={LIMITS.short} defaultValue={values.name} className={inputClass} />
          )}
        </Field>
        <Field id={`${id}-company`} label={t.company}>
          {(props) => (
            <input
              {...props}
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={LIMITS.short}
              defaultValue={values.company}
              className={inputClass}
            />
          )}
        </Field>
        <Field id={`${id}-email`} label={t.email} required requiredLabel={t.required} error={errorText("email")}>
          {(props) => (
            <input
              {...props}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              dir="ltr"
              maxLength={LIMITS.short}
              defaultValue={values.email}
              className={cn(inputClass, "text-start rtl:text-right")}
            />
          )}
        </Field>
        <Field id={`${id}-phone`} label={t.phone} hint={t.phoneHint}>
          {(props) => (
            <input
              {...props}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              maxLength={40}
              defaultValue={values.phone}
              className={cn(inputClass, "rtl:text-right")}
            />
          )}
        </Field>
        <Field id={`${id}-role`} label={t.role}>
          {(props) => (
            <input
              {...props}
              name="role"
              type="text"
              autoComplete="organization-title"
              placeholder={t.rolePlaceholder}
              maxLength={LIMITS.short}
              defaultValue={values.role}
              className={inputClass}
            />
          )}
        </Field>
        <Field id={`${id}-type`} label={t.profile}>
          {(props) => (
            <select {...props} name="profile" defaultValue={values.profile ?? ""} className={cn(inputClass, "cursor-pointer appearance-none bg-[length:16px] bg-no-repeat pe-10 ltr:bg-[right_14px_center] rtl:bg-[left_14px_center]")} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b6b6b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
              <option value="">{t.select}</option>
              {PROFILES.map((type) => (
                <option key={type} value={type}>
                  {t.profiles[type]}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="pb-3 font-display text-[14px] font-medium text-ink">{t.interests}</legend>
        <div className="grid grid-cols-2 gap-2.5 max-[640px]:grid-cols-1">
          {INTERESTS.map((interest) => (
            <label
              key={interest}
              className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-line px-3.5 py-3 font-body text-[14.5px] text-ink-soft transition-colors hover:border-ink/40 has-[:checked]:border-brand has-[:checked]:bg-brand-soft/50 has-[:checked]:text-ink"
            >
              <input
                type="checkbox"
                name="interests"
                value={interest}
                defaultChecked={values.interests?.includes(interest)}
                className="size-4 shrink-0 cursor-pointer accent-ink"
              />
              {t.interestOptions[interest]}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id={`${id}-message`} label={t.message}>
        {(props) => (
          <textarea
            {...props}
            name="message"
            rows={5}
            maxLength={LIMITS.message}
            placeholder={t.messagePlaceholder}
            defaultValue={values.message}
            className={cn(inputClass, "resize-y")}
          />
        )}
      </Field>

      <div className="flex flex-col gap-1.5">
        <label className="flex cursor-pointer items-start gap-3 font-body text-[14px] leading-[1.55] text-slate">
          <input
            type="checkbox"
            name="consent"
            required
            defaultChecked={values.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${id}-consent-error` : undefined}
            className="mt-[3px] size-4 shrink-0 cursor-pointer accent-ink"
          />
          <span>
            {t.consentBefore}{" "}
            <Link href={localePath(locale, routes.privacy)} className="text-brand underline underline-offset-2" target="_blank">
              {t.consentLink}
            </Link>
            {t.consentAfter}
          </span>
        </label>
        {errors.consent && (
          <p id={`${id}-consent-error`} className="ps-7 font-body text-[13px] text-danger">
            {t.errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[6px] bg-ink px-6 font-body text-[15px] font-semibold text-white transition-colors hover:bg-brand disabled:cursor-wait disabled:opacity-70"
      >
        {pending && <LoaderCircle className="size-4 animate-spin" aria-hidden />}
        {pending ? t.sending : t.submit}
      </button>
    </form>
  );
}

type FieldRenderProps = {
  id: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  "aria-required"?: boolean;
};

function Field({
  id,
  label,
  hint,
  error,
  required,
  requiredLabel,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  requiredLabel?: string;
  children: (props: FieldRenderProps) => ReactNode;
}) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-center gap-1 font-display text-[14px] font-medium text-ink">
        {label}
        {required && (
          <span className="text-danger" aria-hidden>
            *
          </span>
        )}
        {required && <span className="sr-only">({requiredLabel})</span>}
      </label>
      {children({ id, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy, "aria-required": required || undefined })}
      {hint && !error && (
        <p id={`${id}-hint`} className="font-body text-[12.5px] text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="font-body text-[13px] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
