import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
//import Dashboard from "./dashboard"; // Assuming Dashboard component is imported correctly

export default function Heatingplates() {
  return (
    <div
      style={{
        //backgroundImage: `url('https://img.freepik.com/free-photo/abstract-studio-background-texture-light-blue-gray-gradient-wall-flat-floor-product_1258-53990.jpg?t=st=1710351218~exp=1710354818~hmac=8c628c5552cac1ec4c4fe9abd365032e498318485ce4fd489d00741102b97651&w=996')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#dad7cd",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "0.75rem",
          fontFamily: "system-ui",
          padding: "24px",
          width: "100%",
          margin: "auto",
          backgroundColor: "#3a5a40",
          mixBlendMode: "normal",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          color: "#ffecd1",
          border: "1px solid rgb(211,211,211)",
          maxWidth: "480px",
          fontSize: "14px",
          "@media(max-width:479px)": {
            fontSize: "13px",
            padding: "10px",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "block",
            "@media(max-width:250px)": { fontSize: "10px" },
          }}
        >
          Heating Plates Selection
        </Typography>
        <Button
          disableElevation
          variant="contained"
          sx={{
            "&:hover": { backgroundColor: "#344e41" },
            gap: "8px",
            color: "white",
            backgroundColor:"#588157",
            textTransform: "none",
            fontFamily: "system-ui",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography variant="p" sx={{ color: "white" }}>
            Pair - 1
          </Typography>
        </Button>

        <Button
          disableElevation
          variant="contained"
          sx={{
            "&:hover": { backgroundColor: "#344e41" },
            backgroundColor:"#588157",
            gap: "8px",
            color: "white",
            textTransform: "none",
            fontFamily: "system-ui",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography variant="p" sx={{ color: "white" }}>
            Pair - 2
          </Typography>
        </Button>
        <Button
          disableElevation
          variant="contained"
          sx={{
            "&:hover": { backgroundColor: "#344e41" },
            gap: "8px",
            color: "white",
            backgroundColor:"#588157",
            textTransform: "none",
            fontFamily: "system-ui",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography variant="p" sx={{ color: "white" }}>
            Pair - 3
          </Typography>
        </Button>
        <Button
          disableElevation
          variant="contained"
          sx={{
            "&:hover": { backgroundColor: "#344e41" },
            gap: "8px",
            color: "white",
            backgroundColor:"#588157",
            textTransform: "none",
            fontFamily: "system-ui",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography variant="p" sx={{ color: "white" }}>
            Pair - 4
          </Typography>
        </Button>
        <Button
          component={Link}
          to="/dashboard"
          //disableElevation
          variant="contained"
          sx={{
            "&:hover": { backgroundColor: "#344e41" },
            gap: "8px",
            color: "white",
            backgroundColor:"#588157",
            textTransform: "none",
            fontFamily: "system-ui",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography variant="p" sx={{ color: "white" }}>
            Dashboard
          </Typography>
        </Button>
      </Box>
    </div>
  );
}
