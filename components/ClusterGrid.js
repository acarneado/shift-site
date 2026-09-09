// Grille de blocs thématiques ("Ce qu'on y traite"), partagée entre les
// pages Coaching individuel et Formations : structure identique, seuls le
// contenu et le gap (piloté par gridClassName, voir globals.css) diffèrent.
export default function ClusterGrid({ clusters, gridClassName }) {
  return (
    <div className={gridClassName}>
      {clusters.map((cluster) => (
        <div
          key={cluster.title}
          className="card-hover-lg"
          style={{ border: "1px solid var(--border)", borderRadius: 16, padding: "24px 26px", transition: "all 0.2s ease" }}
        >
          <h3 style={{ fontFamily: "var(--font-lora), serif", fontWeight: 500, fontSize: 19, margin: "0 0 14px", color: "var(--primary)" }}>
            {cluster.title}
          </h3>
          <ul
            style={{
              fontSize: 14.5,
              lineHeight: 1.6,
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              color: "oklch(0.4 0.02 50)",
            }}
          >
            {cluster.items.map((item) => (
              <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--accent)", marginTop: 7 }}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
