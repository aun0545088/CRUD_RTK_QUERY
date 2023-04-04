import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { getLocalData } from "../utils/LocalStorage";

export default function Navbar() {
  const token = getLocalData("token")
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            variant="text"
            sx={{ fontSize: 20, fontWeight: 600 }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/user"
            color="inherit"
            variant="text"
            sx={{ fontSize: 20, fontWeight: 600 }}
          >
            User
          </Button>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          {token ? (
            <>
              <Button
                color="inherit"
                variant="text"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#fff",
                  letterSpacing: "0.05em",
                }}
              >
                Hello, Aun
              </Button>
              <Button
                color="inherit"
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  fontWeight: 600,
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              color="inherit"
              variant="contained"
              sx={{
                borderRadius: "20px",
                fontWeight: 600,
                fontFamily: "'Montserrat', sans-serif",
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#f2f2f2",
                },
              }}
            >
              Login
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
