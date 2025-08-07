import { Card } from "@/components/ui/card";
import "./Map.styles.scss";
import { IMapProps } from "./Map.types";
import { useDataOutage } from "@/app/contexts/DataContext";
import { formatCreationTime } from "@/lib/utils";
import { GoogleMap } from "../../molecules/GoogleMap";
import { OutageStats } from "../../molecules/OutageStats";

export const Map = (props: IMapProps) => {
  const { id } = props;

  const { outageData, loading } = useDataOutage();

  return (
    <div id={id} className="map">
      <Card className="map__card">
        <div className="map__header">
          <div className="map__text">
            <h2>
              Active ACMA Outages
              {loading ? (
                <div className="animate-pulse h-5 w-full rounded-full bg-gray-200" />
              ) : (
                <span>
                  Last updated at {formatCreationTime(outageData.LAST_UPDATED)}
                </span>
              )}
            </h2>
          </div>

          <OutageStats id="outage-stat" />
        </div>

        <Card className="map__map p-0 overflow-hidden">
          <GoogleMap center={{ lat: -25.7326, lng: 134.4895 }} zoom={4} />
        </Card>
      </Card>
    </div>
  );
};

export default Map;
