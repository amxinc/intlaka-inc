import { notFound } from "next/navigation";

// Any unknown path inside a locale renders the localized not-found page above.
export async function generateStaticParams() {
  return [{ rest: ["not-found"] }];
}

export default function CatchAll() {
  notFound();
}
