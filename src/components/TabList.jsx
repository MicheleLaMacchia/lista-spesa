import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import List from "./List";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 288,
  },
  tabs: {
    borderRight: `1px solid hsl(210, 22%, 49%)`,
  },
}));

export default function VerticalTabs({
  cat,
  setCat,
  items,
  deleteItem,
  editItem,
}) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setCat(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={cat}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
      >
        <Tab label="Generale" {...a11yProps(0)} />
        <Tab label="Forno/Gastronomia" {...a11yProps(1)} />
        <Tab label="Pescheria" {...a11yProps(2)} />
        <Tab label="Macelleria" {...a11yProps(3)} />
        <Tab label="Ortofrutta" {...a11yProps(4)} />
        <Tab label="Casalinghi" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={cat} index={0}>
        <List
          items={items}
          deleteItem={deleteItem}
          editItem={editItem}
          cat={cat}
        />
      </TabPanel>
      <TabPanel value={cat} index={1}>
        <List
          items={items}
          deleteItem={deleteItem}
          editItem={editItem}
          cat={cat}
        />
      </TabPanel>
      <TabPanel value={cat} index={2}>
        <List
          items={items}
          deleteItem={deleteItem}
          editItem={editItem}
          cat={cat}
        />
      </TabPanel>
      <TabPanel value={cat} index={3}>
        <List
          items={items}
          deleteItem={deleteItem}
          editItem={editItem}
          cat={cat}
        />
      </TabPanel>
      <TabPanel value={cat} index={4}>
        <List
          items={items}
          deleteItem={deleteItem}
          editItem={editItem}
          cat={cat}
        />
      </TabPanel>
      <TabPanel value={cat} index={5}>
        <List
          items={items}
          deleteItem={deleteItem}
          editItem={editItem}
          cat={cat}
        />
      </TabPanel>
    </div>
  );
}
