export default function NotFound() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 600, color: "#ffffff" }}>404</h1>
      <p style={{ color: "rgba(255,255,255,0.75)" }}>Sidan hittades inte.</p>
      <a href="/" style={{ color: "#F2A7B5", textDecoration: "none", fontSize: "0.875rem" }}>← Tillbaka till startsidan</a>
    </div>
  );
}
