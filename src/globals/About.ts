import type { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  admin: { group: "Sections" },
  access: { read: () => true },
  fields: [
    { name: "lead", type: "textarea", required: true, label: "Accroche" },
    { name: "body", type: "array", label: "Paragraphes", fields: [{ name: "value", type: "textarea", required: true }] },
    { name: "statYears", type: "text", required: true, defaultValue: "3+ ans" },
    { name: "statProjects", type: "text", required: true, defaultValue: "5 projets" },
    { name: "statPublication", type: "text", required: true, defaultValue: "1 publication" },
    { name: "statNote", type: "text", required: true, defaultValue: "Zenodo, 2026" },
    { name: "portraitSrc", type: "text", required: true, defaultValue: "/img/portrait.webp" },
    { name: "portraitFallback", type: "text", defaultValue: "/img/portrait.jpg" },
    { name: "portraitAlt", type: "text", required: true, defaultValue: "Cheikh Oumar Sy, ingénieur en génie civil" },
    { name: "facts", type: "array", label: "Faits", fields: [
      { name: "k", type: "text", required: true },
      { name: "v", type: "text", required: true },
    ] },
  ],
};
