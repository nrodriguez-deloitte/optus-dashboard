import { IOutageProps } from "@/app/contexts/DataContext";

export interface IOutageCardProps extends IOutageProps {
  onCardClick?: (incidentId: string) => void;
}
