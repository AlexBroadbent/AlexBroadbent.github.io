import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import '@fontsource/manrope'
import '@fontsource/montserrat'
import { Grid, Paper, Typography } from '@mui/material'
import Intro from './section/intro/Intro'
import Blog from './section/blog/Blog'
import Portfolio from './section/portfolio/Portfolio'
import Journey from './section/journey/Journey'
import Testimonials from './section/testimonial/Testimonials'
import Contact from './section/contact/Contact'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100%',
      overflow: 'hidden'
    },
    content: {
      flexGrow: 1,
      overflow: 'auto',
      minHeight: '100%'
    },
    title: {
      margin: theme.spacing(3),
      padding: theme.spacing(3)
    },
    section: {
      margin: theme.spacing(2)
    }
  })
)

function Homepage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Intro />

        <Paper className={classes.section} elevation={1}>
          <Typography className={classes.title} variant="h3" id="portfolio">
            Portfolio
          </Typography>
          <hr />
          <Portfolio />
        </Paper>

        <Paper className={classes.section} elevation={1}>
          <Typography className={classes.title} variant="h3" id="blog">
            Blog
          </Typography>
          <hr />
          <Blog />
        </Paper>

        <Paper className={classes.section} elevation={1}>
          <Typography className={classes.title} variant="h3" id="testimonials">
            Testimonials
          </Typography>
          <hr />
          <Testimonials />
        </Paper>

        <Paper className={classes.section} elevation={1}>
          <Typography className={classes.title} variant="h3" id="journey">
            My Journey
          </Typography>
          <hr />
          <Journey />
        </Paper>

        <Paper className={classes.section} elevation={1}>
          <Typography className={classes.title} variant="h3" id="contact">
            Contact
          </Typography>
          <hr />
          <Contact />
        </Paper>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 10, p: 5 }}
        >
          <Grid item>
            <Typography variant="subtitle2">
              &copy; {new Date().getFullYear()} Alexander Broadbent
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Homepage
