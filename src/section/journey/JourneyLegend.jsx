import TimelineDot from '@mui/lab/TimelineDot'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

export const JourneyLegend = () => (
  <Grid container direction="row" alignItems="center" justifyContent="center">
    <TimelineDot color="primary" sx={{ width: '10px' }} />
    <Typography variant="p" sx={{ pl: 0.75, pr: 2 }}>
      Career
    </Typography>
    <TimelineDot color="secondary" sx={{ width: '10px' }} variant="outlined" />
    <Typography variant="p" sx={{ pl: 0.75, pr: 2 }}>
      Contractor
    </Typography>
    <TimelineDot color="warning" sx={{ width: '10px' }} variant="outlined" />
    <Typography variant="p" sx={{ pl: 0.75, pr: 2 }}>
      Projects
    </Typography>
    <TimelineDot color="success" sx={{ width: '10px' }} />
    <Typography variant="p" sx={{ pl: 0.75, pr: 2 }}>
      Education
    </Typography>
  </Grid>
)
