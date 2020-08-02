import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { eachDayOfInterval, format, formatISO } from 'date-fns';
import { Chip } from '@material-ui/core';
import { useRouter } from 'next/router';

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

export const DayCalendarPreview: React.FunctionComponent<{ day: Date }> = ({ day }) => {
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
    <Chip
      variant="outlined"
      size="small"
      label="Do the cleaning"
    />
    <Chip
      variant="outlined"
      size="small"
      label="Go to the Movies"
    />
    <Chip
      variant="outlined"
      size="small"
      label="Buy tickets for tonight at xxx large description"
      className={styles.eventChip}
    />
    <Chip
      size="small"
      label="3+ Events"
    />
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
  return <div className={styles.grid}>
    {days.map((day) => <DayCalendarPreview day={day} />)}
  </div>
}