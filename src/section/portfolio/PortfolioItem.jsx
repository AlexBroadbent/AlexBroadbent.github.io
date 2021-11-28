import React from 'react'
import PropTypes from 'prop-types'
import { createStyles, makeStyles } from '@mui/styles'
import { CardContent, Grid, Paper, Typography } from '@mui/material'
import Image from 'mui-image'

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(1, 0)
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(3)
    },
    title: {
      fontWeight: 700,
      paddingBottom: theme.spacing(1)
    }
  })
)

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUri: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

function PortfolioItem({ title, imageUri, children }) {
  const classes = useStyles()

  return (
    <Paper component={Grid} container className={classes.card} elevation={3}>
      <Grid item xs={3}>
        <Image fit="cover" src={`${process.env.PUBLIC_URL}/${imageUri}`} alt={title} />
      </Grid>
      <Grid item xs={9}>
        <CardContent className={classes.content}>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          {children}
        </CardContent>
      </Grid>
    </Paper>
  )
}

export default PortfolioItem
