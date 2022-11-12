import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { useView } from '../hook'

export const ListSectionItem = ({ image, title, actions, children }) =>
  useView(
    <Grid
      container
      elevation={3}
      sx={{ display: 'flex', minHeight: '100%', overflow: 'hidden', p: 2, m: 2, mt: 0, pt: 0 }}
    >
      <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="img"
          fit="cover"
          src={image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/${image}`}
          alt={title}
          sx={{ maxWidth: 250, width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item sm={9} sx={{ p: 1, m: 0 }}>
        <Typography variant="h5" sx={{ margin: (theme) => theme.spacing(0, 1) }}>
          {title}
        </Typography>
        {children}
        {actions && (
          <CardActions sx={{ pl: 0 }}>
            <Stack direction={{ xs: 'column', md: 'row', pt: 1 }} spacing={1}>
              {actions}
            </Stack>
          </CardActions>
        )}
      </Grid>
    </Grid>,
    <Grid
      container
      elevation={3}
      sx={{ display: 'flex', minHeight: '100%', overflow: 'hidden', p: 1, mt: 0, pt: 0 }}
    >
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="img"
          fit="cover"
          src={image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/${image}`}
          alt={title}
          sx={{ maxWidth: 250, width: '100%', height: 'auto' }}
        />
      </Grid>
      <Stack item xs={12} sx={{ m: 1 }}>
        <Typography variant="h5" sx={{ m: 1, mt: 3 }}>
          {title}
        </Typography>

        {children}

        {actions && (
          <CardActions sx={{ pl: 0 }}>
            <Stack direction={{ xs: 'column', md: 'row', pt: 1 }} spacing={1}>
              {actions}
            </Stack>
          </CardActions>
        )}
      </Stack>
    </Grid>
  )

ListSectionItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired
}
