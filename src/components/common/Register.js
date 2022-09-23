import { useState } from "react";
import Button from "@mui/material/Button";

import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Navbar from "../templates/Navbar";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";


const Register = (props) => {
  const navigate = useNavigate();

  const [id, setid] = useState("");
  const [key, setkey] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContact] = useState("");


  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeId = (event) => {
    setid(event.target.value);
  };

  const onChangeKey = (event) => {
    setkey(event.target.value);
  };

  const resetbuyerInputs = () => {
    setName("");
    setid("");
    setkey("");
  };



  const onSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("name",name);
    
    var address = "https://api.thingspeak.com/channels/";
    address += id;
    address += "/feeds.json?api_key=";
    address += key;

    console.log(address);
    localStorage.setItem("url", address);

    axios
      .get(address)
      .then((response) => {
        console.log(response);
        alert("Login Successful!")
        navigate("/welcome2");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Credentials!!!")
      });

    resetbuyerInputs();
  };





  return (
    <div container align={"center"}>
      <Navbar />
      <h1> Login Here </h1>
      <Grid container align={"center"} spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={onChangeUsername}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Channel ID"
            variant="outlined"
            value={id}
            onChange={onChangeId}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="API KEY"
            variant="outlined"
            value={key}
            onChange={onChangeKey}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  )
};


export default Register;