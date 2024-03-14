import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { BarChart2 } from "lucide-react"; // Importing BarChart2 icon

export default function Dashboard() {
  

  return (
    <div
      style={{
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
          "@media(max-width:479px)": { fontSize: "13px", padding: "10px" },
        }}
      >
        <div>
          <Typography
            variant="h3"
            sx={{
              display: "block",
              "@media(max-width:250px)": { fontSize: "10px" },
            }}
          >
            Dashboard
          </Typography>
        </div>

        {/* First row of buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Button
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: "#588157",
              "&:hover": { backgroundColor: "#3a5a40" },
              color: "white",
              textTransform: "none",
              fontFamily: "system-ui",
              width: "50%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
              Temperature°C
              <Box sx={{ marginLeft: "8px" }}>
                <BarChart2 size={24} />
              </Box>
            </Typography>
          </Button>

          <Button
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: "#588157",
              "&:hover": { backgroundColor: "#3a5a40" },
              color: "white",
              textTransform: "none",
              fontFamily: "system-ui",
              width: "50%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
              Tolerance(±)°C
              <Box sx={{ marginLeft: "8px" }}>
                <BarChart2 size={24} />
              </Box>
            </Typography>
          </Button>
        </div>

        {/* Second row of buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Button
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: "#588157",
              "&:hover": { backgroundColor: "#3a5a40" },
              color: "white",
              textTransform: "none",
              fontFamily: "system-ui",
              width: "50%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
              pressure bar
              <Box sx={{ marginLeft: "8px" }}>
                <BarChart2 size={24} />
              </Box>
            </Typography>
          </Button>

          <Button
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: "#588157",
              "&:hover": { backgroundColor: "#3a5a40" },
              color: "white",
              textTransform: "none",
              fontFamily: "system-ui",
              width: "50%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
              Tolerance(±)°C
              <Box sx={{ marginLeft: "8px" }}>
                <BarChart2 size={24} />
              </Box>
            </Typography>
          </Button>
        </div>
      </Box>
    </div>
  );
}
