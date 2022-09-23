import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { users } from "./constants";
import RangeSlider from "./filters2";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import Stack from '@mui/material/Stack';
import BLoginNavbar from "../templates/UserNavbar";


const tableHead = {
  field1: "Temperature",
  field2: "Step Count",
  field3: "Skin Conductivity",
  field4: "Heart Rate",
  field5: "SpO2"
};

function valuetext1(value) {
  return `${value}°C`;
}

const Table = () => {

  var i = 0;
  const [flag, setflag] = useState(0);
  const [init,setinit]=useState(1);
  const [value1, setValue1] = useState([20, 37]);
  const [value2, setValue2]= useState([20, 37]);
  const [value3, setValue3] = useState([20, 37]);
  const [value4, setValue4] = useState([20, 37]);
  const [value5, setValue5] = useState([20, 37]);
  const [users, setUsers] = useState([]);
  var url = localStorage.getItem("url");



  const [fields, setallfields] = useState([]);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
    console.log(newValue)
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
    console.log(newValue)
  };

  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
    console.log(newValue)
  };

  const handleChange4 = (event, newValue) => {
    setValue4(newValue);
    console.log(newValue)
  };

  const handleChange5 = (event, newValue) => {
    setValue5(newValue);
    console.log(newValue)
  };

  const onSubmitt = (event) => {
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data.feeds);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onchangeflag = (event) => {
    setinit(0);
    if (flag == 1)
      flag = setflag(0);
    else
      flag = setflag(1);
  };
  
  
  axios
      .get(url)
      .then((response) => {
        setUsers(response.data.feeds);
      })
      .catch((error) => {
        console.log(error);
      });


  var j = 0;
  

  for (i = 0; i < users.length; i++) {
    // console.log("came");
    // console.log(users);
    if (users[i] == null) continue;

    if (users[i].field1 == "nan" && users[i].field2 == "nan" && users[i].field3 == "nan" && users[i].field4 == "nan" && users[i].field5 == "nan") continue;
    if (users[i].field1 == null && users[i].field2 == null && users[i].field3 == null && users[i].field4 == null && users[i].field5 == null) continue;

    
    

    if (value1[0] < users[i].field1 && users[i].field1 < value1[1]) {
      if (value2[0] < users[i].field2 && users[i].field2 < value2[1]) {
        // if (value3[0] < users[i].field3 && users[i].field3 < value3[1]) {
        if (value4[0] < users[i].field4 && users[i].field4 < value4[1]) {
          if (value5[0] < users[i].field5 && users[i].field5 < value5[1]) {
            console.log(users[i]);
            fields.push(users[i]);
          }
        }
        // }
      }
    }
  }

  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  var url = localStorage.getItem("url");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(fields.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        fields
          .filter(item => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);



  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(fields.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };



  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <div>
          <BLoginNavbar/>


    <div className="App">

      <div class="heading">View Data</div>
      <Button variant="contained" onClick={onchangeflag}>Apply Filters</Button>
      <br/>
      <br/>
      <div style={{ textAlign: "center" }}>
        {flag == 1 ? <>
          <Box sx={{ width: 300 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Typography id="non-linear-slider" gutterBottom>
                Temperature
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext1}
              />
            </Stack>

            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Typography id="non-linear-slider" gutterBottom>
                StepCount&nbsp;&nbsp;&nbsp;
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value2}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext1}
              />
            </Stack>

            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Typography id="non-linear-slider" gutterBottom>
                Conductivity
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value3}
                onChange={handleChange3}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext1}
              />
            </Stack>

            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Typography id="non-linear-slider" gutterBottom>
                HeartRate&nbsp;&nbsp;&nbsp;
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value4}
                onChange={handleChange4}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext1}
              />
            </Stack>

            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Typography id="non-linear-slider" gutterBottom>
                SPO2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value5}
                onChange={handleChange5}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext1}
              />
            </Stack>

            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Button variant="contained" color="success" onClick={onSubmitt}>Submit</Button>
            </Stack>
          </Box>

        </>
          : <></>}


      </div>

      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={fields.length}
      />
    </div>
    </div>


  );
};
export default Table;
