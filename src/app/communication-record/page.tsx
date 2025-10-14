"use client";

import { Navigation } from "../components/organisms/Navigation";
import { DataProvider } from "../contexts/DataContext";

export default function Home() {
  return (
    <DataProvider>
      <main className="h-full">
        <Navigation id="navigation" activeTab="communication-record" />
      </main>
    </DataProvider>
  );
}
