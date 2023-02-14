import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes from 'prop-types'
import { useView } from '../../hook'

export const ListSectionCard = ({ title, actions, tech, children, ...other }) => (
  <Grid item style={{ display: 'flex' }} xs={12} md={6} {...other}>
    {useView(
      <ListSectionCardDesktop title={title} actions={actions} tech={tech}>
        {children}
      </ListSectionCardDesktop>,
      <ListSectionCardMobile title={title} actions={actions} tech={tech}>
        {children}
      </ListSectionCardMobile>
    )}
  </Grid>
)

const ListSectionCardDesktop = ({ title, actions, tech, children }) => (
  <Card sx={{ p: 1 }}>
    <CardContent>
      <Typography variant="h5" sx={{ fontWeight: '500' }} gutterBottom>
        {title}
      </Typography>
      {children}
      {actions && (
        <CardActions sx={{ px: 0, mx: 0 }}>
          {actions.length === 1 ? (
            <Box textAlign="center">{actions}</Box>
          ) : (
            <Stack spacing={1} direction="row">
              {actions}
            </Stack>
          )}
        </CardActions>
      )}
      {tech && (
        <Stack direction="row" sx={{ mt: 1, flexWrap: 'wrap', gap: 0.5 }}>
          {tech.map((t) => (
            <Chip key={t} variant="outlined" size="small" label={t} />
          ))}
        </Stack>
      )}
    </CardContent>
  </Card>
)

const ListSectionCardMobile = ({ title, actions, tech, children }) => (
  <Card sx={{ display: 'flex', minHeight: '100%', overflow: 'hidden', p: 1, mt: 0, pt: 0 }}>
    <CardContent>
      <Typography variant="h5" sx={{ my: 1 }}>
        {title}
      </Typography>

      {children}

      {actions && (
        <Stack display="flex" direction="row" sx={{ mb: 2 }}>
          {actions}
        </Stack>
      )}

      {tech && (
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
          {tech.map((t) => (
            <Chip key={t} variant="outlined" size="small" label={t} />
          ))}
        </Stack>
      )}
    </CardContent>
  </Card>
)

ListSectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  tech: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired
}

ListSectionCardDesktop.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  tech: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired
}

ListSectionCardMobile.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  tech: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired
}
