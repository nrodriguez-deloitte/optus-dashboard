export const DUMMY_CONSTANTS = {
  LAST_UPDATED: "2025-08-07T00:00:00Z", // UNIX timestamp for 2025-08-07 00:00:00 UTC
  TOTAL_ACTIVE_OUTAGES: 3120,
  ONGOING_ACMA_OUTAGES: 15,
  CUSTOMER_IMPACTED: 139012,
  OUTAGES: [
    {
      id: "outage-1",
      title: "Sydney CBD Fiber Disruption",
      type: "new-outages",
      severity: "major",
      stage: "stage-2",
      created: "2025-08-07T00:00:00Z",
      totalAffected: 120000,
    },
    {
      id: "outage-2",
      title: "Melbourne North Scheduled Maintenance",
      type: "major-outages",
      severity: "significant",
      stage: "stage-1",
      created: "2025-08-06T22:00:00Z",
      totalAffected: 8000,
    },
    {
      id: "outage-3",
      title: "Brisbane Power Outage",
      type: "significant-outages",
      severity: "significant",
      stage: "resolved",
      created: "2025-08-02T03:30:00Z",
      totalAffected: 45000,
    },
    {
      id: "outage-4",
      title: "Perth Suburbs Fiber Cut",
      type: "exceeding-slo-sla",
      severity: "major",
      stage: "stage-1",
      created: "2025-05-07T05:15:00Z",
      totalAffected: 22000,
    },
  ],
};
