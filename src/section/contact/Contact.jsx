import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import ContactLink from './ContactLink'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      width: '100%'
    },
    titleBox: {
      paddingBottom: theme.spacing(2)
    },
    title: {
      fontWeight: 900
    },
    subtitleBox: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    subtitle: {
      fontWeight: 700
    },
    angelListIcon: {
      backgroundColor: theme.palette.primary.main
    }
  })
)

function Contact() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography variant="h5" className={classes.title}>
          Consult me about your idea or project
        </Typography>

        <Typography
          variant="h3"
          component={Link}
          className={classes.title}
          href="mailto:hello@alexbroadbent.co.uk"
        >
          hello@alexbroadbent.co.uk
        </Typography>
      </Box>

      <Grid container direction="column" className={classes.subtitleBox}>
        <Typography variant="h4" className={classes.subtitle}>
          Follow me on
        </Typography>

        <Grid item>
          <ContactLink icon={faMedium} link="https://alex-broadbent.medium.com">
            Medium
          </ContactLink>
        </Grid>
        <Grid item>
          <ContactLink icon={faGithubSquare} link="https://github.com/alexbroadbent">
            GitHub
          </ContactLink>
        </Grid>
        <Grid item>
          <ContactLink icon={faLinkedin} link="https://linkedin.com/in/alexander-broadbent">
            LinkedIn
          </ContactLink>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact
