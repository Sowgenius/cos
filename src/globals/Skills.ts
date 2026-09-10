import type { GlobalConfig } from "payload";

export const Skills: GlobalConfig = {
  slug: "skills",
  admin: { group: "Sections" },
  access: { read: () => true },
  fields: [
    {
      name: "technical",
      type: "array",
      label: "Compétences techniques",
      fields: [{ name: "value", type: "text", required: true }],
    },
    {
      name: "tools",
      type: "array",
      label: "Outils & logiciels",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "key", type: "checkbox", label: "Maîtrise quotidienne (mise en avant)", defaultValue: false },
      ],
    },
    {
      name: "personal",
      type: "array",
      label: "Compétences personnelles",
      fields: [{ name: "value", type: "text", required: true }],
    },
  ],
};
