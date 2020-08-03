import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { eachDayOfInterval, format, formatISO, isSameDay, isSameMonth } from 'date-fns';
import { Chip } from '@material-ui/core';
import { useRouter } from 'next/router';
import { EventsContext } from '../contexts/EventsContext';
import { Event, filterEventsByDay, comparatorByDatetimeAsc } from '../models/event';

const useStylesDayCalendarPreview = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  chips: {
    margin: theme.spacing(1, 0, 0, 1)
  },
  eventChip: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: 140,
    margin: theme.spacing(1, 0, 0, 1)
  },
  notSameMonth: {
    opacity: 0.5
  }
}));

export const DayCalendarPreview: React.FunctionComponent<{ day: Date, dayEvents: Event[] }> = ({ day, dayEvents }) => {
  const styles = useStylesDayCalendarPreview();
  const router = useRouter();

  const sameMonth = isSameMonth(day, new Date());

  const goToDay = () => {
    router.push('/day/[date]', `/day/${formatISO(day, { representation: 'date' })}`);
  }
  return <div
    className={`${styles.root} ${sameMonth ? '' : styles.notSameMonth}`}
    onClick={goToDay}
  >
    <Chip size="small" label={format(day, 'do')} className={styles.chips} />
    <br />
    {dayEvents.sort(comparatorByDatetimeAsc).slice(0, 3).map((event) => <Chip
      variant="outlined"
      size="small"
      label={event.title}
      className={styles.eventChip}
      style={{ borderColor: event.color }}
    />)}
    {(dayEvents.length > 3) && <Chip
      size="small"
      className={styles.chips}
      label={`${dayEvents.length - 3}+ Events`}
    />}
  </div>
}

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const useStylesMonthlyCalendar = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(150px, 1fr));",
    gridTemplateRows: "24px repeat(6, 140px)",
    gap: "2px 2px",
    backgroundColor: theme.palette.divider
  },
  weekday: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
    textAlign: "center"
  }
}));

export const MonthlyCalendar: React.FunctionComponent = () => {
  const styles = useStylesMonthlyCalendar();
  const days = eachDayOfInterval({ start: new Date(2020, 6, 26), end: new Date(2020, 8, 5) })
  const { events } = React.useContext(EventsContext);
  return <div className={styles.grid}>
    {weekDays.map((day) => <div className={styles.weekday}>{day}</div>)}
    {days.map((day) => (<DayCalendarPreview
      day={day}
      dayEvents={filterEventsByDay(events, day)}
    />))}
  </div>
}