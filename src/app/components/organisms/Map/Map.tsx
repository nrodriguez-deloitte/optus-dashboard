import { Card } from "@/components/ui/card";
import "./Map.styles.scss";
import { IMapProps } from "./Map.types";

export const Map = (props: IMapProps) => {
  const { id } = props;

  return (
    <div id={id} className="map">
      <Card className="map__card">
        <div className="map__header">
          <div className="map__text">
            <h2>
              Active ACMA Outages
              <span>Last updated at 1:35pm</span>
            </h2>
          </div>

          <ul className="map__stats">
            <li>
              <Card className="map__stat">
                <span>3,120</span>
                Total active outages
              </Card>
            </li>

            <li>
              <Card className="map__stat">
                <span className="--red">15</span>
                Ongoing ACMA outages
              </Card>
            </li>

            <li>
              <Card className="map__stat">
                <span>139,012</span>
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
