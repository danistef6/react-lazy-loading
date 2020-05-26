import React , { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DateRangePicker } from 'material-date-range-picker';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  Button: {
    margin: theme.spacing(2),
  },
  
}));

const div = {
    'width': '350px',
    'padding': '20px'
};
const divContainer = {
    'display': 'flex',
    'align-items': 'flex-start',
    'justify-content': 'center',
    'margin-top': '50px'
};

export default function SimpleSelect() {
  
    const [input, setInput] = useState('');

    const cambioLocale = update => {
      setInput(update);
      console.log("LLegue del select");
    }

  
    const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={divContainer}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Desde</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Desde"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Hacia</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Hacia"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div style={div}>
      <DateRangePicker
            fromDate={null}
            toDate={null}
            onChange={cambioLocale}
            value={input}
          closeDialogOnSelection={false}
        />
      </div>
      <Button variant="outlined" className={classes.Button}>Buscar</Button>
    </div>
  );
}
