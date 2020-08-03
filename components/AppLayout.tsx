import React from 'react';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import EventIcon from '@material-ui/icons/Event';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export const AppLayout: React.FunctionComponent<{
  title?: string,
  withHeader?: boolean
}> = ({ children, title = "My Personal Calendar", withHeader }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link href={"/"}>
            <EventIcon className={classes.icon} />
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

        {withHeader && (<div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              My personal Calendar
              </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Check your entirely offline Calendar for yourself, All your events are saved on this browser only!
              </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href={"/new-event"}>
                    <Button variant="contained" color="primary">
                      Add a New Event
                      </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>)}
        <Container className={classes.cardGrid} maxWidth="lg">
          {children}
        </Container>
      </main>
    </React.Fragment>
  );
}