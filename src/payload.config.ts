import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Experience } from "./collections/Experience";
import { Freelance } from "./collections/Freelance";
import { Education } from "./collections/Education";
import { Hero } from "./globals/Hero";
import { About } from "./globals/About";
import { Publication } from "./globals/Publication";
import { Skills } from "./globals/Skills";
import { Contact } from "./globals/Contact";
import { Site } from "./globals/Site";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: "· Cheikh Oumar Sy" },
  },
  collections: [Projects, Experience, Freelance, Education, Media, Users],
  globals: [Hero, About, Publication, Skills, Contact, Site],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || "" },
  }),
});
