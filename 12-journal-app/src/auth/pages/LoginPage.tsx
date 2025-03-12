import { Link as RouterLink } from 'react-router';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
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
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
          <Grid2 container>
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
              <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container direction="row" justifyContent="end" size={12}>
              <Link color="inherit" component={RouterLink} to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
