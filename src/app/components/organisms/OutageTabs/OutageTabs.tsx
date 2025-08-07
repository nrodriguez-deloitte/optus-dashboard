import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import "./OutageTabs.styles.scss";
import { IOutageTabsProps } from "./IOutageTabs.types";
import { OUTAGE_TABS } from "./OutageTabs.constants";
import { toKebabCase } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useDataOutage } from "@/app/contexts/DataContext";
import { OutageCard } from "../../molecules/OutageCard";

export const OutageTabs = (props: IOutageTabsProps) => {
  const { id } = props;

  const { outageData, loading } = useDataOutage();

  return (
    <div id={id} className="outage-tabs">
      <h2 className="sr-only">Outage Tabs</h2>

      <Tabs
        defaultValue={toKebabCase(OUTAGE_TABS[0].label)}
        className="w-full gap-4">
        <TabsList className="w-full">
          {OUTAGE_TABS.map((tab, tabIndex) => {
            return (
              <TabsTrigger key={tabIndex} value={toKebabCase(tab.label)}>
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {loading ? (
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
        ) : (
          OUTAGE_TABS.map((tab, tabIndex) => {
            const CONTENT = outageData.OUTAGES.filter(
              (outage) => outage.type === toKebabCase(tab.label)
            ).map((outage) => <OutageCard key={outage.id} {...outage} />);

            return (
              <TabsContent
                key={tabIndex}
                value={toKebabCase(tab.label)}
                className="outage-tabs__content">
                {CONTENT}
              </TabsContent>
            );
          })
        )}
      </Tabs>
    </div>
  );
};

export default OutageTabs;
