import { useState } from "react";
import Button from "@mui/material/Button";

import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Navbar from "../templates/Navbar";
import BLoginNavbar from "../templates/UserNavbar";

function Welcome2(props) {
   
    const [hsub, setHsub] = useState(0);
    const [ssub, setSsub] = useState(0);
    const [name,setname]=useState(localStorage.getItem("name"));

    

  return (
      
    <div container align={"center"}>
    <BLoginNavbar />
    <h1> Hi {name}, welcome to our customized web page </h1>
      
    </div>
  );
};

export default Welcome2;
