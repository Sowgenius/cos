import type { CollectionConfig } from "payload";

export const Freelance: CollectionConfig = {
  slug: "freelance",
  admin: { useAsTitle: "title", defaultColumns: ["title", "when"], group: "Contenu" },
  access: { read: () => true },
  fields: [
    { name: "order", type: "number", required: true, defaultValue: 0 },
    { name: "when", type: "text", required: true, label: "Période" },
    { name: "title", type: "text", required: true, label: "Titre" },
    { name: "body", type: "textarea", required: true, label: "Description" },
  ],
};
