import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js Site",
  description: "Çok sayfalı Next.js örneği",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <nav className="navbar">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
        <main className="content">{children}</main>
      </body>
    </html>
  );
}