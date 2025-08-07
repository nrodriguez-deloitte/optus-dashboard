"use client";

import { OutageStats } from "../components/molecules/OutageStats";
import { Navigation } from "../components/organisms/Navigation";
import { OutageTabs } from "../components/organisms/OutageTabs";
import { DataProvider } from "../contexts/DataContext";

export default function Home() {
  return (
    <DataProvider>
      <main className="flex h-full">
        <div className="navigation-sidebar max-w-3xs w-full">
          <Navigation id="navigation" activeTab="outages" />
        </div>

        <div className="content p-[24px] w-full">
          <h2 className="mb-4">ACMA Outages</h2>

          <OutageStats id="outage-stats" className="mb-4" />

          <OutageTabs id="outage-tabs" />
        </div>

        {/* <div>Side Panel</div> */}
      </main>
    </DataProvider>
  );
}
