import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ButtonLink, ListSectionItem } from '../../component'

const useStyles = makeStyles((theme) =>
  createStyles({
    quote: {
      color: theme.palette.text.secondary,
      marginBlockStart: theme.spacing(2),
      marginBlockEnd: theme.spacing(1),
      marginInlineStart: theme.spacing(1),
      marginInlineEnd: theme.spacing(2)
    },
    signature: {
      color: theme.palette.grey[800],
      marginBottom: theme.spacing(2)
    }
  })
)

TestimonialItem.propTypes = {
  client: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  children: PropTypes.any
}

export function TestimonialItem({ client, name, position, imageUrl, website, children }) {
  const classes = useStyles()

  return (
    <ListSectionItem
      title={client}
      image={imageUrl}
      actions={<ButtonLink href={website}>Visit Client Website</ButtonLink>}
    >
      <Stack>
        <blockquote cite={website} className={classes.quote}>
          {children}
        </blockquote>

        <Box className={classes.signature}>
          <Typography variant="subtitle1" component="span" sx={{ lineHeight: '24px' }}>
            &#8212; {name}
          </Typography>
          <Typography variant="p" component="span">
            , {position}
          </Typography>
        </Box>
      </Stack>
    </ListSectionItem>
  )
}
