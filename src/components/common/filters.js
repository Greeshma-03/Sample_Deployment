import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Temperature',
  'SPo2',
  'GSR',
  'Heart Rate',
  'Step count',  
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [filters,setfilters]=useState([0,0,0,0,0]);
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

  };

  // console.log(personName);
  
  var i=0;
  for(i=0;i<5;i++){
    if(personName[i]=='Temperature' && filters[0]==0){
      filters[0]=1;
    }
    else if(personName[i]=='Spo2' && filters[1]==0){
      filters[1]=1;
    }
    else if(personName[i]=='GSR' && filters[i]==0){
      filters[2]=2;      
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(event);
    alert("selected");
}
  

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  // <Button color="success" onClick={onSubmit} > {value}</Button>
                  {value}
                ))}
              </Box>
            )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
             {/* <Button color="inherit" > {name}</Button> */}
             {name}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
    </div>
  );
}
