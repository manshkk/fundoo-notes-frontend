import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    InputBase,
    Avatar,
    Menu,
    MenuItem,
    Divider
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

import "./Header.css";

function Header() {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("fullName");

        navigate("/login");
    };

    return (

        <AppBar
            position="fixed"
            elevation={1}
            className="header"
        >

            <Toolbar className="header-toolbar">

                <Box className="header-left">

                    <IconButton>

                        <MenuIcon className="header-icon" />

                    </IconButton>

                    <LightbulbOutlinedIcon
                        className="keep-logo"
                    />

                    <Typography
                        variant="h5"
                        className="logo-title"
                    >

                        Fundoo Notes

                    </Typography>

                </Box>

                <Box className="search-container">

                    <SearchIcon
                        className="search-icon"
                    />

                    <InputBase
                        placeholder="Search Notes"
                        className="search-input"
                    />

                </Box>

                <Box className="header-right">

                    <IconButton>

                        <RefreshIcon className="header-icon" />

                    </IconButton>

                    <IconButton>

                        <SettingsOutlinedIcon className="header-icon" />

                    </IconButton>

                    <IconButton>

                        <AppsOutlinedIcon className="header-icon" />

                    </IconButton>

                    <Avatar
                        className="profile-avatar"
                        onClick={handleMenuOpen}
                        sx={{ cursor: "pointer" }}
                    >
                        {localStorage.getItem("fullName")
                            ? localStorage.getItem("fullName")[0].toUpperCase()
                            : "M"}
                    </Avatar>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >

                        <MenuItem disabled>
                            <strong>
                                {localStorage.getItem("fullName")}
                            </strong>
                        </MenuItem>

                        <MenuItem disabled>
                            {localStorage.getItem("email")}
                        </MenuItem>

                        <Divider />

                        <MenuItem
                            onClick={handleLogout}
                        >
                            Logout
                        </MenuItem>

                    </Menu>

                </Box>

            </Toolbar>

        </AppBar>

    );

}

export default Header;