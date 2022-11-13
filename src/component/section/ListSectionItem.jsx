import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { useView } from '../../hook'

export const ListSectionItem = ({ image, title, actions, children }) =>
  useView(
    <ListSectionItemDesktop image={image} title={title} actions={actions}>
      {children}
    </ListSectionItemDesktop>,
    <ListSectionItemMobile image={image} title={title} actions={actions}>
      {children}
    </ListSectionItemMobile>
  )

const ListSectionItemDesktop = ({ image, title, actions, children }) => (
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
  </Grid>
)

const ListSectionItemMobile = ({ image, title, actions, children }) => (
  <Stack sx={{ display: 'flex', minHeight: '100%', overflow: 'hidden', p: 1, mt: 0, pt: 0 }}>
    <Typography variant="h5" sx={{ m: 1, my: 2, textAlign: 'center' }}>
      {title}
    </Typography>

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
      <Box
        component="img"
        fit="cover"
        src={image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/${image}`}
        alt={title}
        sx={{ maxWidth: 250, width: '100%', height: 'auto' }}
      />
    </Box>

    {children}

    {actions && (
      <Stack display="flex" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
        {actions}
      </Stack>
    )}
  </Stack>
)

ListSectionItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired
}

ListSectionItemDesktop.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired
}

ListSectionItemMobile.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired
}
