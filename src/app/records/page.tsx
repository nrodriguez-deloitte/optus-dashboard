"use client";

import { FilterIcon } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Navigation } from "../components/organisms/Navigation";
import { DataProvider } from "../contexts/DataContext";

export default function Records() {
  return (
    <DataProvider>
      <main className="main records records-container">
        <Navigation id="navigation" activeTab="communication-record" />

        <h2>Comms records</h2>

        <p>Filter, find and extract notification records sent to customers during an outage</p>

        <Card>
          <CardHeader>
            <div className="records__label">
              <FilterIcon />
              Filters
            </div>
          </CardHeader>

          <CardContent>Table</CardContent>
        </Card>
      </main>
    </DataProvider>
  );
}
