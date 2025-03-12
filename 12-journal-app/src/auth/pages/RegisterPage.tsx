import { Grid2, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="full_name"
              label="Full Name"
              name="full_name"
              type="text"
              variant="outlined"
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              variant="outlined"
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end" size={12}>
            <Link color="inherit" component={RouterLink} to="/auth/login">
              <Typography variant="body2">
                Ya tienes una cuenta? Inicia sesión
              </Typography>
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
