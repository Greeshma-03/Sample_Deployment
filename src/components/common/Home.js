import axios from "axios";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Plot from "react-plotly.js"
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import ReactSpeedometer from "react-d3-speedometer"
import Navbar from "../templates/Navbar";
import BLoginNavbar from "../templates/UserNavbar";
import MultipleSelectChip from "./filters"
import UsersList from "./filters2";
import RangeSlider from "./filters2";


const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [timed, setTimed] = useState([]);
  // const [url,seturl]=useState();
  
  var url=localStorage.getItem("url");
  const [startDateTime, setStartDateTime] = useState(new Date());

  const [endDateTime, setEndDateTime] = useState(new Date());
  const [sub, setSub] = useState(0);   // to check whether submitted or not 
  const [init, setinit] = useState(1);   // to check whether submitted or not 
  const createdtime1 = []
  const createdtime2 = []
  const createdtime3 = []
  const createdtime4 = []
  const createdtime5 = []
  const field1 = []   // Temperature
  const field2 = []   // step count
  const field3 = []   // GSR
  const field4 = []   //SPO2
  const field5 = []   // Heart Rate 
  


  const handleChangeStartTime = (event) => {
    setStartDateTime(event.target.value);
    console.log(startDateTime);
  };

  const handleChangeEndTime = (event) => {
    setEndDateTime(event.target.value);
  };

  const handleSubmitStore = (event) => {
    event.preventDefault();
    setSub(1);
    console.log(sub);
    axios.get(`${url}&start=${startDateTime}&end=${endDateTime}`)
      .then(response => {
        setUsers(response.data.feeds);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
   const AllTime = (event) => {
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data.feeds);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  var i = 0;
  var max_beat = 0;
  for (i = 0; i < users.length; i++) {
    if (users[i].field1 != "nan" && users[i].field1!=null && users[i] != null) {
      createdtime1.push(users[i].created_at)
      field1.push(users[i].field1)
    }

    if (users[i].field2 != "nan" && users[i].field2!=null &&  users[i] != null) {
      createdtime2.push(users[i].created_at)
      field2.push(users[i].field2)
    }

    if (users[i].field3 != "nan" && users[i].field3!=null && users[i] != null) {
      createdtime3.push(users[i].created_at)
      field3.push(users[i].field3)
    }

    if (users[i].field4 != "nan" && users[i].field4!=null && users[i] != null) {
      createdtime4.push(users[i].created_at)
      field4.push(users[i].field4)
    }

    if (users[i].field5 != "nan" && users[i].field5!=null && users[i] != null) {
      createdtime5.push(users[i].created_at)
      field5.push(users[i].field5)
    }

  }

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setfields(response.data.feeds);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  console.log(createdtime5);
  console.log(field5);


  return (<div style={{ textAlign: "center" }}>
    <BLoginNavbar/>
    <MultipleSelectChip/>
    {/* <RangeSlider/> */}
    <h1> DashBoard</h1>        
    <Grid container>
      <Grid item xs={12} md={3} lg={3}>
        <List component="nav" aria-label="mailbox folders">
          <ListItem text>
            <h1>Filters</h1>
          </ListItem>
        </List>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} md={4} lg={4}>
        <List component="nav" aria-label="mailbox folders">
          <ListItem>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="datetime-local"
                  label="Start Date Time"
                  type="datetime-local"
                  variant="standard"
                  onChange={handleChangeStartTime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    m: 2,
                    width: "25ch"
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="datetime-local"
                  label="End Date Time"
                  type="datetime-local"
                  variant="standard"
                  onChange={handleChangeEndTime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    m: 2,
                    width: "25ch"
                  }}
                />
              </Grid>
            </Grid>
          </ListItem>
          <div><Button
          variant="contained"
            onClick={handleSubmitStore}
          >Submit</Button></div>
          <Divider />
        </List>
      </Grid>
    </Grid>
    {
      sub === 1 ?
        <Grid item xs={12} md={9} lg={9}>
          <Paper>
            <Table size="small">
              
            </Table>
          </Paper>
        </Grid>
        :
        null
    }

          <div><Button
            onClick={AllTime}
            variant="contained"
          >View All Time statistics</Button></div>
  
    <Plot data={[
      {
        x: Object.values(createdtime1),
        y: Object.values(field1),
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
      { type: 'bar', x: createdtime1, y: field1 },
    ]}
      layout={{ width: 750, height: 512, title: 'Temperature' }} />


    <Plot data={[
      {
        x: createdtime2,
        y: field2,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
      { type: 'bar', x: createdtime2, y: field2 },
    ]}
      layout={{ width: 750, height: 512, title: 'Step count' }} />


    <Plot data={[
      {
        x: createdtime3,
        y: field3,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
      { type: 'bar', x: createdtime3, y: field3 },
    ]}
      layout={{ width: 750, height: 512, title: 'Plots' }} />


    <Plot data={[
      {
        x: createdtime4,
        y: field4,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
      { type: 'bar', x: createdtime4, y: field4 },
    ]}
      layout={{ width: 750, height: 512, title: 'Heart Rate' }} />

    <Plot data={[
      {
        x: createdtime5,
        y: field5,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
      { type: 'bar', x: createdtime5, y: field5 },
    ]}
      layout={{ width: 750, height: 512, title: 'SpO2' }} />


  </div>
  );
};

export default Home;
