import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["index", "title", "type"],
    group: "Contenu",
  },
  access: { read: () => true },
  fields: [
    { name: "index", type: "text", required: true, admin: { description: "Numéro d'index, ex. 01" } },
    { name: "order", type: "number", required: true, defaultValue: 0, admin: { description: "Ordre d'affichage (croissant)" } },
    { name: "type", type: "text", required: true, label: "Type / eyebrow" },
    { name: "title", type: "text", required: true, label: "Titre" },
    { name: "fieldLabel", type: "text", required: true, label: "Légende du visuel" },
    { name: "desc", type: "textarea", required: true, label: "Description" },
    {
      name: "specs",
      type: "array",
      label: "Spécifications",
      fields: [
        { name: "k", type: "text", required: true, label: "Clé" },
        { name: "v", type: "text", required: true, label: "Valeur" },
      ],
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      fields: [{ name: "value", type: "text", required: true }],
    },
    {
      name: "images",
      type: "array",
      label: "Rendus (images web)",
      admin: { description: "Laisser vide pour afficher le plan schématique (blueprint)." },
      fields: [
        { name: "src", type: "text", required: true, admin: { description: "Chemin WebP dans /public, ex. /projects/nafi-1.webp" } },
        { name: "fallback", type: "text", admin: { description: "JPEG de repli optionnel" } },
        { name: "alt", type: "text", required: true },
      ],
    },
  ],
};
