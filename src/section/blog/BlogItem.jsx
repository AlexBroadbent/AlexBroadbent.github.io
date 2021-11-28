import React from 'react'
import Image from 'mui-image'
import PropTypes from 'prop-types'
import { createStyles, makeStyles } from '@mui/styles'
import { CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import ButtonLink from '../../component/ButtonLink'

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
      fontWeight: 700
    },
    subtitle: {
      padding: theme.spacing(1, 0),
      fontWeight: 600
    },
    text: {
      paddingBottom: theme.spacing(2),
      fontWeight: 500
    }
  })
)

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

function BlogItem({ title, image, created, children, link }) {
  const classes = useStyles()

  return (
    <Paper component={Grid} container className={classes.card} elevation={3}>
      <Grid item xs={3}>
        <Image component="img" sx={{ width: 150, height: 150 }} src={image} alt={title} />
      </Grid>
      <Grid item xs={9}>
        <CardContent className={classes.content}>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="subtitle2" className={classes.subtitle}>
            {created}
          </Typography>
          <Typography variant="body2" className={classes.text}>
            {children}
          </Typography>
          <CardActions>
            <ButtonLink href={link}>Read on Medium</ButtonLink>
          </CardActions>
        </CardContent>
      </Grid>
    </Paper>
  )
}

export default BlogItem
