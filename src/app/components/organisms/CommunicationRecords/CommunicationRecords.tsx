import { useDataOutage } from "@/app/contexts/DataContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import "./CommunicationRecords.styles.scss";
import { ICommunicationRecordsProps } from "./CommunicationRecords.types";
import { Button } from "../../atoms/Button";

export const CommunicationRecords = (props: ICommunicationRecordsProps) => {
  const { id } = props;

  const { outageData, loading } = useDataOutage();

  const data: Outage[] = [
    {
      id: "INC100001",
      region: "Sydney CBD, NSW",
      acma: "Critical",
      cause: "Fiber cable cut due to construction work",
      record: "https://www.google.com/?q=optus+Sydney",
      identifiedAt: "2024-08-07T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100002",
      region: "Melbourne, VIC",
      acma: "Major",
      cause: "Power outage affecting data center",
      record: "https://www.google.com/?q=optus+Melbourne",
      identifiedAt: "2024-07-24T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100003",
      region: "Brisbane, QLD",
      acma: "Minor",
      cause: "Faulty network switch in local exchange",
      record: "https://www.google.com/?q=optus+Brisbane",
      identifiedAt: "2024-07-09T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100004",
      region: "Adelaide, SA",
      acma: "Significant",
      cause: "Software update caused routing errors",
      record: "https://www.google.com/?q=optus+Adelaide",
      identifiedAt: "2024-06-23T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100005",
      region: "Perth, WA",
      acma: "Critical",
      cause: "Undersea cable fault impacting international traffic",
      record: "https://www.google.com/?q=optus+Perth",
      identifiedAt: "2024-06-08T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100006",
      region: "Hobart, TAS",
      acma: "Major",
      cause: "Storm damage to transmission tower",
      record: "https://www.google.com/?q=optus+Hobart",
      identifiedAt: "2024-05-23T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100007",
      region: "Darwin, NT",
      acma: "Minor",
      cause: "Local exchange overheating",
      record: "https://www.google.com/?q=optus+Darwin",
      identifiedAt: "2024-05-08T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100008",
      region: "Gold Coast, QLD",
      acma: "Significant",
      cause: "Vandalism on fibre cabinet",
      record: "https://www.google.com/?q=optus+Gold+Coast",
      identifiedAt: "2024-04-23T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100009",
      region: "Canberra, ACT",
      acma: "Critical",
      cause: "Core router failure in national backbone",
      record: "https://www.google.com/?q=optus+Canberra",
      identifiedAt: "2024-04-08T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100010",
      region: "Newcastle, NSW",
      acma: "Major",
      cause: "Accidental fibre cut by roadworks crew",
      record: "https://www.google.com/?q=optus+Newcastle",
      identifiedAt: "2024-03-24T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100011",
      region: "Geelong, VIC",
      acma: "Minor",
      cause: "Faulty DSLAM card replacement",
      record: "https://www.google.com/?q=optus+Geelong",
      identifiedAt: "2024-03-09T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100012",
      region: "Townsville, QLD",
      acma: "Significant",
      cause: "Flooding damaged underground fibre",
      record: "https://www.google.com/?q=optus+Townsville",
      identifiedAt: "2024-02-23T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100013",
      region: "Wollongong, NSW",
      acma: "Critical",
      cause: "Switchgear failure at distribution hub",
      record: "https://www.google.com/?q=optus+Wollongong",
      identifiedAt: "2024-02-08T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100014",
      region: "Ballarat, VIC",
      acma: "Major",
      cause: "Maintenance error causing service outage",
      record: "https://www.google.com/?q=optus+Ballarat",
      identifiedAt: "2024-01-24T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100015",
      region: "Cairns, QLD",
      acma: "Minor",
      cause: "Intermittent microwave link dropouts",
      record: "https://www.google.com/?q=optus+Cairns",
      identifiedAt: "2024-01-09T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100016",
      region: "Launceston, TAS",
      acma: "Significant",
      cause: "Configuration error in regional router",
      record: "https://www.google.com/?q=optus+Launceston",
      identifiedAt: "2023-12-25T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100017",
      region: "Bendigo, VIC",
      acma: "Critical",
      cause: "Main backhaul link severed",
      record: "https://www.google.com/?q=optus+Bendigo",
      identifiedAt: "2023-12-10T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100018",
      region: "Rockhampton, QLD",
      acma: "Major",
      cause: "Electrical surge damaged network gear",
      record: "https://www.google.com/?q=optus+Rockhampton",
      identifiedAt: "2023-11-25T00:00:00Z",
      status: "Resolved",
    },
    {
      id: "INC100019",
      region: "Mackay, QLD",
      acma: "Minor",
      cause: "Aging fibre joint causing packet loss",
      record: "https://www.google.com/?q=optus+Mackay",
      identifiedAt: "2023-11-10T00:00:00Z",
      status: "Active",
    },
    {
      id: "INC100020",
      region: "Toowoomba, QLD",
      acma: "Significant",
      cause: "Storm knocked out transmission tower",
      record: "https://www.google.com/?q=optus+Toowoomba",
      identifiedAt: "2023-10-26T00:00:00Z",
      status: "Resolved",
    },
  ];

  const exportRecords = () => {
    console.log("::: Export records");
  };

  return (
    <div id={id} className="communication-records">
      <div className="communication-records__header">
        <div className="communication-records__col">
          <h2>Find and extract communication records</h2>
          <p>Extract records as a .CSV file</p>
        </div>

        <Button primary onClick={() => exportRecords()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
              stroke="#FAFAFA"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Export 0 records
        </Button>
      </div>

      <Card className="mb-4">
        <CardHeader className="card__header">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.3333 2.5H1.66667L8.33334 10.3833V15.8333L11.6667 17.5V10.3833L18.3333 2.5Z"
                stroke="#09090B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </h2>
        </CardHeader>
      </Card>

      <Card className="mb-4">
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default CommunicationRecords;
