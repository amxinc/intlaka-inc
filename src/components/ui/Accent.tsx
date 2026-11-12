import { Fragment } from "react";

/** Renders a title, setting the words wrapped in *asterisks* in the accent face. */
export function Accent({ text }: { text: string }) {
  return text.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith("*") ? (
      <span key={i} className="type-accent">
        {part.slice(1, -1)}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
