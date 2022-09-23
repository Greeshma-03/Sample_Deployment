import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";
import Paper from "@mui/material/Paper";
import BLoginNavbar from "../templates/UserNavbar";
// import { makeStyles, createStyles } from '@material-ui/core/styles';
// import { Theme, createStyles} from "@mui/material";
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     paper: {
// padding: theme.spacing(2),
// textAlign: 'center',
// color: theme.palette.text.secondary,
//     },
//     root: {
//       flexGrow: 1,
//     },
//   }),
// );

const Current = (props) => {
  const [url, seturl] = useState(localStorage.getItem("url"));
  const [users, setUsers] = useState([]);
  var Temp = 0;
  var SpO2 = 0;
  var HeartRate = 0;
  var steps = 0;
  var gsr = 0;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data.feeds);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  var i = 0;
  for (i = 0; i < users.length; i++) {
    if (users[i].field1 != "nan" && users[i].field1 != null && users[i] != null) {
      Temp = users[i].field1;
    }

    if (users[i].field2 != "nan" && users[i].field2 != null && users[i] != null) {
      steps = users[i].field2;
    }

    if (users[i].field3 != "nan" && users[i].field3 != null && users[i] != null) {
      gsr = users[i].field3;
    }

    if (users[i].field4 != "nan" && users[i].field4 != null && users[i] != null) {
      SpO2 = users[i].field4;
    }

    if (users[i].field5 != "nan" && users[i].field5 != null && users[i] != null) {
      HeartRate = users[i].field5;
    }

  }

  return (<div style={{ textAlign: "center" }}>
    <BLoginNavbar />
    {/* <div><Button onClick={AllTime}>View All Time statistics</Button></div>*/}
    {/* <h1> Current Readings </h1>
    <h1>Temp = {Temp}</h1>
    <h2>Steps = {steps}</h2> */}
    <div style={{
      width: '90%',
      padding: '10px'
    }}>
      <Grid container spacing={3} align="center">
        <Grid item xs={12} >
          <Paper style={{ padding: '10px' }}>
            Current Values
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper style={{ padding: '10px' }}>
            <b>Body Temperature</b> <p>{Temp} C</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper style={{ padding: '10px' }}>
            <b>Steps Count</b> <p>{steps}</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper style={{ padding: '10px' }}>
            <b>Skin Conductivity</b> <p>{gsr}</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper style={{ padding: '10px' }}>
            <b>Heart Rate</b> <p>{HeartRate}</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper style={{ padding: '10px' }}>
            <b>SpO2</b> <p>{SpO2}</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </div>
  );
};

export default Current;
