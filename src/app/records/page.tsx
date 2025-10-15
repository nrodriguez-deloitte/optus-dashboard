"use client";

import { Card, CardContent } from "@/components/ui/card";

import TableRecords from "../components/molecules/TableRecords";
import { Navigation } from "../components/organisms/Navigation";
import { DataProvider } from "../contexts/DataContext";

export default function Records() {
  return (
    <DataProvider>
      <main className="main records records-container">
        <Navigation id="navigation" activeTab="communication-record" />

        <h2>Comms records</h2>

        <p>Filter, find and extract notification records sent to customers during an outage</p>

        <Card className="records-card">
          <CardContent className="records-card__content">
            <TableRecords />
          </CardContent>
        </Card>
      </main>
    </DataProvider>
  );
}
