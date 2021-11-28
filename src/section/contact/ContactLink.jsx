import React from 'react'
import { Link, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontWeight: 700
    },
    icon: {
      fontWeight: 500,
      marginRight: theme.spacing(2)
    }
  })
)

ContactLink.propTypes = {
  icon: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

function ContactLink({ icon, link, children }) {
  const classes = useStyles()

  return (
    <Typography variant="h3" className={classes.root} component={Link} href={link}>
      <FontAwesomeIcon className={classes.icon} icon={icon} />
      {children}
    </Typography>
  )
}

export default ContactLink
