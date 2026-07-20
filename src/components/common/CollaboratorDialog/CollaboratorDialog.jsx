import { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";

import collaborationService from "../../../services/collaborationService";

function CollaboratorDialog({
    open,
    onClose,
    noteId,
}) {

    const [email, setEmail] = useState("");

    const handleAddCollaborator = async () => {

        if (!email.trim()) {
            alert("Please enter collaborator email.");
            return;
        }

        try {

            console.log("Sending Request...");
            console.log("Note Id:", noteId);
            console.log("Collaborator Email:", email);

            const response = await collaborationService.addCollaborator(
                noteId,
                email
            );

            console.log("Success Response:", response);

            alert("Collaborator added successfully.");

            setEmail("");

            onClose();

        }
        catch (error) {

            console.error("========== API ERROR ==========");

            console.error("Complete Error:", error);

            if (error.response) {

                console.log("Status Code:", error.response.status);

                console.log("Response Data:", error.response.data);

                console.log("Response Headers:", error.response.headers);

            }
            else if (error.request) {

                console.log("Request was sent but no response received.");

                console.log(error.request);

            }
            else {

                console.log("Error Message:", error.message);

            }

            alert("Unable to add collaborator.");

        }

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>
                Add Collaborator
            </DialogTitle>

            <DialogContent>

                <TextField
                    fullWidth
                    margin="normal"
                    label="Collaborator Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    onClick={handleAddCollaborator}
                >
                    Add
                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default CollaboratorDialog;