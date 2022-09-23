import { useState } from "react";
import Button from "@mui/material/Button";

import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Navbar from "../templates/Navbar";

function Welcome(props) {
  return (
      
    <div container align={"center"}>
    <Navbar />
    <h1> Hi, welcome to our website </h1>
      
    </div>
  );
};

export default Welcome;
