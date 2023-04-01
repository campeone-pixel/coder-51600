import styles from "./Navbar.module.css";
import { CardWidget } from "../CardWidget/CardWidget.jsx";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { useEffect } from "react";

import { useUserAuth } from "../Context/UserAuthContext";

const pages = ["Store"];
export function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { showUser } = useUserAuth();
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    showUser().currentUser !== null && setAuth(true);
  }, [auth, showUser]);

  const handleLogout = async () => {
    try {
      await logOut();
      setAuth(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="span"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img
                src="https://res.cloudinary.com/djowr4szv/image/upload/v1677386645/logo-no-background_vlt5rd.png"
                className={styles.logo}
                alt=""
              />
            </Link>
          </Typography>

          {/* ---------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------- */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/">{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ---------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------- */}

          <Typography
            variant="h5"
            noWrap
            component="span"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img
                src="https://res.cloudinary.com/djowr4szv/image/upload/v1677386645/logo-no-background_vlt5rd.png"
                className={styles.logo}
                alt=""
              />
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link to="/">Store</Link>
              </Typography>
            </MenuItem>
          </Box>

          <CardWidget />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {auth ? (
                <Box>
                
                  <MenuItem>
                    <Link onClick={handleLogout}>Cerrar sesion</Link>
                  </MenuItem>
                </Box>
              ) : (
                <Box>
                  <MenuItem>
                    <Link to="/signup">Registrate</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/login">Iniciar sesion</Link>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </div>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
