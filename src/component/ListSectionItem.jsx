import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      minHeight: '100%',
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        marginTop: 0,
        paddingTop: 0
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        marginTop: 0,
        paddingTop: 0
      }
    },
    content: {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {},
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1, 0)
      }
    },
    title: {
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(0, 1)
      },
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(3)
      }
    }
  })
)

ListSectionItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired
}

export function ListSectionItem({ image, title, actions, children }) {
  const classes = useStyles()

  return (
    <Grid container className={classes.container} elevation={3}>
      <Grid
        item
        xs={12}
        sm={3}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          component="img"
          fit="cover"
          src={image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/${image}`}
          alt={title}
          sx={{ maxWidth: 250, width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.content}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        {children}
        {actions && <CardActions>{actions}</CardActions>}
      </Grid>
    </Grid>
  )
}
