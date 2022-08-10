import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Hidden from '@mui/material/Hidden'
import Typography from '@mui/material/Typography'
import { ButtonLink } from '../component'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      margin: theme.spacing(1, 2),
      lineHeight: '150px'
    },
    titleBox: {
      paddingTop: '1vh',
      paddingBottom: '2vh',
      paddingRight: '1vh',
      width: '100%'
    },
    title: {
      fontSize: '5rem',
      fontWeight: `700 !important`,
      textShadow: `3px 3px ${theme.palette.grey[400]}`
    },
    subtitleBox: {
      paddingTop: '3vh',
      paddingBottom: '5vh',
      lineHeight: '150px'
    },
    subtitle: {
      fontWeight: 700
    },
    linkBox: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3)
    }
  })
)

export default function Intro() {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography variant="h1" className={classes.title}>
          Alexander
        </Typography>
        <Typography variant="h1" className={classes.title}>
          Broadbent
        </Typography>
      </Box>

      <Box className={classes.subtitleBox}>
        <Typography variant="h4" className={classes.subtitle}>
          Full-Stack Principal Software Engineer
        </Typography>
      </Box>

      <Hidden smUp>
        <Stack className={classes.linkBox} direction="column" spacing={1}>
          <ButtonLink href="#portfolio" internal>
            Portfolio
          </ButtonLink>
          <ButtonLink href="#blog" internal>
            Blog
          </ButtonLink>
          <ButtonLink href="#journey" internal>
            Journey
          </ButtonLink>
          <ButtonLink href="#testimonials" internal>
            Testimonials
          </ButtonLink>
          <ButtonLink href="#contact" internal>
            Contact
          </ButtonLink>
        </Stack>
      </Hidden>
      <Hidden smDown>
        <Stack className={classes.linkBox} direction="row" spacing={1}>
          <ButtonLink href="#portfolio" internal>
            Portfolio
          </ButtonLink>
          <ButtonLink href="#blog" internal>
            Blog
          </ButtonLink>
          <ButtonLink href="#journey" internal>
            Journey
          </ButtonLink>
          <ButtonLink href="#testimonials" internal>
            Testimonials
          </ButtonLink>
          <ButtonLink href="#contact" internal>
            Contact
          </ButtonLink>
        </Stack>
      </Hidden>
    </Paper>
  )
}
