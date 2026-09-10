import type { CollectionConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Contenu" },
  access: { read: () => true },
  upload: {
    staticDir: path.resolve(dirname, "../../public/uploads"),
    mimeTypes: ["image/*"],
  },
  fields: [
    { name: "alt", type: "text", required: true, label: "Texte alternatif" },
  ],
};
