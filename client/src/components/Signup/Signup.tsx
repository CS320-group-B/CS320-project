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

import {useState,useEffect} from 'react';
import axios from "axios";
import useLocalStorage from "use-local-storage";


const Signup = () => {
    const [user, setUser] = useLocalStorage("user", {_id: "", email: "", taken: [], planned: [], token: ""});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [first, setFirstname] = useState("");
    const [last, setLastname] = useState("");
    const [emailError, setEmailError] = useState("Email is Required");
    const [passwordError, setPasswordError] = useState("Password is required");
    const [confirmError, setConfirmError] = useState("Confirm password is required");
    const [register, setRegister] = useState(false);

    useEffect(() => {validate();}, [password,email, confirmPassword]);
    
    const validate = () => {
      if (!email) {
        setEmailError("Email is Required");
      } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        setEmailError("Incorrect email format");
      } else {
        setEmailError("");
      }

      if (!password) {
        setPasswordError("Password is required");
      } else if (password.length < 8) {
        setPasswordError("Password must have a minimum 8 characters");
      } else {
        setPasswordError("");
      }

      if (!confirmPassword) {
        setConfirmError("Confirm password is required");
      } else if (confirmPassword.length < 8) {
        setConfirmError("Confirm password must have a minimum 8 characters");
      } else if (confirmPassword !== password) {
        setConfirmError("Passwords do not match");
      } else {
        setConfirmError("");
      }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(emailError) {
        alert(emailError);
      } else if (passwordError) {
        alert(passwordError);
      } else if (confirmError) {
        alert(confirmError);
      } else {

        const configuration = {
          method: "post",
          url: "http://localhost:5000/user/signup",
          data: {
            email,
            password,
            confirmPassword
          }
        };

        axios(configuration)
        .then((result) => {
          setRegister(true);
          const user = {
            _id: result.data.result._id,
            email: result.data.result.email,
            planned: result.data.result.planned,
            taken: result.data.result.taken,
            token: result.data.token
          }
    
          setUser(user);
        })
        .catch((error) => {
          alert("login fail")
          error = new Error();
        });
      }
    }


    return (
          <Container component="main" maxWidth="xs">
            {/* <CssBaseline /> */}
            <Box
              sx={{
                marginTop: 8,
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      value = {first}
                      onChange = {(e) => {setFirstname(e.target.value)}}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      value={last}
                      onChange = {(e) => setLastname(e.target.value)}
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={email}
                      onChange = {(e) => {setEmail(e.target.value)}}
                      autoComplete="email"
                    />
                  </Grid>
                  <Typography color="#ff0000" sx = {{mx: 2}} variant ="caption"> {emailError? emailError:""} </Typography>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange = {(e) => {setPassword(e.target.value)}}
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Typography color="#ff0000" sx = {{mx: 2}} variant ="caption"> {passwordError? passwordError:""} </Typography>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange = {(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Typography color="#ff0000" sx = {{mx: 2}} variant ="caption"> {confirmError? confirmError:""} </Typography>
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
                    <Link href="/Login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
                {register ? (
                  <p className="text-success">You Are Registered Successfully</p>
                ) : (
                  <p className="text-danger">You Are Not Registered</p>
                )}
              </Box>
            </Box>
          </Container>
      );
}
export default Signup;