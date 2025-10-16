import { useState } from "react";

import { useDataOutage } from "@/app/contexts/DataContext";
import { Card } from "@/components/ui/card";
import { formatCreationTime } from "@/lib/utils";

import "./Map.styles.scss";
import { IMapProps } from "./Map.types";
import { GoogleMap } from "../../molecules/GoogleMap";
import OutageDetailPanel from "../../molecules/OutageDetailPanel";
import { OutageStats } from "../../molecules/OutageStats";
import { OutageTabs } from "../OutageTabs";

export const Map = (props: IMapProps) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [incidentId, setIncidentId] = useState("");
  const { outageData, loading } = useDataOutage();

  const { id } = props;
  return (
    <div id={id} className="map">
      <Card className="map__card">
        <div className="map__header">
          <div className="map__text">
            <h2>Active ACMA Outages</h2>

            {loading ? (
              <div className="animate-pulse h-5 w-full rounded-full bg-gray-200" />
            ) : (
              <p>Last updated at {formatCreationTime(outageData.LAST_UPDATED)}</p>
            )}
          </div>

          <OutageStats id="outage-stat" />
        </div>

        <Card className="map__map p-0 overflow-hidden">
          <GoogleMap center={{ lat: -25.7326, lng: 134.4895 }} zoom={4} />
        </Card>

        <OutageTabs
          id="outage-tabs"
          onCardClick={(incidentId) => {
            setPanelOpen(true);
            setIncidentId(incidentId);
          }}
        />

        <OutageDetailPanel
          incidentId={incidentId}
          open={panelOpen}
          onClose={() => setPanelOpen(false)}
        />
      </Card>
    </div>
  );
};

export default Map;
