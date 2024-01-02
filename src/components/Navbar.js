import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Logo from "../Assets/logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home Page",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "About Page",
      icon: <InfoIcon />,
      path: "/about",
    },
    {
      text: "Prevention Tips",
      icon: <CommentRoundedIcon />,
      path: "/prevent", // Define the path for the Prevention Tips page
    },
    {
      text: "Contact Us",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
  ];

  // Function to handle navigation to the selected page
  const handleNavigation = (path) => {
    setOpenMenu(false); // Close the menu before navigating
    // Navigate to the specified path using the useNavigate hook
    window.location.href = path; // Directly change the URL for navigation
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {/* Use Link component for navigation */}
        {menuOptions.map((option) => (
          <Link key={option.text} to={option.path}>
            {option.text}
          </Link>
        ))}

        {/* Use Link component for navigating to Dengue page */}
        <Link to="/dengue">
          <button className="primary-button">Report Dengue</button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                button
                onClick={() => handleNavigation(item.path)} // Call handleNavigation on item click
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
