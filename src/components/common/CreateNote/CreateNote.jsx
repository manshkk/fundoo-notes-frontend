import { useState } from "react";

import {
    Card,
    Box,
    InputBase,
    IconButton,
    Button
} from "@mui/material";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

import "./CreateNote.css";

function CreateNote({ onCreateNote }) {

    const [expanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        setNote((previous) => ({
            ...previous,
            [name]: value
        }));

    };

    const handleClose = async () => {

        if (
            note.title.trim() === "" &&
            note.content.trim() === ""
        ) {
            setExpanded(false);
            return;
        }

        try {

            await onCreateNote(note);

            setNote({
                title: "",
                content: ""
            });

            setExpanded(false);

        } catch (error) {

            console.error("Create Note Error:", error);

        }

    };

    return (

        <Card className="create-note">

            <Box
                className="create-note-container"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch"
                }}
            >

                {
                    expanded && (

                        <InputBase
                            name="title"
                            placeholder="Title"
                            value={note.title}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 1 }}
                        />

                    )
                }

                <InputBase
                    name="content"
                    placeholder="Take a note..."
                    value={note.content}
                    onChange={handleChange}
                    onClick={() => setExpanded(true)}
                    multiline
                    fullWidth
                />

                {
                    !expanded ? (

                        <Box className="note-icons">

                            <IconButton size="small">
                                <CheckBoxOutlinedIcon />
                            </IconButton>

                            <IconButton size="small">
                                <BrushOutlinedIcon />
                            </IconButton>

                            <IconButton size="small">
                                <ImageOutlinedIcon />
                            </IconButton>

                        </Box>

                    ) : (

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 2
                            }}
                        >

                            <Button
                                variant="text"
                                onClick={handleClose}
                            >
                                Close
                            </Button>

                        </Box>

                    )
                }

            </Box>

        </Card>

    );

}

export default CreateNote;