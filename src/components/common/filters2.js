// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import { useState, useEffect } from "react";
// import Typography from '@mui/material/Typography';
// import { Button } from "@mui/material";
// import axios from "axios";




// export default function RangeSlider() {
//     var i = 0;
//     const [value1, setValue1] = useState([20, 37]);
//     const [value2, setValue2] = useState([20, 37]);
//     const [value3, setValue3] = useState([20, 37]);
//     const [value4, setValue4] = useState([20, 37]);
//     const [value5, setValue5] = useState([20, 37]);
//     const [users, setUsers] = useState([]);
//     var url = localStorage.getItem("url");
    


//     const [fields, allfields] = useState([]);
//     const handleChange1 = (event, newValue) => {
//         setValue1(newValue);
//         console.log(newValue)
//     };

//     const handleChange2 = (event, newValue) => {
//         setValue2(newValue);
//         console.log(newValue)
//     };

//     const handleChange3 = (event, newValue) => {
//         setValue3(newValue);
//         console.log(newValue)
//     };

//     const handleChange4 = (event, newValue) => {
//         setValue4(newValue);
//         console.log(newValue)
//     };

//     const handleChange5 = (event, newValue) => {
//         setValue5(newValue);
//         console.log(newValue)
//     };

//     const onSubmitt = (event) => {
//         axios
//             .get(url)
//             .then((response) => {
//                 setUsers(response.data.feeds);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };



//     var j = 0;
//     for (i = 0; i < users.length; i++) {
//         console.log("came");
//         // console.log(users);
//         // if (value1[0] < users[i].field1 && users[i].field1 < value1[1]) {
//         //     if (value2[0] < users[i].field2 && users[i].field2 < value2[1]) {
//         //         if (value3[0] < users[i].field3 && users[i].field3 < value3[1]) {
//         if (value4[0] < users[i].field4 && users[i].field4 < value4[1]) {
//             // if (value5[0] < users[i].field5 && users[i].field5 < value5[1]) {
//             // console.log(value1);
//             // console.log(value2);
//             fields.push(users[i]);
//             // }
//             // }
//         }
//         //     }
//         // }
//     }

//     localStorage.setItem("fields",fields);

//     return (
//         <div style={{ textAlign: "center" }}>

//             <Box sx={{ width: 300 }}>
//                 <Typography id="non-linear-slider" gutterBottom>
//                     Temperature: {valuetext1(value1)}
//                 </Typography>
//                 <Slider
//                     getAriaLabel={() => 'Temperature range'}
//                     value={value1}
//                     onChange={handleChange1}
//                     valueLabelDisplay="auto"
//                     getAriaValueText={valuetext1}
//                 />
//                 <Typography id="non-linear-slider" gutterBottom>
//                     SPo2: {`${value2}Ra`}
//                 </Typography>
//                 <Slider
//                     getAriaLabel={() => 'Temperature range'}
//                     value={value2}
//                     onChange={handleChange2}
//                     valueLabelDisplay="auto"
//                     getAriaValueText={valuetext1}
//                 />
//                 <Typography id="non-linear-slider" gutterBottom>
//                     Step count: {`${value3}Ra`}
//                 </Typography>
//                 <Slider
//                     getAriaLabel={() => 'Temperature range'}
//                     value={value3}
//                     onChange={handleChange3}
//                     valueLabelDisplay="auto"
//                     getAriaValueText={valuetext1}
//                 />
//                 <Typography id="non-linear-slider" gutterBottom>
//                     Step count: {`${value4}steps`}
//                 </Typography>
//                 <Slider
//                     getAriaLabel={() => 'Temperature range'}
//                     value={value4}
//                     onChange={handleChange4}
//                     valueLabelDisplay="auto"
//                     getAriaValueText={valuetext1}
//                 />
//                 <Slider
//                     getAriaLabel={() => 'Temperature range'}
//                     value={value5}
//                     onChange={handleChange5}
//                     valueLabelDisplay="auto"
//                     getAriaValueText={valuetext1}
//                 />
//             </Box>
//             <Button variant="contained" onClick={onSubmitt}>Submit</Button>

//         </div>


//     );
// }
