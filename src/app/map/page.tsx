"use client";

import { Map } from "../components/organisms/Map";
import { Navigation } from "../components/organisms/Navigation";
import { DataProvider } from "../contexts/DataContext";

export default function MapPage() {
  return (
    <DataProvider>
      <main className="main map-container">
        <Navigation id="navigation" activeTab="outages" />

        <Map id="map" />
      </main>
    </DataProvider>
  );
}
