import { createContext, useContext, ReactNode, useState, useEffect } from "react";

import { DUMMY_CONSTANTS } from "@/lib/dummy-constants";

export interface OutageTimelineEvent {
  status: string;
  time: string;
  stage: string;
  severity: string;
  consumers?: number;
  affected?: number;
  commsCompliance?: Array<{
    channel: string;
    time: string;
    complete: boolean;
  }>;
}

export interface IOutageProps {
  incidentId: string;
  communicationId: string;
  status: string;
  type: string;
  severity: string;
  stage: string;
  region: string;
  identifiedAt: string;
  lastUpdate: string;
  title: string;
  description: string;
  causeOfOutage: string;
  totalAffected: number;
  outageTimeline: Array<OutageTimelineEvent>;
}

export interface ICommsRecordProps {
  customerId: string;
  incidentId: string;
  channel: string;
  sentAt: string;
  region: string;
  status: string;
}

interface IDataContextProps {
  LAST_UPDATED: string;
  ACMA_OUTAGES: number;
  ONGOING_ACMA_OUTAGES: number;
  UNPLANNED_OUTAGES: number;
  OUTAGES: Array<IOutageProps>;
  COMMS_RECORDS: Array<ICommsRecordProps>;
}

const DataContext = createContext<
  | {
      outageData: IDataContextProps;
      loading: boolean;
      error: string | null;
      refetch: () => Promise<void>;
    }
  | undefined
>(undefined);

// Provider component
export function DataProvider({ children }: { children: ReactNode }) {
  const [outageData, setOutageData] = useState<IDataContextProps>({} as IDataContextProps);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOutageData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://mock.httpstatus.io/200");
      if (!res.ok) throw new Error("Failed to fetch users");
      // const data = await res.json();

      setOutageData(DUMMY_CONSTANTS);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOutageData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        outageData,
        loading,
        error,
        refetch: fetchOutageData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

// Custom hook for consuming the context
export function useDataOutage() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataOutage must be used within a DataProvider");
  }
  return context;
}
