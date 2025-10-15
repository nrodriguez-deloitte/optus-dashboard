import { IOutageProps } from "@/app/contexts/DataContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatCreationTime, toTitleCase } from "@/lib/utils";

import "./OutageCard.styles.scss";

/** Primary UI component for user interaction */
export const OutageCard = (outage: IOutageProps) => {
  const { title, severity, stage, identifiedAt, totalAffected } = outage;

  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case "major":
        return "bg-red-100 text-red-900";

      case "significant":
        return "bg-amber-200 text-amber-900";

      default:
        break;
    }
  };

  return (
    <li>
      <Card className="outage-item">
        <CardHeader className="outage-item__header">
          <h3>{title}</h3>

          {severity && (
            <Badge className={`rounded-full ${getSeverityVariant(severity)}`}>
              {toTitleCase(severity)}
            </Badge>
          )}
        </CardHeader>

        <CardContent className="outage-item__content">
          <p>{identifiedAt ? formatCreationTime(identifiedAt) : "Resolved"}</p>
        </CardContent>

        <CardFooter className="outage-item__footer">
          <Badge className="bg-gray-100 text-gray-900 rounded-full">{toTitleCase(stage)}</Badge>

          <p>{totalAffected.toLocaleString("en-GB")} affected</p>
        </CardFooter>
      </Card>
    </li>
  );
};

export default OutageCard;
