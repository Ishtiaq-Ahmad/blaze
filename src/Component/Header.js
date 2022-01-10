import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { setProducts, handleOpenMenu } from "../redux/actions/ActionData";

const Header = (props) => {
    const dispatch = useDispatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    return (
        <div>
            <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${props.drawerWidth}px)` },
            ml: { sm: `${props.drawerWidth}px` },
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
             <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => dispatch(handleOpenMenu())}
              // sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuOpenIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Blaze
            </Typography>
          </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header
