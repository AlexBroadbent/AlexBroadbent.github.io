import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const Responsibilities = ({ responsibilities }) => (
  <>
    <Typography variant="body2" sx={{ pt: 1, fontWeight: 'bold' }}>
      Responsibilities
    </Typography>
    <Typography variant="body2" component={List} sx={{ paddingTop: 0 }}>
      {responsibilities.map((responsibility) => (
        <Typography
          variant="body2"
          sx={{
            pt: 0.5,
            '& .MuiTypography-body1': {
              fontSize: '0.875rem'
            },
            ml: 2
          }}
          component={ListItemText}
          key={responsibility}
        >
          • {responsibility}
        </Typography>
      ))}
    </Typography>
  </>
)

Responsibilities.propTypes = {
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired
}
