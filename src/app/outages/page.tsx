"use client";

import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

import OutageDetailPanel from "../components/molecules/OutageDetailPanel";
import TableOutages from "../components/molecules/TableOutages";
import { Navigation } from "../components/organisms/Navigation";
import { DataProvider } from "../contexts/DataContext";

export default function Outages() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [incidentId, setIncidentId] = useState("");

  return (
    <DataProvider>
      <main className="main records records-container">
        <Navigation id="navigation" activeTab="communication-record" />

        <h2>All Outages</h2>

        <p>Filter, find and extract notification records sent to customers during an outage</p>

        <Card className="records-card">
          <CardContent className="records-card__content">
            <TableOutages
              onRowClick={(arg) => {
                setPanelOpen(true);
                setIncidentId(arg);
              }}
            />

            <OutageDetailPanel
              incidentId={incidentId}
              open={panelOpen}
              onClose={() => setPanelOpen(false)}
            />
          </CardContent>
        </Card>
      </main>
    </DataProvider>
  );
}
