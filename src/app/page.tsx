"use client";

import { Navigation } from "./components/organisms/Navigation";
import { Map } from "./components/organisms/Map";
import { OutageTabs } from "./components/organisms/OutageTabs";
import { DataProvider } from "./contexts/DataContext";

export default function Home() {
  return (
    <DataProvider>
      <main className="flex h-full">
        <div className="navigation-sidebar max-w-3xs w-full">
          <Navigation id="navigation" activeTab="overview" />
        </div>

        <div className="content p-[24px] w-full">
          <Map id="map" />

          <OutageTabs id="outage-tabs" />
        </div>

        {/* <div>Side Panel</div> */}
      </main>
    </DataProvider>
  );
}
