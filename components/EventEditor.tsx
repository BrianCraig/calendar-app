import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, TextField, Select, MenuItem, Button, CardContent, CardActions } from "@material-ui/core"
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Event } from '../models/event';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  card: {
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

const useFormInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  return [value, (event) => setValue(event.target.value as string)]
}

const useEventForm = (event: Event) => {
  const [title, setTitle] = useFormInput(event.title)
  const [location, setLocation] = useFormInput(event.location.name)
  const [color, setColor] = useFormInput(event.color)
  const [timedate, setTimedate] = useState(new Date(event.dateTime))
  return {
    title,
    setTitle,
    location,
    setLocation,
    color,
    setColor,
    timedate,
    setTimedate
  }
}

export const EventEditor: React.FunctionComponent<{ event: Event, onFinalize: (event: Event) => any }> = ({ event, onFinalize }) => {
  const styles = useStyles();
  const form = useEventForm(event);
  const router = useRouter();

  const onSubmit = () => {
    onFinalize({
      id: event.id,
      title: form.title,
      dateTime: form.timedate.toISOString(),
      location: { id: 0, name: form.location },
      color: form.color
    })
    router.push('/');
  }

  return <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Card className={styles.card} >
      <CardContent>
        <TextField
          label="Event Title"
          className={styles.input}
          value={form.title}
          onChange={form.setTitle}
        />
        <br />
        <TextField 
          label="Location"
          className={styles.input}
          value={form.location}
          onChange={form.setLocation}
        />
        <br />
        <DateTimePicker
          autoOk
          ampm={false}
          value={form.timedate}
          onChange={form.setTimedate}
          label="Date and Time"
          className={styles.input}
        />
        <br />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={styles.input}
          value={form.color}
          onChange={form.setColor}
        >
          {colors.map(color => <MenuItem key={color.color} value={color.color}><span className={styles.block} style={{ backgroundColor: color.color }}></span>{color.name}</MenuItem>)}
        </Select>
      </CardContent>
      <CardActions className={styles.buttons}>
        <Button variant="contained" color="primary" onClick={onSubmit}>Save</Button>
      </CardActions>
    </Card>
  </MuiPickersUtilsProvider>

}