import {
  TextField,
  Container,
  Button,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

import { signup } from '../api_file'
import { user } from "../../constants/User";
import { useState } from "react";

const Signup = () => {
  //const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  const [season, setSeason] = useState<string>('fall');
  const now = new Date();
  const [year, setYear] = useState<number>(now.getFullYear() + 4);

  const handleSeasonChange = (season: string) => {
    setSeason(season);
  }

  const handleYearChange = (year: number) => {
    setYear(year);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      name: data.get('firstName'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('password')
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const result = await signup(userData)
    console.log(result)
  };

  return (
    <Container component="main" maxWidth="xs" className={'border border-gray-300 rounded-lg pb-12 mt-4'}>
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className=" w-full"
              >
                <InputLabel id="season-label">Season</InputLabel>
                <Select

                  value={season}
                  label="Season"
                  fullWidth

                  onChange={(e) => handleSeasonChange(e.target.value)}
                >
                  <MenuItem value={'fall'}>Fall</MenuItem>
                  <MenuItem value={'spring'}>Spring</MenuItem>

                </Select>
              </FormControl>
              <div className="w-4" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className=" w-full"
              >
                <InputLabel id="year-label">Year</InputLabel>
                <Select

                  value={year}
                  fullWidth
                  label="Year"
                  onChange={(e) => handleYearChange(e.target.value as number)}
                >
                  {
                    Array.from({ length: 5 }, (_, i) => user.graduation.year - 1 + i).reverse()
                      .map(y => <MenuItem value={y}>{y}</MenuItem>)
                  }

                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export default Signup;