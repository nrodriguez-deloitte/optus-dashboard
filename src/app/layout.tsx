import type { Metadata } from "next";

import "../app/styles/variables.css";
import "../app/styles/globals.css";

export const metadata: Metadata = {
  title: "CCAP Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiase">{children}</body>
    </html>
  );
}
