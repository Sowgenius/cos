import type { Metadata } from "next";
import { Bricolage_Grotesque, Spectral, Geist } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const serif = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const body = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheikh Oumar Sy · Ingénieur Génie Civil — Structures",
  description:
    "Ingénieur en Génie Civil — spécialisation structures : béton armé, charpente métallique, dynamique des structures. En recherche d'un stage Ingénieur Structures (4–6 mois).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${serif.variable} ${body.variable}`}>
        <div
          hidden
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html:
              "<!--\n" +
              "ATELIER INDEX — direction contract (seed 0b6a2871, form #6 of grounded list)\n" +
              "THESIS: The portfolio as a studio's art-directed INDEX; oversized index numerals + asymmetric editorial grid carry real 3D renders. Refuses the conventional dev-portfolio hero+card-grid.\n" +
              "OWN-WORLD: Warm paper (#F4F1EA), near-black ink (#0E0E10), one terracotta accent (#B24A2E), warm stone. Bricolage Grotesque display, Spectral serif voice, Geist body. Full-bleed renders framed by hairline rules; giant tabular index numerals; expanding overlay menu.\n" +
              "STORY: A recruiter grasps 'structures engineer with real rendered projects + a publication' fast, explores the indexed work via view transitions, reaches contact/CV in one action.\n" +
              "FIRST VIEWPORT: Near-full-bleed lead render; huge tight wordmark; giant index numeral; expanding menu top-right; availability + primary action legible.\n" +
              "FORM: editorial art-direction spread; #6 of grounded list; seed key 0b6a2871.\n" +
              "FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md\n" +
              "-->",
          }}
        />
        {children}
      </body>
    </html>
  );
}
