import React from "react";
import {
  Typography,
  InputLabel,
  Input,
  Stack,

  Button,
  Divider,
  Box,
} from "@mui/material";
import TemperatureInputPage from "./settings";
import Heatingplates from "./Heatingplates";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
               // backgroundImage: `url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "dad7cd",
                minHeight: "100vh", // Ensures the background covers the entire viewport height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "0.75rem",
                  fontFamily: "system-ui",
                  padding: "16px",
                  width: "90%",
                  
                  margin: "auto",

                  backgroundColor: "#a3b18a",
                  mixBlendMode: "normal",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "20px",
                  color: "#0d1b2a",
                  border: "1px solid rgb(211,211,211)",
                  maxWidth: "480px",
                  fontSize: "14px",
                  " @media(max-width:479px)": {
                    fontSize: "13px",
                    padding: "10px",
                  },
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25prw-zjKr_WgUic4GD0iwHbnjUaT5GrSKptcMFUNjlNqYeTRcfn3pWuf9EZib-jLXxU&usqp=CAU"
                  alt="Logo"
                  height="40px"
                  width="40px"
                />
                <Typography
                  variant="h2"
                  sx={{
                    display: "block",
                    " @media(max-width:479px)": { fontSize: "18px" },
                  }}
                >
                  Sign in to Thejo
                </Typography>
                <Stack
                  sx={{ alignItems: "flex-start", width: "100%" }}
                  spacing="5px"
                >
                  <InputLabel
                    sx={{
                      width: "fit-content",
                      fontWeight: "700",
                      color: "inherit",
                    }}
                  >
                    Email
                  </InputLabel>
                  <Input
                    sx={{
                      "& .MuiInput-input": { padding: "0" },
                      fontFamily: "system-ui",
                      backgroundColor: "rgb(244,244,244)",
                      width: "100%",
                      fontSize: "14px",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      outline: "none",
                      " @media(max-width:479px)": { fontSize: "13px" },
                    }}
                    placeholder="Your email address"
                    type="text"
                    disableUnderline
                  ></Input>
                </Stack>
                <Stack
                  sx={{ alignItems: "center", width: "100%" }}
                  spacing="5px"
                >
                  <Stack
                    sx={{
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                    spacing="0px"
                    direction="row"
                  >
                    <InputLabel
                      sx={{
                        fontWeight: "700",
                        width: "fit-content",
                        color: "#0d1b2a",
                      }}
                    >
                      Password
                    </InputLabel>
                    <Link sx={{ textDecoration: "none" , }}>
                      Forgot your password?
                    </Link>
                  </Stack>
                  <Input
                    sx={{
                      "& .MuiInput-input": { padding: "0" },
                      fontFamily: "system-ui",
                      backgroundColor: "rgb(244,244,244)",
                      width: "100%",
                      fontSize: "14px",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      outline: "none",
                      " @media(max-width:479px)": { fontSize: "13px" },
                    }}
                    placeholder="Enter your password"
                    type="password"
                    disableUnderline
                  ></Input>
                </Stack>
                <Button
                component={Link}
                to="/settings"
                  disableElevation
                  variant="contained"
                  sx={{
                    "&:hover": { backgroundColor: "#0074f0" },
                    gap: "8px",
                    color: "white",
                    textTransform: "none",
                    fontFamily: "system-ui",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="p" sx={{ color: "white" }}>
                    Continue
                  </Typography>
                  <img
                    src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signin_0751de41-ebc9-4c5a-8c7c-2362d51a83d6.svg"
                    alt="Sign in with Google Button"
                    style={{
                      " @media(max-width:479px)": {
                        height: "12px",
                        width: "12px",
                      },
                    }}
                    width="14px"
                    height="14px"
                  />
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: "10px",
                    width: "100%",
                  }}
                >
                  <Divider
                    sx={{
                      margin: "8px 0",
                      color: "#dbdbdb",
                      border: "none",
                      backgroundColor: "#9ca3af",
                      height: "1px",
                      width: "100%",
                    }}
                    orientation="horizontal"
                  ></Divider>
                  <Typography variant="p">OR</Typography>
                  <Divider
                    sx={{
                      margin: "8px 0",
                      color: "#dbdbdb",
                      border: "none",
                      backgroundColor: "#9ca3af",
                      height: "1px",
                      width: "100%",
                    }}
                    orientation="horizontal"
                  ></Divider>
                </Box>
                <Button
                  disableElevation
                  variant="contained"
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    gap: "8px",
                    color: "rgb(2, 22, 48)",
                    textTransform: "none",
                    fontFamily: "system-ui",
                    backgroundColor: "transparent",
                    border: "1px solid rgb(211,211,211)",
                    fontWeight: "700",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signin_d69825d0-e31c-4d4f-bd1c-4c77a81e588c.svg"
                    alt="Sign in with Google Button"
                    style={{
                      " @media(max-width:479px)": {
                        width: "14px",
                        height: "14px",
                      },
                    }}
                    width="17px"
                    height="17px"
                  />
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "700",
                      " @media(max-width:479px)": { fontSize: "13px" },
                    }}
                  >
                    Sign in with Google
                  </Typography>
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    columnGap: "5px",
                  }}
                >
                  <Typography variant="p">Don't have an account?</Typography>
                  <Link sx={{ textDecoration: "none", }}>Sign up</Link>
                </Box>
              </Box>
            </div>
          }
        />
        <Route path="/settings" element={<TemperatureInputPage />} />
        <Route path="/Heatingplates" element={<Heatingplates />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
