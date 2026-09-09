import Interactions from "./components/Interactions";
import Projects from "./components/Projects";

const NAV = [
  ["a-propos", "À propos"],
  ["experience", "Expérience"],
  ["recherche", "Recherche"],
  ["projets", "Projets"],
  ["competences", "Compétences"],
  ["contact", "Contact"],
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="topnav" id="topnav">
        <div className="wrap topnav-inner">
          <a href="#top" className="brand" aria-label="Cheikh Oumar Sy — accueil">
            Cheikh Oumar Sy<span className="brand-mark">.</span>
          </a>
          <nav className="nav-links" aria-label="Navigation principale">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <a className="nav-cta" href="/cv-cheikh-oumar-sy.pdf" target="_blank" rel="noopener">CV</a>
          <button className="menu-toggle" id="menu-open" aria-label="Ouvrir le menu" aria-controls="overlay-menu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18 M3 12h18 M3 17h18" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
          </button>
        </div>
      </header>

      {/* OVERLAY MENU */}
      <div className="overlay-menu" id="overlay-menu" aria-hidden="true">
        <div className="overlay-menu-top">
          <span className="brand">Cheikh Oumar Sy<span className="brand-mark" style={{ color: "var(--accent)" }}>.</span></span>
          <button className="overlay-close" id="menu-close" aria-label="Fermer le menu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
          </button>
        </div>
        <nav className="overlay-nav" aria-label="Menu">
          {NAV.map(([id, label], i) => (
            <a key={id} href={`#${id}`}><span className="on">{String(i + 1).padStart(2, "0")}</span>{label}</a>
          ))}
        </nav>
        <div className="overlay-foot">
          <a href="/cv-cheikh-oumar-sy.pdf" target="_blank" rel="noopener">Télécharger le CV</a>
          <a href="mailto:cheikhoumarsy05@gmail.com">cheikhoumarsy05@gmail.com</a>
          <span>Dakar — Sénégal</span>
        </div>
      </div>

      <main id="content">
        {/* HERO */}
        <section className="section hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-top">
              <div>
                <p className="hero-folio"><span className="hero-folio-n">00</span>Portfolio · Ingénieur Structures</p>
                <h1 className="hero-name">
                  Cheikh<br />Oumar <span className="accent">Sy</span>
                </h1>
                <p className="hero-sub">
                  Ingénieur en génie civil — structures. Du calcul au plan
                  d&apos;exécution : béton armé, charpente métallique, dynamique.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary arrow" href="#projets">Voir les projets</a>
                  <a className="btn btn-outline" href="/cv-cheikh-oumar-sy.pdf" target="_blank" rel="noopener">Télécharger le CV</a>
                </div>
              </div>
              <div className="hero-media">
                <div className="frame">
                  <picture>
                    <source srcSet="/projects/nafi-1.webp" type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/projects/nafi-1.jpg" alt="Maison Nafi Diom — villa R+2, façade principale au crépuscule" loading="eager" decoding="async" />
                  </picture>
                </div>
                <div className="cap">
                  <span>Maison Nafi Diom · R+2 · Archicad & Lumion</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="hero-strip">
              <div className="item">
                <span className="k">Statut</span>
                <span className="v avail"><span className="dot" aria-hidden="true" />Disponible — stage 4 à 6 mois</span>
              </div>
              <div className="item">
                <span className="k">Localisation</span>
                <span className="v">Dakar, Sénégal</span>
              </div>
              <div className="item">
                <span className="k">Domaine</span>
                <span className="v">Béton armé · Charpente métallique · Dynamique</span>
              </div>
            </div>
          </div>
        </section>

        {/* À PROPOS */}
        <section className="section band-paper2" id="a-propos">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">01</p>
              <div className="ed-head-text"><h2 className="ed-title">À propos</h2></div>
            </div>
            <div className="about-grid">
              <div className="reveal">
                <p className="about-lead">Concevoir et vérifier des structures, du calcul au plan d&apos;exécution.</p>
                <p className="about-body">
                  Ingénieur de conception en génie civil orienté structures, je travaille le
                  dimensionnement en béton armé et charpente métallique selon les Eurocodes et le
                  BAEL, la vérification de conformité en bureau de contrôle technique, et la
                  dynamique des structures. Je développe aussi mes propres outils de calcul sous
                  Python pour automatiser l&apos;analyse et le dimensionnement.
                </p>
                <p className="about-body">
                  Polyvalent entre le bureau d&apos;études et le terrain, j&apos;ai suivi des
                  chantiers de gros œuvre et de plomberie et mené une publication scientifique sur
                  l&apos;analyse dynamique des ponts ferroviaires à grande vitesse.
                </p>
                <p className="about-stat">
                  <span>3<span className="u">+</span> ans</span> terrain &amp; bureau d&apos;études.{" "}
                  <span>5 projets</span> de conception, contrôle &amp; recherche.{" "}
                  <span>1 publication</span> scientifique — <em>Zenodo, 2026</em>.
                </p>
              </div>
              <div className="about-portrait reveal">
                <div className="frame">
                  <picture>
                    <source srcSet="/img/portrait.webp" type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/portrait.jpg" alt="Cheikh Oumar Sy, ingénieur en génie civil" loading="lazy" decoding="async" />
                  </picture>
                </div>
                <div className="facts">
                  <div className="row"><span className="k">Langues</span><span className="v">Français · Anglais technique · Wolof</span></div>
                  <div className="row"><span className="k">Permis</span><span className="v">Permis B</span></div>
                  <div className="row"><span className="k">Outils clés</span><span className="v">RSA · CYPECAD · Revit · Python</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPÉRIENCE */}
        <section className="section" id="experience">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">02</p>
              <div className="ed-head-text">
                <h2 className="ed-title">Expérience</h2>
                <p className="ed-lead">Bureau de contrôle, conduite de travaux, chantier.</p>
              </div>
            </div>
            <div className="xp">
              <div className="xp-row reveal">
                <div className="xp-when">Juin–Août 2026 · Août–Oct 2025</div>
                <div>
                  <h3 className="xp-role">Stagiaire Ingénieur — Bureau de Contrôle Technique</h3>
                  <p className="xp-org">SEATEC Sénégal</p>
                  <ul className="xp-points">
                    <li>Vérification des plans de coffrage et de ferraillage selon le BAEL.</li>
                    <li>Vérification des notes de calcul sous Robot Structural Analysis (RSA).</li>
                    <li>Contrôle qualité sur chantier et rédaction de rapports techniques.</li>
                  </ul>
                </div>
              </div>
              <div className="xp-row reveal">
                <div className="xp-when">Août–Sept 2024</div>
                <div>
                  <h3 className="xp-role">Stagiaire Conducteur de Travaux — Plomberie</h3>
                  <p className="xp-org">SENTRA BTP SA</p>
                  <ul className="xp-points">
                    <li>Suivi des travaux de plomberie sur un programme de 222 villas.</li>
                    <li>Supervision du gros œuvre d&apos;une villa R+3.</li>
                  </ul>
                </div>
              </div>
              <div className="xp-row reveal">
                <div className="xp-when">Juin–Juil 2023</div>
                <div>
                  <h3 className="xp-role">Stagiaire Conducteur de Travaux</h3>
                  <p className="xp-org">SENTRA BTP SA</p>
                  <ul className="xp-points">
                    <li>Fondations d&apos;un immeuble R+7 avec sous-sol.</li>
                    <li>Coordination des équipes sur site.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECHERCHE — publication (ink band) */}
        <section className="section band-ink" id="recherche">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">03</p>
              <div className="ed-head-text"><h2 className="ed-title">Recherche appliquée</h2></div>
            </div>
            <div className="pub reveal">
              <div>
                <h3 className="pub-title">Analyse dynamique d&apos;un pont ferroviaire à grande vitesse</h3>
                <p className="pub-sub">Vitesses critiques et vérification selon EN 1991-2 — Zenodo, 2026.</p>
                <ul className="pub-points">
                  <li>Analyse dynamique sous convois HSLM-A et identification des vitesses critiques de résonance.</li>
                  <li>Étude de sensibilité de la réponse structurelle à l&apos;amortissement.</li>
                  <li>Dimensionnement d&apos;amortisseurs à masse accordée (AMA / TMD) sous Python.</li>
                </ul>
                <div className="pub-actions">
                  <a className="btn btn-primary arrow" href="https://doi.org/10.5281/zenodo.20069677" target="_blank" rel="noopener">Lire la publication</a>
                  <span className="pub-doi">DOI · 10.5281/zenodo.20069677</span>
                </div>
              </div>
              <div className="pub-side">
                <div className="row"><div className="k">Norme</div><div className="v accent">EN 1991-2</div></div>
                <div className="row"><div className="k">Convois</div><div className="v">HSLM-A</div></div>
                <div className="row"><div className="k">Outils</div><div className="v">Python · AMA/TMD</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section className="section" id="projets">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">04</p>
              <div className="ed-head-text">
                <h2 className="ed-title">Projets</h2>
                <p className="ed-lead">Conception, modélisation et calcul de bâtiments résidentiels — du volume à l&apos;élément.</p>
              </div>
            </div>
            <Projects />
          </div>
        </section>

        {/* FREELANCE */}
        <section className="section band-paper2" id="freelance">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">05</p>
              <div className="ed-head-text"><h2 className="ed-title">Freelance</h2></div>
            </div>
            <div className="free">
              <div className="free-item reveal">
                <div className="free-when">2026 — en cours</div>
                <h3>Concepteur freelance — Béton armé</h3>
                <p>Production de plans d&apos;exécution, vérification de conformité et rédaction de rapports techniques pour des projets en béton armé.</p>
              </div>
              <div className="free-item reveal">
                <div className="free-when">2026 — en cours</div>
                <h3>Formateur en logiciels de calcul de structures</h3>
                <p>Formation en ligne à la prise en main des logiciels, à la modélisation et l&apos;analyse de bâtiments en béton armé, au dimensionnement et à la production de plans d&apos;exécution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section className="section" id="competences">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">06</p>
              <div className="ed-head-text"><h2 className="ed-title">Compétences</h2></div>
            </div>
            <div className="skills-grid">
              <div className="reveal">
                <h3 className="subhead">Techniques</h3>
                <ul className="skill-list">
                  <li><span className="sn">01</span><span>Dimensionnement béton armé &amp; charpente métallique (Eurocodes, BAEL)</span></li>
                  <li><span className="sn">02</span><span>Production de plans d&apos;exécution</span></li>
                  <li><span className="sn">03</span><span>Vérification de conformité (bureau de contrôle)</span></li>
                  <li><span className="sn">04</span><span>Dynamique des structures &amp; analyse modale (EN 1991-2, EN 1990)</span></li>
                  <li><span className="sn">05</span><span>Développement d&apos;outils de calcul sous Python</span></li>
                  <li><span className="sn">06</span><span>Métrés, attachements &amp; devis</span></li>
                </ul>
              </div>
              <div className="reveal">
                <h3 className="subhead">Outils &amp; logiciels</h3>
                <div className="tool-grid">
                  <span className="tool key">RSA</span>
                  <span className="tool key">Revit</span>
                  <span className="tool key">Python</span>
                  <span className="tool key">CYPECAD</span>
                  <span className="tool">Archicad</span>
                  <span className="tool">AutoCAD</span>
                  <span className="tool">Graitec</span>
                  <span className="tool">CBS</span>
                  <span className="tool">DDC</span>
                  <span className="tool">EXPERT</span>
                  <span className="tool">RMD7</span>
                  <span className="tool">LaTeX</span>
                </div>
                <p className="small-label" style={{ marginTop: 14 }}>En gras : maîtrise quotidienne</p>
                <h3 className="subhead" style={{ marginTop: 36 }}>Personnelles</h3>
                <div className="softskills">
                  <span className="s">Rigueur</span>
                  <span className="s">Analyse &amp; résolution de problèmes</span>
                  <span className="s">Gestion de projet</span>
                  <span className="s">Polyvalence bureau / terrain</span>
                  <span className="s">Adaptabilité</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMATION */}
        <section className="section band-paper2" id="formation">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">07</p>
              <div className="ed-head-text"><h2 className="ed-title">Formation</h2></div>
            </div>
            <div className="edu reveal">
              <div className="edu-row">
                <span className="edu-when">2023 — 2026</span>
                <div><p className="edu-title">Ingénieur de Conception en Génie Civil (DIC3)</p><p className="edu-org">IPSL — Saint-Louis, Sénégal</p></div>
              </div>
              <div className="edu-row">
                <span className="edu-when">2021 — 2023</span>
                <div><p className="edu-title">Diplôme Supérieur de Technologie</p><p className="edu-org">ESP — Dakar, Sénégal</p></div>
              </div>
              <div className="edu-row">
                <span className="edu-when">2021</span>
                <div><p className="edu-title">Baccalauréat Scientifique S1</p><p className="edu-org">Lycée Maba Diakhou BA</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="wrap">
            <div className="ed-head reveal">
              <p className="ed-index">08</p>
              <div className="ed-head-text"><h2 className="ed-title">Contact</h2></div>
            </div>
            <div className="contact">
              <div className="reveal">
                <h3 className="contact-title">Disponible pour un stage de 4 à 6 mois.</h3>
                <p className="contact-lead">
                  Calcul des structures, bureau de contrôle technique ou recherche appliquée —
                  parlons de la mission qui vous attend. Réponse rapide, du bureau d&apos;études au terrain.
                </p>
                <div className="hero-actions" style={{ marginTop: 28 }}>
                  <a className="btn btn-ink arrow" href="mailto:cheikhoumarsy05@gmail.com?subject=Stage%20Ing%C3%A9nieur%20Structures">Écrire un e-mail</a>
                  <a className="btn btn-outline" href="/cv-cheikh-oumar-sy.pdf" target="_blank" rel="noopener">Télécharger le CV</a>
                </div>
              </div>
              <div className="contact-coords reveal">
                <div className="row"><div className="k">E-mail</div><div className="v"><a className="link" href="mailto:cheikhoumarsy05@gmail.com">cheikhoumarsy05@gmail.com</a></div></div>
                <div className="row"><div className="k">Téléphone</div><div className="v"><a className="link" href="tel:+221766301088">+221 76 630 10 88</a></div></div>
                <div className="row"><div className="k">Réseaux</div><div className="v cc-links"><a className="link" href="https://www.linkedin.com/in/cheikh-oumar-sy-29912b23b" target="_blank" rel="noopener">LinkedIn</a><a className="link" href="https://github.com/cheikhoumarsy05-eng" target="_blank" rel="noopener">GitHub</a></div></div>
                <div className="row"><div className="k">Localisation</div><div className="v">Dakar — Sénégal</div></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          <span>© Cheikh Oumar Sy · {new Date().getFullYear()}</span>
          <div className="foot-links">
            <a className="link" href="https://doi.org/10.5281/zenodo.20069677" target="_blank" rel="noopener">Publication Zenodo</a>
            <a className="link" href="https://www.linkedin.com/in/cheikh-oumar-sy-29912b23b" target="_blank" rel="noopener">LinkedIn</a>
            <a className="link" href="https://github.com/cheikhoumarsy05-eng" target="_blank" rel="noopener">GitHub</a>
            <span>Conçu à Dakar.</span>
          </div>
        </div>
      </footer>

      <Interactions />
    </>
  );
}
