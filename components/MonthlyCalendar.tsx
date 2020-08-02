import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { eachDayOfInterval, format, formatISO, isSameDay } from 'date-fns';
import { Chip } from '@material-ui/core';
import { useRouter } from 'next/router';
import { EventsContext } from '../contexts/EventsContext';
import { Event } from '../models/event';

const useStylesDayCalendarPreview = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.primary.main}`
  },
  eventChip: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: 140
  }
}));

export const DayCalendarPreview: React.FunctionComponent<{ day: Date, dayEvents: Event[] }> = ({ day, dayEvents }) => {
  const styles = useStylesDayCalendarPreview();
  const router = useRouter();

  const goToDay = () => {
    router.push('/day/[date]', `/day/${formatISO(day, { representation: 'date' })}`);
  }
  return <div
    className={styles.root}
    onClick={goToDay}
  >
    <Chip size="small" label={format(day, 'do')} />
    <br />
    {dayEvents.slice(0, 3).map((event) => <Chip
      variant="outlined"
      size="small"
      label={event.title}
      className={styles.eventChip}
    />)}
    {(dayEvents.length > 3) && <Chip
      size="small"
      label={`${dayEvents.length - 3}+ Events`}
    />}
  </div>
}

const useStylesMonthlyCalendar = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(150px, 1fr));",
    gridTemplateRows: "repeat(6, 140px)",
    gap: "1px 1px"
  }
}));

export const MonthlyCalendar: React.FunctionComponent = () => {
  const styles = useStylesMonthlyCalendar();
  const days = eachDayOfInterval({ start: new Date(2020, 6, 26), end: new Date(2020, 8, 5) })
  const { events } = React.useContext(EventsContext);
  return <div className={styles.grid}>
    {days.map((day) => (<DayCalendarPreview
      day={day}
      dayEvents={events.filter((event) => isSameDay(new Date(event.dateTime), day))}
    />))}
  </div>
}