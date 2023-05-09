import React, { useState, useContext } from "react";
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
// import axios from 'axios';
import {login} from "../api_file";

// import useLocalStorage from "use-local-storage";
// import {UserContext} from "../../context/UserContext"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useLocalStorage("user", {_id: "", email: "", taken: [], planned: []});
  // const { userData, setUserData } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = {email, password};
      const result = await login(userData);
      const userdata = {
        id: result.result._id,
        name: "",
        bio: "",
        email: result.result.email,
        createdAt: "",
        avatar: "",
        graduation: {
            year: 2025,
            season: "",
        },
        subfield: "",
        major: "",
        planned_courses: result.result.planned,
        taken_courses: result.result.taken,
        token: result.token
      }

      // setUserData({user: userdata, track: "" }); 
      // console.log(userData);
      sessionStorage.setItem("user", JSON.stringify(userdata));
      alert("login successfully")
      window.location.reload();
      // setUser(user);
    } catch (error) {
      alert("login fail")
      window.location.reload();
      console.log(error);
      error = new Error();
    }
    
    setLoading(false);
  }
  
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