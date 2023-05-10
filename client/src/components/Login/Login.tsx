import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import { useSelector, useDispatch} from "react-redux";
// import { loginUser } from "../../actions/authActions";
import * as yup from 'yup';
import {
  TextField,
  Container,
  Button,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
  Link
} from "@mui/material";
import { login } from "../api_file";

const ValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password's length must be greater than 8")
    .required("Password is required"),
});


const Login = () => {
//   const [isError, setIsError] = useState(false); 

//   const state = useSelector((state) => ({
//     auth: state.auth,
//     errors: state.errors,
//   }));

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

  // if account is already set
//   if (state.auth.isAuthenticated) {
//     dispatch(getTransactions(state.auth.user.id));
//     history.push("/transaction");
//   }

  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values : any) => {
    //   dispatch(loginUser(values, history));
    //   setIsError(true);

      // how does this work? -> where to get user data
    },
  });

  return (
    <Container maxWidth={false} className="formContainer">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Typography variant="h4" className="title">Welcome to Course Scheduler!</Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.password)}
              helperText={formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Container>
 
  );
};

export default Login;