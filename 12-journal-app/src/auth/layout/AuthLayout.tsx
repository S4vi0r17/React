import { ReactNode } from 'react';
import { Grid2, Typography } from '@mui/material';

export const AuthLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        size={{ xs: 12, md: 4 }}
        sx={{
          width: { sm: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid2>
    </Grid2>
  );
};
