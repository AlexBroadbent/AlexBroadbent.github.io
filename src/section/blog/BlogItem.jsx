import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import Typography from '@mui/material/Typography'
import { ListSectionItem, ButtonLink } from '../../component'

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
      padding: theme.spacing(1),
      fontWeight: 600
    },
    text: {
      padding: theme.spacing(1),
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

export default function BlogItem({ title, image, created, children, link }) {
  const classes = useStyles()

  return (
    <ListSectionItem
      title={title}
      image={image}
      actions={<ButtonLink href={link}>Read the full post on Medium</ButtonLink>}
    >
      <Typography variant="subtitle2" className={classes.subtitle}>
        {created}
      </Typography>
      <Typography variant="body2" className={classes.text}>
        {children}
      </Typography>
    </ListSectionItem>
  )
}
