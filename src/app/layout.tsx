import "../app/styles/globals.css";
import "../app/styles/variables.css";

import type { Metadata } from "next";

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
