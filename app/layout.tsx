import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planet Suzanne Explorers | DePaula Discoveries",
  description: "Collect moments, not things. A DePaula Discoveries collection by Planet Suzanne."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
