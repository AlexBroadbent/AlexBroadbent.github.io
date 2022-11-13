import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { ButtonLink, ListSectionCard } from '../../component'

export const TestimonialItem = ({ client, name, position, imageUrl, website, children }) => (
  <ListSectionCard
    title={client}
    image={imageUrl}
    actions={[
      <ButtonLink key={0} href={website}>
        Visit Client Website
      </ButtonLink>
    ]}
    md={12}
  >
    <Stack>
      <Box
        sx={{
          color: 'text.secondary',
          marginBlockStart: 2,
          marginBlockEnd: 1,
          marginInlineStart: 1,
          marginInlineEnd: 2
        }}
      >
        {children}
      </Box>

      <Box sx={{ color: 'grey.800', mb: 2 }}>
        <Typography variant="subtitle1" component="span" sx={{ lineHeight: '24px' }}>
          &#8212; {name}
        </Typography>
        <Typography variant="p" component="span">
          , {position}
        </Typography>
      </Box>
    </Stack>
  </ListSectionCard>
)

TestimonialItem.propTypes = {
  client: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  children: PropTypes.any
}
