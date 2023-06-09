import "./App.css";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';


function App() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  
  const [operation, setOperation] = useState();
  const [resultValue, setResultValue] = useState("");



  const OnSubmitClick = (e) => {

    let evaluation = "";
    try {
      
      evaluation = eval(numberOne + operation + numberTwo);
     
    } catch (error) {
      evaluation = "ERROR";
    }
    setResultValue(evaluation);
    
  }

  return (
    <div className="App">
      <div className="header">
        <br></br>
        <br></br>
        <h1> Calculator </h1>
       
      </div>
      <Box className="bx"
      sx={{ 
        width: 500,
        height: 511,
        
       
        
      }}>
      <div className="textbox">
        <TextField fullWidth id="outlined-basic" label="NumberOne"  onChange={(e) => {setNumberOne(e.target.value);}} value={numberOne} variant="outlined" />
      </div>
      <div className="textbox">
        <TextField fullWidth id="outlined-basic" label="NumberTwo" onChange={(e) => {setNumberTwo(e.target.value);}} value={numberTwo} variant="outlined" />
      </div>
      <div className="dropdown">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Operation</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select"  onChange={(e) => {setOperation(e.target.value);}} value={operation} label="Operation"  >
                  <MenuItem value={"+"}>ADD</MenuItem>
                  <MenuItem value={"-"}>SUB</MenuItem>
                  <MenuItem value={"*"}>MUL</MenuItem>
                  <MenuItem value={"/"}>DIV</MenuItem>
                

            </Select>
        </FormControl>
      </div>
      <div className="button">
        <Button variant="contained" disabled={!(operation !== undefined && numberTwo !== undefined && numberOne !== undefined)} onClick={(e) => {OnSubmitClick(e.target.value); }}>Calculate</Button>
      </div>

      <div className="text-alligned">
       
        <div className="textbox">
        <TextField fullWidth id="outlined-basic" label="Answer" onChange={(e) => {setNumberTwo(e.target.value);}} value={resultValue} variant="outlined" />
      </div>
      </div>
      </Box>
      
    </div>
  );
}

export default App;
