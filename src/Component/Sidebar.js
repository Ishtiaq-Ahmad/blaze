import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, handleOpenMenu } from "../redux/actions/ActionData";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "./Menu";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Header from './Header'
import logo from '../assets/images/blaze-logo.png'
import '../style/dashboard.css'


const drawerWidth = 240;
const Sidebar = (props) => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const { name, gridOpen } = products;
  const [data, setData] = useState([name]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleClick =() =>{
  //        dispatch(setProducts( setData('ishtiaq ahmad')))
  // }

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <Menu />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      {/* <h1>{data}</h1>
            <button onClick={handleClick}>hello button</button> */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <Header drawerWidth={drawerWidth}/> */}
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background:'#a1d0f1',
            color:'black'
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
             {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => dispatch(handleOpenMenu())}
              // sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuOpenIcon />
            </IconButton> */}
            <Typography variant="h6" noWrap component="div">
              Blaze
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        //  bgcolor="#f5f5f5" 
          // style={{background:'blue'}}
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
                background:"#f5f5f5"
              },
            }}
          > <img src={logo} alt="logo maker" />
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background:"#ffff"
              },
            }}
            open
          > 
          <img src={logo} alt="logo maker" />
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
        </Box>
      </Box>
    </div>
  );
};
Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
