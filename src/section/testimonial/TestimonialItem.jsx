import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import Image from 'mui-image'
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
      fontWeight: 700,
      paddingBottom: theme.spacing(1)
    },
    name: {
      fontWeight: 600,
      paddingBottom: theme.spacing(1)
    },
    quote: {
      color: theme.palette.text.secondary,
      marginInlineStart: theme.spacing(1),
      marginBlockStart: theme.spacing(1),
      marginInlineEnd: theme.spacing(1),
      marginBlockEnd: theme.spacing(1)
    },
    signature: {
      paddingTop: theme.spacing(2)
    }
  })
)

TestimonialItem.propTypes = {
  client: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

function TestimonialItem({ client, name, imageUrl, website, children }) {
  const classes = useStyles()

  return (
    <Paper component={Grid} container className={classes.card} elevation={3}>
      <Grid item xs={3}>
        <Image src={imageUrl} fit="cover" alt={client} />
      </Grid>
      <Grid item xs={9}>
        <CardContent className={classes.content}>
          <Grid item container direction="row" justifyContent="flex-start">
            <Grid item>
              <FormatQuoteIcon />
            </Grid>
            <Grid item>
              <blockquote className={classes.quote}>{children}</blockquote>
            </Grid>

            <Typography variant="p" className={classes.signature}>
              - {name}, {client}
            </Typography>
          </Grid>
          <CardActions>
            <ButtonLink href={website}>Visit Website</ButtonLink>
          </CardActions>
        </CardContent>
      </Grid>
    </Paper>
  )
}

export default TestimonialItem
