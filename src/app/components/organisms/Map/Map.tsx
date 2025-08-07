import { Card } from "@/components/ui/card";
import "./Map.styles.scss";
import { IMapProps } from "./Map.types";
import { useDataOutage } from "@/app/contexts/DataContext";
import { formatCreationTime } from "@/lib/utils";

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

          <ul className="map__stats">
            <li>
              <Card className="map__stat">
                {loading ? (
                  <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
                ) : (
                  <span>3,120</span>
                )}
                Total active outages
              </Card>
            </li>

            <li>
              <Card className="map__stat">
                {loading ? (
                  <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
                ) : (
                  <span className="--red">15</span>
                )}
                Ongoing ACMA outages
              </Card>
            </li>

            <li>
              <Card className="map__stat">
                {loading ? (
                  <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
                ) : (
                  <span>139,012</span>
                )}
                Customer impacted
              </Card>
            </li>
          </ul>
        </div>

        <Card className="map__map"></Card>
      </Card>
    </div>
  );
};

export default Map;
