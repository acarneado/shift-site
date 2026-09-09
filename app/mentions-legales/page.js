import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mentions légales — SHIFT",
  description: "Informations légales du site SHIFT.",
};

const sectionTitleStyle = {
  fontFamily: "var(--font-lora), serif",
  fontWeight: 500,
  fontSize: 20,
  color: "var(--text)",
  margin: "40px 0 12px",
};

const subTitleStyle = {
  fontFamily: "var(--font-lora), serif",
  fontWeight: 500,
  fontSize: 16.5,
  color: "var(--primary)",
  margin: "22px 0 8px",
};

const pStyle = {
  fontSize: 15.5,
  lineHeight: 1.7,
  color: "var(--muted)",
  margin: "0 0 12px",
};

const listStyle = {
  margin: "0 0 12px",
  paddingLeft: 20,
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontSize: 15.5,
  lineHeight: 1.6,
  color: "var(--muted)",
};

export default function MentionsLegales() {
  return (
    <div
      style={{
        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "oklch(0.97 0.008 60 / 0.96)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid var(--border)",
          padding: "16px clamp(20px,5vw,64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: 1, lineHeight: 1.1 }}>
          <span style={{ fontFamily: "var(--font-lora), serif", fontWeight: 600, fontSize: 22, letterSpacing: "0.5px", color: "var(--primary)" }}>
            SHIFT
          </span>
          <span style={{ fontFamily: "var(--font-ibm-plex-sans), sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: "0.3px", color: "var(--muted)" }}>
            Alexandre Carneado — Coach professionnel certifié RNCP 6
          </span>
        </Link>
        <Link
          href="/rendez-vous"
          className="btn-pill-primary"
          style={{ padding: "10px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}
        >
          Prendre rendez-vous
        </Link>
      </header>

      <main style={{ flex: 1, padding: "clamp(56px,10vw,120px) clamp(20px,6vw,64px) 64px", maxWidth: 760 }}>
        <p style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px" }}>
          Mentions légales
        </p>
        <h1 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: "clamp(28px,4vw,44px)", margin: "0 0 32px", lineHeight: 1.2 }}>
          Informations légales
        </h1>

        <h2 style={{ ...sectionTitleStyle, marginTop: 0 }}>1. Éditeur du site</h2>
        <p style={pStyle}>Le présent site est édité par :</p>
        <p style={pStyle}>
          Alexandre CARNEADO, entrepreneur individuel (micro-entreprise)
          <br />
          Adresse : 19 rue Collange, 92300 Levallois-Perret
          <br />
          SIRET : 106 914 575 00019
          <br />
          TVA non applicable, article 293 B du Code général des impôts
          <br />
          Email :{" "}
          <a href="mailto:acarneado.shift@gmail.com" style={{ color: "var(--primary)", borderBottom: "1px solid var(--primary)" }}>
            acarneado.shift@gmail.com
          </a>
        </p>

        <h2 style={sectionTitleStyle}>2. Directeur de la publication</h2>
        <p style={pStyle}>
          Alexandre CARNEADO
          <br />
          Email :{" "}
          <a href="mailto:acarneado.shift@gmail.com" style={{ color: "var(--primary)", borderBottom: "1px solid var(--primary)" }}>
            acarneado.shift@gmail.com
          </a>
        </p>

        <h2 style={sectionTitleStyle}>3. Hébergement</h2>
        <p style={pStyle}>Le site est hébergé par :</p>
        <p style={pStyle}>
          Vercel Inc.
          <br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        </p>

        <h2 style={sectionTitleStyle}>4. Nom de domaine</h2>
        <p style={pStyle}>
          Le présent site est accessible à l&apos;adresse : [À COMPLÉTER — nom de domaine définitif]
        </p>

        <h2 style={sectionTitleStyle}>5. Propriété intellectuelle</h2>
        <p style={pStyle}>
          L&apos;ensemble des contenus présents sur ce site (textes, structure, identité visuelle) est la
          propriété d&apos;Alexandre CARNEADO, sauf mention contraire. Toute reproduction, représentation,
          modification ou adaptation totale ou partielle de ces contenus, par quelque procédé que ce soit,
          sans autorisation préalable, est interdite.
        </p>

        <h2 style={sectionTitleStyle}>6. Données personnelles et confidentialité</h2>

        <h3 style={subTitleStyle}>Responsable du traitement</h3>
        <p style={pStyle}>
          Alexandre CARNEADO est responsable du traitement des données collectées via ce site. Pour toute
          question ou pour exercer vos droits, vous pouvez le contacter à l&apos;adresse{" "}
          <a href="mailto:acarneado.shift@gmail.com" style={{ color: "var(--primary)", borderBottom: "1px solid var(--primary)" }}>
            acarneado.shift@gmail.com
          </a>
          .
        </p>

        <h3 style={subTitleStyle}>Formulaire de prise de rendez-vous</h3>
        <p style={pStyle}>
          Dans le cadre de la prise de rendez-vous, les données suivantes sont collectées : nom, adresse
          email, statut (salarié ou entreprise, si renseigné), le type de demande (coaching individuel,
          formation ou atelier théâtre, si renseigné), et le message associé à votre demande.
        </p>
        <p style={pStyle}>
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>Finalité</strong> : traiter votre demande
          de premier échange et vous recontacter.
          <br />
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>Base légale</strong> : votre consentement,
          exprimé par l&apos;envoi volontaire du formulaire.
          <br />
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>Destinataire</strong> : ces données sont
          reçues directement par email par Alexandre CARNEADO ; elles ne sont transmises à aucun tiers.
        </p>
        <p style={{ ...pStyle, margin: "0 0 6px" }}>
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>Durée de conservation</strong> :
        </p>
        <ul style={listStyle}>
          <li>Contact resté sans suite (prospect) : 3 ans maximum à compter du dernier échange.</li>
          <li>Personne engagée dans un accompagnement : pendant toute la durée de l&apos;accompagnement.</li>
          <li>Ancien client : 3 ans maximum après la fin de l&apos;accompagnement.</li>
          <li>
            Documents comptables et factures associés : conservés selon les durées légales applicables en
            matière comptable et fiscale.
          </li>
        </ul>

        <h3 style={subTitleStyle}>Diagnostic interactif</h3>
        <p style={pStyle}>
          Le diagnostic proposé sur le site fonctionne de façon totalement anonyme : aucune donnée
          personnelle n&apos;est collectée ni conservée à l&apos;issue de son utilisation. Les réponses ne
          servent qu&apos;à générer, en temps réel, le résultat affiché au visiteur.
        </p>

        <h3 style={subTitleStyle}>Mesure d&apos;audience</h3>
        <p style={pStyle}>
          Ce site utilise Vercel Web Analytics, un outil de mesure d&apos;audience qui ne dépose aucun cookie
          et n&apos;identifie pas individuellement les visiteurs : les données sont anonymisées, agrégées, et
          ne permettent pas de reconstituer le parcours d&apos;une personne. Aucun consentement préalable
          n&apos;est donc requis pour cet outil, conformément aux recommandations de la CNIL sur les outils de
          mesure d&apos;audience exemptés de consentement.
        </p>

        <h3 style={subTitleStyle}>Vos droits</h3>
        <p style={pStyle}>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et
          Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de
          portabilité de vos données, ainsi que d&apos;un droit d&apos;opposition et de limitation du
          traitement. Vous pouvez exercer ces droits en écrivant à{" "}
          <a href="mailto:acarneado.shift@gmail.com" style={{ color: "var(--primary)", borderBottom: "1px solid var(--primary)" }}>
            acarneado.shift@gmail.com
          </a>
          . Vous disposez également du droit d&apos;introduire une réclamation auprès de la Commission
          Nationale de l&apos;Informatique et des Libertés (CNIL).
        </p>

        <h2 style={sectionTitleStyle}>7. Historique des mises à jour</h2>
        <ul style={listStyle}>
          <li>
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>09/09/2026</strong> : ajout du champ
            &quot;type de demande&quot; (coaching individuel / formation / atelier théâtre) à la liste des
            données collectées par le formulaire de prise de rendez-vous — ce champ facultatif existait déjà
            dans le formulaire mais n&apos;était pas encore documenté ici. Précision ajoutée que le champ
            &quot;statut&quot; est également facultatif, pour cohérence avec le formulaire réel.
          </li>
          <li>
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>09/09/2026</strong> : ajout de
            l&apos;adresse de l&apos;éditeur (19 rue Collange, 92300 Levallois-Perret), initialement omise à
            la demande de l&apos;éditeur pour préserver la confidentialité du domicile personnel. Décision
            revue par l&apos;éditeur — le point de non-conformité LCEN précédemment signalé ici est donc
            levé.
          </li>
        </ul>

        <Link href="/" style={{ display: "inline-block", marginTop: 24, fontSize: 14, fontWeight: 600, color: "var(--primary)", borderBottom: "1px solid var(--primary)" }}>
          ← Retour à l&apos;accueil
        </Link>
      </main>

      <Footer />
    </div>
  );
}
