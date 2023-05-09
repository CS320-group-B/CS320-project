import React, { useState } from "react";
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


// const ValidationSchema = yup.object({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(8, "Password's length must be greater than 8")
//     .required("Password is required"),
// });

// interface FormValues {
//   email: string;
//   password: string;
// }

const history = createBrowserHistory();

const Login = () => {
//   const formik = useFormik({
//     validationSchema: ValidationSchema,
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values : FormValues) => {
      
//       const configuration = {
//         method: "post",
//         url: "http://localhost:5000/user/signup",
//         data: {
//           email: values.email,
//           password: values.password
//         }
//       };

//       axios(configuration)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         error = new Error();
//       });
//     },
//   });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const configuration = {
      method: "post",
      url: "http://localhost:5000/user/signin",
      data: {
        email,
        password
      }
    };

    axios(configuration)
    .then((result) => {
      alert("login successfully")
      //Add thing do when signin successfully here
      // setSessionCookie({ email });
      console.log(result)
      history.push("/");

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
        <Box component="form"  noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              value = {email}
              onChange = {e => setEmail(e.target.value)}
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // error={Boolean(formik.errors.email)}
              // helperText={formik.errors.email}
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
              value = {password}
              onChange = {e => setPassword(e.target.value)}
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // error={Boolean(formik.errors.password)}
              // helperText={formik.errors.password}
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