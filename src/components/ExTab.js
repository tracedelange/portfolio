import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
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
    height: '100%',
    fontSize: '5vmin',
    backgroundColor: '#2D434E',
    width: '100%',
  },
  tabs: {
    fontSize: '2.3vmin',
    borderRight: `1px solid ${theme.palette.divider}`,
    // margin: '3vmin',
    marginTop: '2.3vmin',
    marginBottom: '2.3vmin',
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
    backgroundColor: '#F2F4F3'
  },
  divider: {
    backgroundColor: "#F2F4F3"
  },
  linkButton: {
    fontSize: '2vmin',
    backgroundColor: '#F2F4F3',
    marginLeft: '8vmin',
    marginRight: '8vmin'
    // width: '4vmin'
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >

        <Tab className={classes.tabs}
          label="freelance development"
          {...a11yProps(3)} />
        <Tab className={classes.tabs}
          label="Software education"
          {...a11yProps(2)} />
        <Tab className={classes.tabs}
          label="Post Graduate Work"
          {...a11yProps(1)} />
        <Tab className={classes.tabs}
          label="College Education"
          {...a11yProps(0)} />




        <Link className={classes.link} to='/skills'>
          <Button variant="contained" className={classes.linkButton}>
            Skills
          </Button>
        </Link>

      </Tabs>
      <TabPanel className={classes.tabContent} value={value} index={0}>
        <div className='xp-item'>
          <h3>Freelance Developer</h3>
          <Divider className={classes.divider} />
          <h5> 1/2020 - Present</h5>
          <ul className="freelance-list">
            <li>
              <a href='https://apps.apple.com/us/app/impromptu-whats-happening/id1560222075'>Impromptu</a>
              <ul>
                <li>
                  Created a fully functional admin portal with CRUD capabilities as a contracted consultant.
                </li>
              </ul>
            </li>
            <li>
              <a href='https://find.waconiabrewing.com/'>Waconia Brewing Company</a>
              <ul>
                <li>
                  Developed backend infrastructure to autonomously process sales reports from three unique distribution sources into a firebase server.
                </li>
                <li>
                  Developed a customer-facing front-end tool which displays geolocation information about where to locate products based on recent sales reports, serving 1000+ users per month on average.
                </li>

              </ul>
            </li>
            <li>
              <a href='https://www.cleanplanetproject.org/'>Clean Planet Project</a>
              <ul>
                <li>
                  Developed backend python scripts to aggregate database statistics.
                </li>
                <li>
                  Created API's to serve database statistics to mobile app and organization website.
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel className={classes.tabContent} value={value} index={1}>
        <div className='xp-item'>
          <h3>Flatiron School</h3>
          <h5>Software Engineering Student</h5>
          <Divider className={classes.divider} />
          <h5>Enrolled 6/2021 - Anticipated Graduation 11/2021</h5>
          <p>Complete comprehensive software engineering coursework in the context of modern web infrastructure.
            Coursework includes developing full-stack applications using in-demand frameworks such as React, Rails and Flask as well as 1500+ hours of hands-on experience building web-based applications and mastering OOP, RESTful and DRY practices.
          </p>
        </div>
      </TabPanel>
      <TabPanel className={classes.tabContent} value={value} index={2}>
        <div className='xp-item'>
          <h3>American Preclinical Services</h3>
          <h5>Pathology Technician</h5>
          <Divider className={classes.divider} />
          <h5>Employed 8/2020 - 6/2021</h5>
          <p>Function as a member of a highly efficient team responsible for conducting a wide range of duties in the support of proprietary preclinical medical device trials for over 300 clients.
            Core responsibilities include performance of gross pathological inspections/necropsies, collection and processing of data in accordance with GLP standards and practice high-quality FDA complaint documentation.
          </p>
          <br />
          <p>Relevant software duties include the use of Python in support of data management/archival, as well as debugging lab equipment legacy code (Bash, Visual Basic) </p>
        </div>
      </TabPanel>
      <TabPanel className={classes.tabContent} value={value} index={3}>
        <div className='xp-item'>
          <h3>University Of Oregon</h3>
          <h5>B.S. Biological Sciences</h5>
          <Divider className={classes.divider} />
          <h5>Graduated March, 2020</h5>
          <p>Coursework focused heavily on scientific data analysis, statistics and critical reasoning.
            Relevant technologies ephasised inluded Matlab, Python (Numpy, Pandas, MatplotLib, etc.), and the full Microsoft Office Suite </p>
          <br />
          {/* <p>In addition to analytical skills, </p> */}
        </div>
      </TabPanel>
    </div>
  );
}