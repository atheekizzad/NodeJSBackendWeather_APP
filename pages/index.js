import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Native App</title>
      </Head>

      {/* Navbar */}
      <nav
        style={{
          padding: "10px",
          background: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>MyReactNativeApp</h1>
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
      </nav>

      {/* Header Section */}
      <header style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to My React Native App</h1>
        <p>
          Experience the best mobile application with Firebase and Thrones API
        </p>
      </header>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          background: "#222",
          color: "#fff",
        }}
      >
        <p>© 2025 MyReactNativeApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
