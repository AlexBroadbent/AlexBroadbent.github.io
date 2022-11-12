import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const Footer = () => (
  <Box justifyContent="center" alignItems="center" display="flex" sx={{ mt: 3, p: 5 }}>
    <Typography variant="body2">&copy; {new Date().getFullYear()} Alexander Broadbent</Typography>
  </Box>
)
