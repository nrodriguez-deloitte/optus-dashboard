import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import "./OutageTabs.styles.scss";
import { IOutageTabsProps } from "./IOutageTabs.types";
import { OUTAGE_TABS } from "./OutageTabs.constants";
import { formatCreationTime, toKebabCase, toTitleCase } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDataOutage } from "@/app/contexts/DataContext";

export const OutageTabs = (props: IOutageTabsProps) => {
  const { id } = props;

  const { outageData, loading } = useDataOutage();

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

  const getTabList = () => {
    return OUTAGE_TABS.map((tab, tabIndex) => {
      return (
        <TabsTrigger key={tabIndex} value={toKebabCase(tab.label)}>
          {tab.label}
        </TabsTrigger>
      );
    });
  };

  const getTabContent = () => {
    if (loading) {
      return (
        <Card className="outage-item gap-2 w-1/2 md:w-1/2 xl:w-1/4">
          <CardHeader className="outage-item__header">
            <div className="animate-pulse h-5 w-full mb-1 rounded-full bg-gray-200" />

            <div className="animate-pulse h-5 w-full mb-1 rounded-full bg-gray-200" />
          </CardHeader>

          <CardContent className="outage-item__content">
            <div className="animate-pulse h-5 w-full mb-1 rounded-full bg-gray-200" />
          </CardContent>

          <CardFooter className="outage-item__footer">
            <div className="animate-pulse h-5 w-full rounded-full bg-gray-200" />

            <div className="animate-pulse h-5 w-full rounded-full bg-gray-200" />
          </CardFooter>
        </Card>
      );
    }

    return OUTAGE_TABS.map((tab, tabIndex) => {
      const CONTENT = outageData.OUTAGES.filter(
        (outage) => outage.type === toKebabCase(tab.label)
      ).map((outage) => (
        <Card
          key={outage.id}
          className="outage-item gap-2 w-1/2 md:w-1/2 xl:w-1/4">
          <CardHeader className="outage-item__header">
            <h3>{outage.title}</h3>

            {outage.severity && (
              <Badge
                className={`rounded-full ${getSeverityVariant(
                  outage.severity
                )}`}>
                {toTitleCase(outage.severity)}
              </Badge>
            )}
          </CardHeader>

          <CardContent className="outage-item__content">
            <p>
              {outage.created ? formatCreationTime(outage.created) : "Resolved"}
            </p>
          </CardContent>

          <CardFooter className="outage-item__footer">
            <Badge className="bg-gray-100 text-gray-900 rounded-full">
              {toTitleCase(outage.stage)}
            </Badge>
            <p>
              Total Affected: {outage.totalAffected.toLocaleString("en-GB")}
            </p>
          </CardFooter>
        </Card>
      ));

      return (
        <TabsContent
          key={tabIndex}
          value={toKebabCase(tab.label)}
          className="outage-tabs__content">
          {CONTENT}
        </TabsContent>
      );
    });
  };

  return (
    <div id={id} className="outage-tabs">
      <h2 className="sr-only">Outage Tabs</h2>

      <Tabs defaultValue={toKebabCase(OUTAGE_TABS[0].label)} className="w-full">
        <TabsList>{getTabList()}</TabsList>

        {getTabContent()}
      </Tabs>
    </div>
  );
};

export default OutageTabs;
