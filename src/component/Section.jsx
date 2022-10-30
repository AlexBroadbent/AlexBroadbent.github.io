import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      margin: theme.spacing(2),
      marginTop: theme.spacing(5)
    },
    title: {
      margin: theme.spacing(2),
      padding: theme.spacing(2)
    }
  })
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export function Section({ title, children }) {
  const classes = useStyles()

  return (
    <Box className={classes.section} elevation={5}>
      {title && (
        <Typography
          variant="h3"
          id={title.toLowerCase()}
          className={classes.title}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  )
}
