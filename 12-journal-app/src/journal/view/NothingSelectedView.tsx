import { StarOutline } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ color: 'white' }}>
          Select or create an entry
        </Typography>
      </Grid2>
    </Grid2>
  );
};
