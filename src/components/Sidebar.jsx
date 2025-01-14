// Sidebar.js
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Toggle Drawer visibility
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const listItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Hamburger Menu Icon */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleDrawer}
        sx={{ marginLeft: 2, marginTop: 2 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for Sidebar */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            {listItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.path}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
