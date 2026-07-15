import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box
} from "@mui/material";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "./Sidebar.css";

const drawerWidth = 280;

const menuItems = [
  {
    title: "Notes",
    icon: <LightbulbOutlinedIcon />
  },
  {
    title: "Reminders",
    icon: <NotificationsNoneOutlinedIcon />
  },
  {
    title: "Labels",
    icon: <LabelOutlinedIcon />
  },
  {
    title: "Archive",
    icon: <ArchiveOutlinedIcon />
  },
  {
    title: "Trash",
    icon: <DeleteOutlineOutlinedIcon />
  }
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      className="sidebar"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: "64px",
          height: "calc(100vh - 64px)",
          borderRight: "1px solid #e0e0e0",
          boxShadow: "none",
          background: "#fff"
        }
      }}
    >
      <Box sx={{ height: 10 }} />

      <List>

        {menuItems.map((item, index) => (

          <ListItemButton
            key={index}
            selected={index === 0}
            className="sidebar-item"
          >

            <ListItemIcon>

              {item.icon}

            </ListItemIcon>

            <ListItemText primary={item.title} />

          </ListItemButton>

        ))}

      </List>

      <Divider />

    </Drawer>
  );
}

export default Sidebar;