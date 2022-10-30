/* eslint-disable prettier/prettier */
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { ImageLink, Section } from '../component'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
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
    }
  })
)

export function Contact() {
  const classes = useStyles()

  return (
    <Section title="Contact">
      <Box className={classes.root} sx={{ display: 'flex' }} flexDirection="column" justifyContent="center" alignItems="center">
        <Box className={classes.titleBox}>
          <Typography variant="h5" className={classes.title}>
            Consult me about your idea or project
          </Typography>

          <Typography
            variant="h4"
            component={Link}
            className={classes.title}
            href="mailto:hello@abroadbent.com"
          >
            hello@abroadbent.com
          </Typography>
        </Box>

        <Grid container direction="column" className={classes.subtitleBox}>
          <Typography variant="h4" className={classes.subtitle}>
            Follow me on
          </Typography>

          <Stack direction="row">
            <ImageLink icon={faMedium} link="https://alex-broadbent.medium.com" />
            <ImageLink icon={faGithubSquare} link="https://github.com/alexbroadbent" />
            <ImageLink icon={faLinkedin} link="https://linkedin.com/in/alexander-broadbent" />
          </Stack>
        </Grid>
      </Box>
    </Section>
  )
}
