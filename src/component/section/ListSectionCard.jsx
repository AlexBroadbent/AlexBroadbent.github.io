import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { useView } from '../../hook'

export const ListSectionCard = ({ image, title, actions, children, ...other }) => (
  <Grid item xs={12} md={6} {...other}>
    {useView(
      <ListSectionCardDesktop image={image} title={title} actions={actions}>
        {children}
      </ListSectionCardDesktop>,
      <ListSectionCardMobile image={image} title={title} actions={actions}>
        {children}
      </ListSectionCardMobile>
    )}
  </Grid>
)

const ListSectionCardDesktop = ({ image, title, actions, children }) => (
  <Card>
    <CardMedia
      component="img"
      src={image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/${image}`}
      height="150"
      alt={title}
    />
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {children}
      {actions && (
        <CardActions sx={{ pl: 0 }}>
          <Stack spacing={1} direction="row">
            {actions}
          </Stack>
        </CardActions>
      )}
    </CardContent>
  </Card>
)

const ListSectionCardMobile = ({ image, title, actions, children }) => (
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

ListSectionCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired
}

ListSectionCardDesktop.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired
}

ListSectionCardMobile.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired
}
