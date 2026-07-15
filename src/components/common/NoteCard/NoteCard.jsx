import {
    Card,
    CardContent,
    Typography,
    Box,
    IconButton
} from "@mui/material";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import "./NoteCard.css";

function NoteCard({ note }) {

    return (

        <Card
            className="note-card"
            sx={{
                backgroundColor: note.color || "#ffffff"
            }}
        >

            <CardContent>

                <Box className="note-header">

                    <Typography
                        variant="h6"
                        className="note-title"
                    >
                        {note.title}
                    </Typography>

                    <PushPinOutlinedIcon
                        className="pin-icon"
                    />

                </Box>

                <Typography
                    variant="body2"
                    className="note-description"
                >
                    {note.content}
                </Typography>

                <Box className="note-actions">

                    <IconButton size="small">
                        <NotificationsNoneOutlinedIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small">
                        <PersonAddAltOutlinedIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small">
                        <PaletteOutlinedIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small">
                        <ImageOutlinedIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small">
                        <ArchiveOutlinedIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small">
                        <MoreVertOutlinedIcon fontSize="small" />
                    </IconButton>

                </Box>

            </CardContent>

        </Card>

    );

}

export default NoteCard;