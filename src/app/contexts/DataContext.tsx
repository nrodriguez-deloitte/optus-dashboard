import { DUMMY_CONSTANTS } from "@/lib/dummy-constants";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

// Create the context
interface IDataContext {
  LAST_UPDATED: string;
  TOTAL_ACTIVE_OUTAGES: number;
  ONGOING_ACMA_OUTAGES: number;
  CUSTOMER_IMPACTED: number;
  OUTAGES: Array<{
    id: string;
    title: string;
    type: string;
    severity: string;
    stage: string;
    created: string;
    totalAffected: number;
  }>;
}
const DataContext = createContext<
  | {
      outageData: IDataContext;
      loading: boolean;
      error: string | null;
      refetch: () => Promise<void>;
    }
  | undefined
>(undefined);

// Provider component
export function DataProvider({ children }: { children: ReactNode }) {
  const [outageData, setOutageData] = useState<IDataContext>(
    {} as IDataContext
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOutageData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://mock.httpstatus.io/200"); // Update this to your actual endpoint
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
      }}>
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
