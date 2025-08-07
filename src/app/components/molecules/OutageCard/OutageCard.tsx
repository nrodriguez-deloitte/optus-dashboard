import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import "./OutageCard.styles.scss";

import { IOutageProps } from "@/app/contexts/DataContext";
import { formatCreationTime, toTitleCase } from "@/lib/utils";

/** Primary UI component for user interaction */
export const OutageCard = (outage: IOutageProps) => {
  const { title, severity, stage, created, totalAffected } = outage;

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
    <Card className="outage-item gap-2 w-1/2 md:w-1/2 xl:w-1/4">
      <CardHeader className="outage-item__header">
        <h3>{title}</h3>

        {severity && (
          <Badge className={`rounded-full ${getSeverityVariant(severity)}`}>
            {toTitleCase(severity)}
          </Badge>
        )}
      </CardHeader>

      <CardContent className="outage-item__content">
        <p>{created ? formatCreationTime(created) : "Resolved"}</p>
      </CardContent>

      <CardFooter className="outage-item__footer">
        <Badge className="bg-gray-100 text-gray-900 rounded-full">
          {toTitleCase(stage)}
        </Badge>

        <p>Total Affected: {totalAffected.toLocaleString("en-GB")}</p>
      </CardFooter>
    </Card>
  );
};

export default OutageCard;
