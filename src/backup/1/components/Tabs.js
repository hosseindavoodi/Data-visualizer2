import React from "react";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Events from "./Events";

const Tabs = () => (
  <TabsComponent>
    <TabList>
      
        <Tab key={1}>Events</Tab>
        <Tab key={2}>Statistics</Tab>
        <Tab key={3}>Lineups</Tab>
        <Tab key={4}>Players</Tab>
     
    </TabList>

      <TabPanel key={1}><Events /></TabPanel>
      <TabPanel key={2}>fasdfa</TabPanel>
      <TabPanel key={3}>fasdfa</TabPanel>
      <TabPanel key={4}>fasdfa</TabPanel>


 
  </TabsComponent>
);

export default Tabs;
