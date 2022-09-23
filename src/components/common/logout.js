
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import BLoginNavbar from '../templates/UserNavbar';


const BLogout = () => {
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
    
        // var name=localStorage.setItem("name");
                
        alert("Logged out successfully!");
        navigate("/");

      };

    return (
        <div>
            <BLoginNavbar />
            <Grid className="container">
            </Grid>

            <div container align={"center"}>

                <h2>Are you sure, you want to logout..?</h2>

                <Button variant="contained" color="success" onClick={onSubmit}>
                    Yes
                </Button>

                <span>
                    &nbsp;&nbsp;&nbsp;
                </span>
                <Button variant="outlined" color="error" onClick={() => navigate("/welcome2")}>
                    No
                </Button>

            </div>
        </div>
    );
}

export default BLogout;