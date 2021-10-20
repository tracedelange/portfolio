import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '70vh',
    fontSize: '5vmin',
    backgroundColor: '#2D434E',
    width: '100%',
  },
  tabs: {
    fontSize: '3vmin',
    borderRight: `1px solid ${theme.palette.divider}`,
    // margin: '3vmin',
    marginTop: '3vmin',
    marginBottom: '3vmin',
  },
  tabContent: {
    alignItems: 'center',
    flexGrow: 5,
    maxWidth: '60%'
    //   alignContent: 'center',
  },
  linkButton: {
    fontSize: '2vmin',
    margin: '5vmin',
    backgroundColor: '#F2F4F3',
    marginTop: '0',
    // position: 'absolute'
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
}));

export default function VerticalTabs({ projectArray }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tabs} label="Monster Audience" {...a11yProps(4)} />
          <Tab className={classes.tabs} label="Network Notebook" {...a11yProps(5)} />
          <Tab className={classes.tabs} label="WBC Map" {...a11yProps(0)} />
          <Tab className={classes.tabs} label="Money Talks" {...a11yProps(2)} />
          <Tab className={classes.tabs} label="Sales Console" {...a11yProps(1)} />
          <Tab className={classes.tabs} label="Digital Tidepool" {...a11yProps(3)} />
          <Link className={classes.link} to='/experience' {...a11yProps(0)}>
            <Button variant="contained" className={classes.linkButton}>
              Experience
            </Button>
          </Link>
        </Tabs>
        <TabPanel className={classes.tabContent} value={value} index={0}>
          {projectArray[5]}
        </TabPanel>
        <TabPanel className={classes.tabContent} value={value} index={1}>
          {projectArray[4]}
        </TabPanel>
        <TabPanel className={classes.tabContent} value={value} index={2}>
          {projectArray[0]}
        </TabPanel>
        <TabPanel className={classes.tabContent} value={value} index={3}>
          {projectArray[3]}
        </TabPanel>
        <TabPanel className={classes.tabContent} value={value} index={4}>
          {projectArray[1]}
        </TabPanel>
        <TabPanel className={classes.tabContent} value={value} index={5}>
          {projectArray[2]}
        </TabPanel>
      </div>
    </>
  );
}