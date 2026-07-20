import { useState } from "react";

import {
    Card,
    CardContent,
    Typography,
    Box,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Tooltip,
    Button
} from "@mui/material";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CollaboratorDialog from "../CollaboratorDialog/CollaboratorDialog";

import noteService from "../../../services/noteService";

import "./NoteCard.css";

const COLORS = [
    "#ffffff",
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed"
];

function NoteCard({
    note,
    page = "dashboard",
    onRefresh
}) {

    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState(note.title);

    const [content, setContent] = useState(note.content);

    const [menuAnchor, setMenuAnchor] = useState(null);

    const [showColors, setShowColors] = useState(false);

    const [openCollaborator, setOpenCollaborator] = useState(false);

    const menuOpen = Boolean(menuAnchor);

    const openMenu = (event) => {

        event.stopPropagation();

        setMenuAnchor(event.currentTarget);

    };

    const closeMenu = () => {

        setMenuAnchor(null);

    };

    const startEditing = () => {

        setIsEditing(true);

    };

    const closeEditing = async () => {

        try {

            await noteService.updateNote(
                note.id,
                {
                    title,
                    content
                }
            );

            setIsEditing(false);

            await onRefresh();

        }
        catch (error) {

            console.error(error);

        }

    };

    const handlePin = async (event) => {

        event.stopPropagation();

        try {

            if (note.isPinned) {

                await noteService.unpinNote(note.id);

            }
            else {

                await noteService.pinNote(note.id);

            }

            await onRefresh();

        }
        catch (error) {

            console.error(error);

        }

    };

    const handleArchive = async (event) => {

        event.stopPropagation();

        try {

            if (note.isArchived) {

                await noteService.unarchiveNote(note.id);

            }
            else {

                await noteService.archiveNote(note.id);

            }

            await onRefresh();

        }
        catch (error) {

            console.error(error);

        }

    };

    const handleTrash = async () => {

        closeMenu();

        try {

            await noteService.trashNote(note.id);

            await onRefresh();

        }
        catch (error) {

            console.error(error);

        }

    };
    const handleRestore = async () => {

    closeMenu();

    try {

        await noteService.restoreNote(note.id);

        await onRefresh();

    }
    catch (error) {

        console.error(error);

    }

};

    const handleColor = async (color) => {

        try {

            await noteService.changeColor(
                note.id,
                color
            );

            await onRefresh();

            setShowColors(false);

        }
        catch (error) {

            console.error(error);

        }

    };
    return (
    <>


        <Card
            className="note-card"
            sx={{
                backgroundColor: note.color || "#ffffff"
            }}
        >

            <CardContent>

                <Box className="note-header">

                    {

                        isEditing ?

                            <InputBase
                                fullWidth
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                placeholder="Title"
                            />

                            :

                            <Typography
                                variant="h6"
                                className="note-title"
                                onClick={startEditing}
                                sx={{ cursor: "pointer" }}
                            >
                                {title}
                            </Typography>

                    }

{
    page === "dashboard" && (

        <Tooltip title="Pin Note">

            <IconButton
                onClick={(e) => {
                    e.stopPropagation();
                    handlePin(e);
                }}
            >

                {

                    note.isPinned ?

                        <PushPinIcon />

                        :

                        <PushPinOutlinedIcon />

                }

            </IconButton>

        </Tooltip>

    )
}

                </Box>

                {

                    isEditing ?

                        <InputBase
                            multiline
                            fullWidth
                            value={content}
                            onChange={(e) =>
                                setContent(e.target.value)
                            }
                            placeholder="Take a note..."
                            sx={{
                                mt: 2
                            }}
                        />

                        :

                        <Typography
                            className="note-description"
                            onClick={startEditing}
                            sx={{ cursor: "pointer" }}
                        >
                            {content}
                        </Typography>

                }

                <Box className="note-actions">
                    <Tooltip title="Reminders">

                        <IconButton size="small">

                            <NotificationsNoneOutlinedIcon
                                fontSize="small"
                            />

                        </IconButton>

                    </Tooltip>

                    <Tooltip title="Collaborator">

                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenCollaborator(true);
                                }}
                            >

                                <PersonAddAltOutlinedIcon
                                    fontSize="small"
                                />

                            </IconButton>

                        </Tooltip>

                    <Box
                        sx={{
                            position: "relative"
                        }}
                    >

                        <Tooltip title="Background Color">

                            <IconButton
                                size="small"
                                onClick={(event) => {

                                    event.stopPropagation();

                                    setShowColors(!showColors);

                                }}
                            >

                                <PaletteOutlinedIcon
                                    fontSize="small"
                                />

                            </IconButton>

                        </Tooltip>

                        {

                            showColors && (

                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 40,
                                        left: 0,
                                        width: 170,
                                        background: "#fff",
                                        border: "1px solid #ddd",
                                        borderRadius: 2,
                                        padding: 1,
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(4,1fr)",
                                        gap: 1,
                                        zIndex: 1000,
                                        boxShadow:
                                            "0 2px 8px rgba(0,0,0,.2)"
                                    }}
                                    onClick={(e) =>
                                        e.stopPropagation()
                                    }
                                >

                                    {

                                        COLORS.map((color) => (

                                            <Box
                                                key={color}
                                                sx={{
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: "50%",
                                                    backgroundColor: color,
                                                    border:
                                                        "1px solid #ddd",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() =>
                                                    handleColor(color)
                                                }
                                            />

                                        ))

                                    }

                                </Box>

                            )

                        }

                    </Box>

                    <Tooltip title="Add Image">

                        <IconButton size="small">

                            <ImageOutlinedIcon
                                fontSize="small"
                            />

                        </IconButton>

                    </Tooltip>

                    {
    page !== "trash" && (

        <Tooltip
            title={
                note.isArchived
                    ? "Unarchive"
                    : "Archive"
            }
        >

            <IconButton
                size="small"
                onClick={(e) => {
                    e.stopPropagation();
                    handleArchive(e);
                }}
            >

                {

                    note.isArchived ?

                        <ArchiveIcon
                            fontSize="small"
                        />

                        :

                        <ArchiveOutlinedIcon
                            fontSize="small"
                        />

                }

            </IconButton>

        </Tooltip>

    )
}
                    <Tooltip title="More">

                        <IconButton
                            size="small"
                            onClick={openMenu}
                        >

                            <MoreVertOutlinedIcon
                                fontSize="small"
                            />

                        </IconButton>

                    </Tooltip>

<Menu
    anchorEl={menuAnchor}
    open={menuOpen}
    onClose={closeMenu}
    onClick={(e) => e.stopPropagation()}
>

    {

        page === "dashboard" && (

            <MenuItem onClick={handleTrash}>

                Move to Trash

            </MenuItem>

        )

    }

    {

        page === "archive" && (

            <>

                <MenuItem
                    onClick={(e) => {

                        e.stopPropagation();

                        closeMenu();

                        handleArchive(e);

                    }}
                >

                    Unarchive

                </MenuItem>

                <MenuItem
                    onClick={handleTrash}
                >

                    Move to Trash

                </MenuItem>

            </>

        )

    }

    {

        page === "trash" && (

            <>

                <MenuItem
                    onClick={handleRestore}
                >

                    Restore

                </MenuItem>

            </>

        )

    }

</Menu>

                    {

                        isEditing && (

                            <Button
                                size="small"
                                onClick={(event) => {

                                    event.stopPropagation();

                                    closeEditing();

                                }}
                            >

                                Close

                            </Button>

                        )

                    }

                </Box>
            </CardContent>

        </Card>
                <CollaboratorDialog
            open={openCollaborator}
            onClose={() => setOpenCollaborator(false)}
            noteId={note.id}
        />

    </>
            
        

    );
    
    

}

export default NoteCard;