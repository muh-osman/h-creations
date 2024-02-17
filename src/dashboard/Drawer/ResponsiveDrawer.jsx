import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo-slim.png";

import LoyaltyIcon from "@mui/icons-material/Loyalty";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImageIcon from "@mui/icons-material/Image";

// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";

import Arigap from "../../assets/images/markiting/email.svg";

// import { useContext } from "react";
// import { DataContext } from "../context/DataProvider";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const nav = useNavigate();

  const data = [
    {
      id: 1,
      name: "Sale",
      path: "/dashboard/sale",
      image: <LoyaltyIcon sx={{ color: "#000000DE" }} />,
    },
    {
      id: 2,
      name: "Images",
      path: "/dashboard/images",
      image: <ImageIcon sx={{ color: "#000000DE" }} />,
    },
    {
      id: 3,
      name: "Video",
      path: "/dashboard/video",
      image: <OndemandVideoIcon sx={{ color: "#000000DE" }} />,
    },
  ];

  const { pathname } = useLocation();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{ justifyContent: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={{
                width: 50,
                height: 50,
                textAlign: "center",
                borderRadius: 0,
              }}
            />
          </Stack>
        </Link>
      </Toolbar>
      <Divider />

      <List>
        {data.map((item) => {
          return (
            <ListItem
              key={item.id}
              disablePadding
              button
              component={Link}
              to={item.path}
              selected={item.path === pathname}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="icon"
                    sx={{ width: 36, height: 36, backgroundColor: "transparent" }}
                  >
                    {item.image}
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}

        {/* <Divider /> */}

        {/* <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", gap: "10px", padding: "8px" }}
        >
          <Link to="https://www.youtube.com/">
            <Avatar
              alt="YouTube"
              sx={{ width: 24, height: 24, backgroundColor: "transparent" }}
            >
              <YouTubeIcon
                sx={{ color: "#757575", "&:hover": { color: "#FF0000" } }}
              />
            </Avatar>
          </Link>
          <Link to="https://twitter.com/">
            <Avatar
              alt="Twitter"
              sx={{ width: 24, height: 24, backgroundColor: "transparent" }}
            >
              <TwitterIcon
                sx={{ color: "#757575", "&:hover": { color: "#00acee" } }}
              />
            </Avatar>
          </Link>
        </Stack> */}

        {/* <Typography
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "400",
          }}
          align="center"
          variant="h6"
          noWrap
          component="h1"
        >
          © 2024 H Creations
        </Typography> */}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const logout = () => {
    localStorage.clear();
    nav("/admin");
  };

  return (
    <Box sx={{ display: "flex" }} dir="ltr">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#707171",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <div className="nav_link" style={{ marginLeft: "auto" }}>
            <Button onClick={logout} variant="contained" sx={{ backgroundColor: "#b6ac9a" }}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default React.memo(ResponsiveDrawer);
