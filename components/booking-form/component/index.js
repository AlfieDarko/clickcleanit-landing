import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "One-off Cleaning",
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: "End Of Tenancy Cleaning",
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: "Domestic Cleaning",
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: "Deep Cleaning",
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
  }
];

const ServiceBookings = () => <Tab panes={panes} />;

export default ServiceBookings;
