import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";

import { database } from "./firebase";
import { signOut } from "firebase/auth";

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const refresh = () => window.location.reload(true);

  const signoutHandler = () => {
    signOut(database).then((val) => {
      console.log(val);
      localStorage.removeItem("current-user");
      refresh();
    });
  };
  return (
    <AppBar
      position="static"
      style={{
        backgroundImage: "linear-gradient(147deg, #ad5389 0%, #3c1053 74%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item style={{ display: "flex", flexDirection: "row" }}>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                NEWS APP
              </Typography>
            </Grid>

            <Grid item style={{ display: "flex", flexDirection: "row" }}>
              <Grid item style={{ marginRight: 10, marginTop: 2 }}>
                {localStorage.getItem("current-user") ? (
                  <>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar
                            alt="Nemy Sharp"
                            src="/static/images/avatar/2.jpg"
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography
                            textAlign="center"
                            onClick={() => {
                              signoutHandler();
                            }}
                          >
                            Log Out
                          </Typography>
                        </MenuItem>
                      </Menu>
                    </Box>
                  </>
                ) : (
                  <>
                    <Button variant="text">
                      <a
                        href="/signup"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Sign Up
                      </a>
                    </Button>
                    <Button variant="text">
                      <a
                        href="/signin"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Sign In
                      </a>
                    </Button>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
