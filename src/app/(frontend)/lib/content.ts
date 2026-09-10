import { getPayload } from "payload";
import config from "@payload-config";

let cached: Awaited<ReturnType<typeof getPayload>> | null = null;

export async function payloadClient() {
  if (!cached) cached = await getPayload({ config });
  return cached;
}

export async function getContent() {
  const payload = await payloadClient();
  const [hero, about, publication, skills, contact, site, projects, experience, freelance, education] =
    await Promise.all([
      payload.findGlobal({ slug: "hero" }),
      payload.findGlobal({ slug: "about" }),
      payload.findGlobal({ slug: "publication" }),
      payload.findGlobal({ slug: "skills" }),
      payload.findGlobal({ slug: "contact" }),
      payload.findGlobal({ slug: "site" }),
      payload.find({ collection: "projects", limit: 100, sort: "order" }),
      payload.find({ collection: "experience", limit: 100, sort: "order" }),
      payload.find({ collection: "freelance", limit: 100, sort: "order" }),
      payload.find({ collection: "education", limit: 100, sort: "order" }),
    ]);

  return {
    hero,
    about,
    publication,
    skills,
    contact,
    site,
    projects: projects.docs,
    experience: experience.docs,
    freelance: freelance.docs,
    education: education.docs,
  };
}
