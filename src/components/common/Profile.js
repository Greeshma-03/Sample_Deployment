import { Button } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer"
import Navbar from "../templates/Navbar";
import Grid from "@mui/material/Grid";
import { name, email } from "../common/Register"
import BLoginNavbar from "../templates/UserNavbar";
// import AnimatedButton from 'react-animated-buttons';

// import * as Animatable from 'react-native-animatable';
// import Heart from "react-animated-heart";
// import Heartbeat from 'react-heartbeat';

const Profile = (props) => {
    const [users, setUsers] = useState([]);
    const startDateTime = new Date();
    const endDateTime = new Date();
    const [hsub, setHsub] = useState(0);
    const [ssub, setSsub] = useState(0);
    console.log(startDateTime.setUTCHours(0, 0, 0, 0));
    console.log(startDateTime.toUTCString());
    console.log(endDateTime.setUTCHours(23, 59, 59, 999));
    console.log(endDateTime.toUTCString());

    // const [isClick, setClick] = useState(false);

    const [url, seturl] = useState(localStorage.getItem("url"));

    const [MHeartRate, setMHR] = useState(0);
    const [TotalSteps, setTotalSteps] = useState(0);

    const current = new Date();
    console.log(current);

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

    const MaxHeartRate = (event) => {
        event.preventDefault();

        if (hsub === 0)
            setHsub(1);
        else
            setHsub(0);
    }
    const TotalStepCount = (event) => {
        event.preventDefault();


        if (ssub === 0)
            setSsub(1);
        else
            setSsub(0);
    }
    var i = 0;
    for (i = 0; i < users.length; i++) {
        if (users[i].field4 != "nan" && users[i].field4 != null && users[i] != null) {
            if (MHeartRate < users[i].field4)
                setMHR(users[i].field4)
        }
    }
    var tot = TotalSteps;
    for (i = 0; i < users.length; i++) {
        if (users[i].field2 != "nan" && users[i].field2 != null && users[i] != null) {
            tot += parseInt(users[i].field2);
        }
    }

    var spo2 = 0;
    var count = 0;
    for (i = 0; i < users.length; i++) {
        if (users[i].field5 != "nan" && users[i].field5 != null && users[i] != null && parseInt(users[i].field5) != 0) {
            spo2 += parseFloat(users[i].field5);
            count++;
        }
    }


    if (count != 0)
        spo2 /= count;

    return (<div style={{ textAlign: "center" }}>
        <BLoginNavbar />
        <h1> DashBoard</h1>
        {
            console.log(spo2)
        }



        <Button color="inherit" onClick={MaxHeartRate}>
            Heart
        </Button>
        <Button color="inherit" onClick={TotalStepCount}>
            Steps
        </Button>
        {
            <Grid>{MHeartRate}</Grid>
        }
       

    </div>
    );
};

export default Profile;
