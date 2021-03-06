import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Divider from '@material-ui/core/Divider';
import { Event, comparatorByDatetimeAsc } from '../models/event';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { WeatherStatus } from './EventWeather';



export const DayCalendarData: React.FunctionComponent<{event: Event}> = ({event}) => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ScheduleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Time" secondary={format(parseISO(event.dateTime), 'p')} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationCityIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary={event.location} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WbSunnyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Weather" secondary={<WeatherStatus event={event} />} />
      </ListItem>
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '4px solid #000'
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const DayCalendar: React.FunctionComponent<{events: Event[]}> = ({events}) => {
  const classes = useStyles();
  const router = useRouter();
  const goToEvent = (event: Event) => () => {
    router.push('/edit-event/[id]', `/edit-event/${event.id}`);
  }

  return <Grid container spacing={4}>
    {events.sort(comparatorByDatetimeAsc).map((event) => (
      <Grid item key={event.id} xs={12} sm={6} md={4}>
        <Card className={classes.card} style={{borderColor: event.color}}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h4" component="h2">
            {event.title}
            </Typography>
            <DayCalendarData event={event} />
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" onClick={goToEvent(event)}>
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
    {events.length === 0 && <Typography variant={"h4"}>No Events for this day!</Typography>}
  </Grid>;
}