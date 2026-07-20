import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { SidebarContext } from "../../../context/SidebarContext";

import "./Sidebar.css";

function Sidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    const { open } = useContext(SidebarContext);

    const menus = [
        {
            text: "Notes",
            icon: <LightbulbOutlinedIcon />,
            path: "/dashboard"
        },
        {
            text: "Reminders",
            icon: <NotificationsNoneOutlinedIcon />,
            path: "/reminders"
        },
        {
            text: "Edit Labels",
            icon: <EditOutlinedIcon />,
            path: "/labels"
        },
        {
            text: "Archive",
            icon: <ArchiveOutlinedIcon />,
            path: "/archive"
        },
        {
            text: "Trash",
            icon: <DeleteOutlineOutlinedIcon />,
            path: "/trash"
        }
    ];

    return (

        <Drawer
            variant="permanent"
            className={`sidebar ${open ? "sidebar-open" : ""}`}
        >

            <List>

                {

                    menus.map((menu) => (

                        <ListItemButton
                            key={menu.text}
                            className="sidebar-item"
                            selected={location.pathname === menu.path}
                            onClick={() => navigate(menu.path)}
                        >

                            <ListItemIcon>

                                {menu.icon}

                            </ListItemIcon>

                            {

                                open && (

                                    <ListItemText
                                        primary={menu.text}
                                    />

                                )

                            }

                        </ListItemButton>

                    ))

                }

            </List>

        </Drawer>

    );

}

export default Sidebar;