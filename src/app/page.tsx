"use client";

import Image from "next/image";

import AiChat from "./components/molecules/AiChat";
import { Navigation } from "./components/organisms/Navigation";
import { DataProvider } from "./contexts/DataContext";

export default function HomePage() {
  return (
    <DataProvider>
      <main className="main landing">
        <Navigation id="navigation" activeTab="overview" />

        <section className="landing__content">
          <Image src="/logo-ai.png" alt="AI Logo" width={420} height={263} />

          <div className="landing__text">
            <h2>Explore network outages</h2>

            <p>
              Use AI to find details on both open and resolved outages, along with associated
              communication notifications.
            </p>

            <AiChat />
          </div>
        </section>
      </main>
    </DataProvider>
  );
}
