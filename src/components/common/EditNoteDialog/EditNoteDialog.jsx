import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    Button,
    Box
} from "@mui/material";

function EditNoteDialog({
    open,
    note,
    onClose,
    onSave
}) {

    const [formData, setFormData] = useState({
        title: "",
        content: ""
    });

    useEffect(() => {

        if (note) {

            setFormData({
                title: note.title,
                content: note.content
            });

        }

    }, [note]);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

    };

    const handleSave = async () => {

        await onSave(formData);

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >

            <DialogContent>

                <TextField
                    fullWidth
                    variant="standard"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    variant="standard"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    sx={{ mt: 2 }}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 2
                    }}
                >

                    <Button onClick={handleSave}>
                        Save
                    </Button>

                </Box>

            </DialogContent>

        </Dialog>

    );

}

export default EditNoteDialog;