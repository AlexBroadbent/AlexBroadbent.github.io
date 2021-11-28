import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '30vh',
      paddingLeft: '4vh',
      lineHeight: '150px',
      width: '100%'
    },
    titleBox: {
      paddingTop: '3vh',
      paddingBottom: '3vh'
    },
    title: {
      fontSize: '15rem',
      fontWeight: `700 !important`,
      textShadow: `2px 2px ${theme.palette.grey[400]}`
    },
    subtitleBox: {
      paddingTop: '3vh',
      paddingBottom: '5vh'
    },
    subtitle: {
      fontWeight: 700
    }
  })
)

function Intro() {
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
          Full-Stack Senior Software Engineer
        </Typography>
      </Box>
    </Paper>
  )
}

export default Intro
