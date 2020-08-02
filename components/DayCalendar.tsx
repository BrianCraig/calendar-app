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



export const DayCalendarData: React.FunctionComponent = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ScheduleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Time" secondary="Today at 22:35PM" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationCityIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary="Irapuato Guanajuato, Mexico" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WbSunnyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Weather" secondary="Sunny, 22°C" />
      </ListItem>
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const DayCalendar: React.FunctionComponent = () => {
  const classes = useStyles();

  return <Grid container spacing={4}>
    {cards.map((card) => (
      <Grid item key={card} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h4" component="h2">
            Go to eat dinner
            </Typography>
            <DayCalendarData />
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>;
}