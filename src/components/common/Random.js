import { useState } from "react";
import Button from "@mui/material/Button";

import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Navbar from "../templates/Navbar";
function Random(props) {


  return (
      
    <div container align={"center"}>
    <Navbar />
    <h1> Fill with some random details </h1>      
    </div>
  );
};

export default Random;
