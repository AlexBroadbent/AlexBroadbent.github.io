import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { ButtonLink, ListSectionItem } from '../../component'

export const BlogItem = ({ title, image, created, children, link }) => (
  <ListSectionItem
    title={title}
    image={image}
    actions={[
      <ButtonLink key={0} href={link}>
        Read the full post on Medium
      </ButtonLink>
    ]}
  >
    <Typography variant="subtitle2" sx={{ p: 1, fontWeight: 600 }}>
      {created}
    </Typography>
    <Typography variant="body2" sx={{ p: 1, pb: 2, fontWeight: 500 }}>
      {children}
    </Typography>
  </ListSectionItem>
)

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
