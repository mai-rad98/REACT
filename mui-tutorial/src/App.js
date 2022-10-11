
import './App.css';
import React from 'react'
import Button from '@material-ui/core/Button'
import  SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'

import 'fontsource-roboto'

import  Typography  from '@material-ui/core/Typography';

function CheckboxExample(){
const [checked, setChecked] = React.useState(true)
return(
   <FormControlLabel
    control={<Checkbox
     checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
inputProps={{
  'aria-label':'secondary checkbox'
}}
/>}
label = "checkbox"
/>
  )
}

function App() {
  return (
    <div className="App">
     <Typography variant='h2'> welcome to Mui tutorial</Typography>
     <Typography variant='h4'> welcome to Mui tutorial</Typography>
      <ButtonGroup>
        <Button  
        startIcon={<SaveIcon />}
        style={{
          fontSize : 20
        }} onClick={()=>alert('made IT')} variant='contained' color ='secondary'>Save</Button>
         <Button  
        startIcon={<DeleteIcon />}
        style={{
          fontSize : 20
        }} onClick={()=>alert('made IT')} variant='contained' color ='secondary'>Delete</Button>
        </ButtonGroup>
        <div><CheckboxExample /></div>
       
        <div><TextField 
              variant='filled'
              color='secondary'
              type="date"
              label='Date'/></div>
   
    </div>
    
  );
}

export default App;
