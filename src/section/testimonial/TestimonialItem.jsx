import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { ButtonLink, ListSectionItem } from '../../component'

export const TestimonialItem = ({ client, name, position, imageUrl, website, children }) => (
  <ListSectionItem
    title={client}
    image={imageUrl}
    actions={[
      <ButtonLink key={0} href={website}>
        Visit Client Website
      </ButtonLink>
    ]}
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
  </ListSectionItem>
)

TestimonialItem.propTypes = {
  client: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  children: PropTypes.any
}
