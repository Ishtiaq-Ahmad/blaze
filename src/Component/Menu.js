import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";

const Menu = () => {
  const [handleOpen, setHandleOpen] = useState(true);
  const handleClick = () => {
    setHandleOpen(!handleOpen);
  };

  return (
    <div>

      <List>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton color="red">
            <ListItemIcon>
              <DashboardIcon style={{ color: "#9a7cdf" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "black" }} />
          </ListItemButton>
        </Link>
        <Link to="/product" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <MenuOpenIcon style={{ color: "#9a7cdf" }} />
            </ListItemIcon>
            <ListItemText primary="Menus" style={{ color: "black" }} />
            {handleOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={handleOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder style={{ color: "#9a7cdf" }} />
                </ListItemIcon>
                <Link
                  to="/menu/categories"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary="Categories" />
                </Link>
              </ListItemButton>
            </List>
          </Collapse>
        </Link>
        <Link to="/customer" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton>
            <ListItemIcon>
              <PersonPinIcon style={{ color: "#9a7cdf" }} />
            </ListItemIcon>
            <ListItemText primary="Customers" style={{ color: "black" }} />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
};

export default Menu;
