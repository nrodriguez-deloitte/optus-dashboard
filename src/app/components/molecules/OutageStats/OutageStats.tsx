import { Card } from "@/components/ui/card";

import "./OutageStats.styles.scss";

import { IOutageStatProps } from "./OutageStats.types";
import { useDataOutage } from "@/app/contexts/DataContext";

/** Primary UI component for user interaction */
export const OutageStats = (props: IOutageStatProps) => {
  const { id, className } = props;
  const { outageData, loading } = useDataOutage();

  return (
    <ul id={id} className={`outage-stats ${className}`}>
      <li>
        <Card className="outage-stats__card">
          {loading ? (
            <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
          ) : (
            <span>
              {outageData.TOTAL_ACTIVE_OUTAGES.toLocaleString("en-GB")}
            </span>
          )}
          Total active outages
        </Card>
      </li>

      <li>
        <Card className="outage-stats__card">
          {loading ? (
            <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
          ) : (
            <span className="--red">15</span>
          )}
          Ongoing ACMA outages
        </Card>
      </li>

      <li>
        <Card className="outage-stats__card">
          {loading ? (
            <div className="animate-pulse h-6 w-full mb-2 rounded-full bg-gray-200" />
          ) : (
            <span>{outageData.CUSTOMER_IMPACTED.toLocaleString("en-GB")}</span>
          )}
          Customer impacted
        </Card>
      </li>
    </ul>
  );
};

export default OutageStats;
