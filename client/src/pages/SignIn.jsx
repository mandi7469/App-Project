import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import { styled, alpha } from "@mui/material/styles";
import ForgotPassword from "../components/ForgotPassword";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useUserContext } from "../../utils/userContext";
import { toast } from "react-hot-toast";
import { DO_SIGNIN } from "../../utils/actions";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  width: "450px",
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
}));

export default function SignIn(props) {
  // Remove
  // let entries = ["test", "test2", "test3"]
  // for (let index = 0; index < entries.length; index++) {

  //   console.log(entries[index])
  // }
  // entries.map((item) => {
  //   console.log(item)
  // })

  const navigate = useNavigate();
  const [state, dispatch] = useUserContext();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Incorrect password.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const signinUser = async (event) => {
    event.preventDefault();
    if (!emailError && !passwordError) {
      const { email, password } = data;
      try {
        const [loginResponse, profileResponse] = await Promise.all([
          axios.post("/signin", {
            email,
            password,
          }),
          axios.get("/profile"),
        ]);

        if ((loginResponse.status = 200)) {
          let loginData = loginResponse.data;
          let profileName = "";

          if (profileResponse.data) {
            if (profileResponse.data.name) {
              profileName = profileResponse.data.name;
            }
          }

          if (loginData.error) {
            if (loginData.error == "Incorrect password.") {
              setPasswordError(true);
              setPasswordErrorMessage(loginData.error);
            } else {
              toast.error(loginData.error);
            }
          } else {
            setData({});

            dispatch({
              type: DO_SIGNIN,
              name: profileName,
            });

            navigate("/Dashboard");
          }
        } else {
          toast.error("Network Error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Container
        maxWidth="lg"
        direction="column"
        justifycontent="space-between"
      >
        <Box>
          <IconButton onClick={handleHomeClick}>
            <ArrowBackIcon
              sx={{
                color: "white",
              }}
            >
              {" "}
            </ArrowBackIcon>
            <Typography variant="caption" color="white" sx={{ pl: 1 }}>
              Back to home
            </Typography>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifycontent: "center",
            alignItems: "center",
            minHeight: "100%",
          }}
        >
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{
                width: "100%",
                fontSize: "clamp(2rem, 10vw, 2.15rem)",
                fontWeight: "bold",
              }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={signinUser}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  error={emailError}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  fullWidth
                  variant="outlined"
                  color={emailError ? "error" : "primary"}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  value={data.password}
                  onChange={handleInputChange}
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  fullWidth
                  variant="outlined"
                  color={passwordError ? "error" : "primary"}
                />
              </FormControl>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <ForgotPassword open={open} handleClose={handleClose} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign in
              </Button>
              <Link
                component="button"
                type="button"
                onClick={handleClickOpen}
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Forgot your password?
              </Link>
            </Box>
            <Divider>or</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography sx={{ textAlign: "center" }}>
                Don&apos;t have an account?{" "}
                <Link
                  href="/SignUp"
                  variant="body2"
                  sx={{ alignSelf: "center" }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
