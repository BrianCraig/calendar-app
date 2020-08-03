import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, TextField, Select, MenuItem, Button, CardContent, CardActions } from "@material-ui/core"
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  card:{
    maxWidth: 400,
  },
  input: {
    width: 300,
    margin: theme.spacing(2, 4, 2, 4),
  },
  block: {
    width: 22,
    height: 22,
    display: "inline-block",
    marginRight: 6
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    margin: theme.spacing(0, 0, 2, 0),
  }
}));

const colors: { name: string, color: string }[] = [
  {
    name: "Black",
    color: "#000"
  },
  {
    name: "Orange",
    color: "#f44336"
  },
  {
    name: "Pink",
    color: "#e91e63"
  },
  {
    name: "Purple",
    color: "#9c27b0"
  },
  {
    name: "Blue",
    color: "#2196f3"
  },
  {
    name: "Green",
    color: "#4caf50"
  },
];

export const EventEditor = () => {
  const styles = useStyles();
  return <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Card className={styles.card} >
      <CardContent>
        <TextField id="standard-basic" label="Event Title" className={styles.input} />
        <br />
        <TextField id="standard-basic" label="Location" className={styles.input} />
        <br />
        <DateTimePicker
          autoOk
          ampm={false}
          value={new Date()}
          onChange={() => { }}
          label="Date and Time"
          className={styles.input}
        />
        <br />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"#000"}
          className={styles.input}
          onChange={() => { }}
        >
          {colors.map(color => <MenuItem key={color.color} value={color.color}><span className={styles.block} style={{ backgroundColor: color.color }}></span>{color.name}</MenuItem>)}
        </Select>
      </CardContent>
      <CardActions className={styles.buttons}>
        <Button variant="contained" color="primary">Save</Button>
      </CardActions>
    </Card>
  </MuiPickersUtilsProvider>

}