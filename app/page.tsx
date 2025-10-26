// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background: "#ffffff",
        color: "#111",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h1 style={{ color: "#b8860b" }}>EZN GLOBAL PROPERTIES LTD</h1>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/properties">Properties</Link>
          <Link href="/shortlets">Shortlets</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>

      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background: "#0b0b0b",
          color: "white",
        }}
      >
        <h2 style={{ color: "#FFD36B", fontSize: "44px" }}>
          Welcome to EZN Global Properties
        </h2>
        <p style={{ fontSize: "18px", marginTop: "12px", color: "#ccc" }}>
          Discover luxury properties, shortlets, travel packages, and more —
          powered by EZNGP.
        </p>
        <div style={{ marginTop: "30px" }}>
          <Link
            href="/properties"
            style={{
              background: "#FFD36B",
              padding: "12px 24px",
              borderRadius: "6px",
              color: "#000",
              fontWeight: "600",
            }}
          >
            Explore Properties
          </Link>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#111",
          color: "#aaa",
          marginTop: "50px",
        }}
      >
        © {new Date().getFullYear()} EZN Global Properties Ltd. All rights
        reserved.
      </footer>
    </main>
  );
}
