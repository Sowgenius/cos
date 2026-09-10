import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "projects_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"k" varchar NOT NULL,
  	"v" varchar NOT NULL
  );
  
  CREATE TABLE "projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "projects_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"upload_id" integer,
  	"src" varchar,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"index" varchar NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"type" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"field_label" varchar NOT NULL,
  	"desc" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "experience_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "experience" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"when" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"org" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "freelance" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"when" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "education" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"when" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"org" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumb_url" varchar,
  	"sizes_thumb_width" numeric,
  	"sizes_thumb_height" numeric,
  	"sizes_thumb_mime_type" varchar,
  	"sizes_thumb_filesize" numeric,
  	"sizes_thumb_filename" varchar,
  	"sizes_wide_url" varchar,
  	"sizes_wide_width" numeric,
  	"sizes_wide_height" numeric,
  	"sizes_wide_mime_type" varchar,
  	"sizes_wide_filesize" numeric,
  	"sizes_wide_filename" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"experience_id" integer,
  	"freelance_id" integer,
  	"education_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "hero" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"folio_label" varchar DEFAULT 'Portfolio · Ingénieur Structures' NOT NULL,
  	"name_line1" varchar DEFAULT 'Cheikh' NOT NULL,
  	"name_line2" varchar DEFAULT 'Oumar' NOT NULL,
  	"name_accent" varchar DEFAULT 'Sy' NOT NULL,
  	"sub" varchar NOT NULL,
  	"image_id" integer,
  	"image_src" varchar DEFAULT '/projects/nafi-1.webp',
  	"image_fallback" varchar DEFAULT '/projects/nafi-1.jpg',
  	"image_alt" varchar NOT NULL,
  	"image_caption" varchar NOT NULL,
  	"image_year" varchar DEFAULT '2024' NOT NULL,
  	"availability" varchar DEFAULT 'Disponible — stage 4 à 6 mois' NOT NULL,
  	"location" varchar DEFAULT 'Dakar, Sénégal' NOT NULL,
  	"domain" varchar DEFAULT 'Béton armé · Charpente métallique · Dynamique' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "about_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"k" varchar NOT NULL,
  	"v" varchar NOT NULL
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead" varchar NOT NULL,
  	"stat_years" varchar DEFAULT '3+ ans' NOT NULL,
  	"stat_projects" varchar DEFAULT '5 projets' NOT NULL,
  	"stat_publication" varchar DEFAULT '1 publication' NOT NULL,
  	"stat_note" varchar DEFAULT 'Zenodo, 2026' NOT NULL,
  	"portrait_id" integer,
  	"portrait_src" varchar DEFAULT '/img/portrait.webp',
  	"portrait_fallback" varchar DEFAULT '/img/portrait.jpg',
  	"portrait_alt" varchar DEFAULT 'Cheikh Oumar Sy, ingénieur en génie civil' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "publication_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "publication_side_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"k" varchar NOT NULL,
  	"v" varchar NOT NULL,
  	"accent" boolean DEFAULT false
  );
  
  CREATE TABLE "publication" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"sub" varchar NOT NULL,
  	"doi" varchar NOT NULL,
  	"doi_url" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "skills_technical" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "skills_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"key" boolean DEFAULT false
  );
  
  CREATE TABLE "skills_personal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "skills" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Disponible pour un stage de 4 à 6 mois.' NOT NULL,
  	"lead" varchar NOT NULL,
  	"email" varchar DEFAULT 'cheikhoumarsy05@gmail.com' NOT NULL,
  	"phone" varchar DEFAULT '+221 76 630 10 88' NOT NULL,
  	"phone_href" varchar DEFAULT '+221766301088' NOT NULL,
  	"linkedin" varchar DEFAULT 'https://www.linkedin.com/in/cheikh-oumar-sy-29912b23b' NOT NULL,
  	"github" varchar DEFAULT 'https://github.com/cheikhoumarsy05-eng' NOT NULL,
  	"location" varchar DEFAULT 'Dakar — Sénégal' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"brand" varchar DEFAULT 'Cheikh Oumar Sy' NOT NULL,
  	"cv_url" varchar DEFAULT '/cv-cheikh-oumar-sy.pdf' NOT NULL,
  	"footer_note" varchar DEFAULT 'Conçu à Dakar.' NOT NULL,
  	"section_titles_about" varchar DEFAULT 'À propos',
  	"section_titles_experience" varchar DEFAULT 'Expérience',
  	"section_titles_experience_lead" varchar DEFAULT 'Bureau de contrôle, conduite de travaux, chantier.',
  	"section_titles_research" varchar DEFAULT 'Recherche appliquée',
  	"section_titles_projects" varchar DEFAULT 'Projets',
  	"section_titles_projects_lead" varchar DEFAULT 'Conception, modélisation et calcul de bâtiments résidentiels — du volume à l''élément.',
  	"section_titles_freelance" varchar DEFAULT 'Freelance',
  	"section_titles_skills" varchar DEFAULT 'Compétences',
  	"section_titles_education" varchar DEFAULT 'Formation',
  	"section_titles_contact" varchar DEFAULT 'Contact',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "projects_specs" ADD CONSTRAINT "projects_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_tags" ADD CONSTRAINT "projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_images" ADD CONSTRAINT "projects_images_upload_id_media_id_fk" FOREIGN KEY ("upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_images" ADD CONSTRAINT "projects_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_points" ADD CONSTRAINT "experience_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_experience_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_freelance_fk" FOREIGN KEY ("freelance_id") REFERENCES "public"."freelance"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_body" ADD CONSTRAINT "about_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_facts" ADD CONSTRAINT "about_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about" ADD CONSTRAINT "about_portrait_id_media_id_fk" FOREIGN KEY ("portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "publication_points" ADD CONSTRAINT "publication_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."publication"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "publication_side_facts" ADD CONSTRAINT "publication_side_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."publication"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_technical" ADD CONSTRAINT "skills_technical_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_tools" ADD CONSTRAINT "skills_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_personal" ADD CONSTRAINT "skills_personal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_specs_order_idx" ON "projects_specs" USING btree ("_order");
  CREATE INDEX "projects_specs_parent_id_idx" ON "projects_specs" USING btree ("_parent_id");
  CREATE INDEX "projects_tags_order_idx" ON "projects_tags" USING btree ("_order");
  CREATE INDEX "projects_tags_parent_id_idx" ON "projects_tags" USING btree ("_parent_id");
  CREATE INDEX "projects_images_order_idx" ON "projects_images" USING btree ("_order");
  CREATE INDEX "projects_images_parent_id_idx" ON "projects_images" USING btree ("_parent_id");
  CREATE INDEX "projects_images_upload_idx" ON "projects_images" USING btree ("upload_id");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "experience_points_order_idx" ON "experience_points" USING btree ("_order");
  CREATE INDEX "experience_points_parent_id_idx" ON "experience_points" USING btree ("_parent_id");
  CREATE INDEX "experience_updated_at_idx" ON "experience" USING btree ("updated_at");
  CREATE INDEX "experience_created_at_idx" ON "experience" USING btree ("created_at");
  CREATE INDEX "freelance_updated_at_idx" ON "freelance" USING btree ("updated_at");
  CREATE INDEX "freelance_created_at_idx" ON "freelance" USING btree ("created_at");
  CREATE INDEX "education_updated_at_idx" ON "education" USING btree ("updated_at");
  CREATE INDEX "education_created_at_idx" ON "education" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumb_sizes_thumb_filename_idx" ON "media" USING btree ("sizes_thumb_filename");
  CREATE INDEX "media_sizes_wide_sizes_wide_filename_idx" ON "media" USING btree ("sizes_wide_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_experience_id_idx" ON "payload_locked_documents_rels" USING btree ("experience_id");
  CREATE INDEX "payload_locked_documents_rels_freelance_id_idx" ON "payload_locked_documents_rels" USING btree ("freelance_id");
  CREATE INDEX "payload_locked_documents_rels_education_id_idx" ON "payload_locked_documents_rels" USING btree ("education_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "hero_image_idx" ON "hero" USING btree ("image_id");
  CREATE INDEX "about_body_order_idx" ON "about_body" USING btree ("_order");
  CREATE INDEX "about_body_parent_id_idx" ON "about_body" USING btree ("_parent_id");
  CREATE INDEX "about_facts_order_idx" ON "about_facts" USING btree ("_order");
  CREATE INDEX "about_facts_parent_id_idx" ON "about_facts" USING btree ("_parent_id");
  CREATE INDEX "about_portrait_idx" ON "about" USING btree ("portrait_id");
  CREATE INDEX "publication_points_order_idx" ON "publication_points" USING btree ("_order");
  CREATE INDEX "publication_points_parent_id_idx" ON "publication_points" USING btree ("_parent_id");
  CREATE INDEX "publication_side_facts_order_idx" ON "publication_side_facts" USING btree ("_order");
  CREATE INDEX "publication_side_facts_parent_id_idx" ON "publication_side_facts" USING btree ("_parent_id");
  CREATE INDEX "skills_technical_order_idx" ON "skills_technical" USING btree ("_order");
  CREATE INDEX "skills_technical_parent_id_idx" ON "skills_technical" USING btree ("_parent_id");
  CREATE INDEX "skills_tools_order_idx" ON "skills_tools" USING btree ("_order");
  CREATE INDEX "skills_tools_parent_id_idx" ON "skills_tools" USING btree ("_parent_id");
  CREATE INDEX "skills_personal_order_idx" ON "skills_personal" USING btree ("_order");
  CREATE INDEX "skills_personal_parent_id_idx" ON "skills_personal" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "projects_specs" CASCADE;
  DROP TABLE "projects_tags" CASCADE;
  DROP TABLE "projects_images" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "experience_points" CASCADE;
  DROP TABLE "experience" CASCADE;
  DROP TABLE "freelance" CASCADE;
  DROP TABLE "education" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "hero" CASCADE;
  DROP TABLE "about_body" CASCADE;
  DROP TABLE "about_facts" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "publication_points" CASCADE;
  DROP TABLE "publication_side_facts" CASCADE;
  DROP TABLE "publication" CASCADE;
  DROP TABLE "skills_technical" CASCADE;
  DROP TABLE "skills_tools" CASCADE;
  DROP TABLE "skills_personal" CASCADE;
  DROP TABLE "skills" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "site" CASCADE;`)
}
