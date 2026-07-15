import {
  Card,
  Box,
  InputBase,
  IconButton
} from "@mui/material";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

import "./CreateNote.css";

function CreateNote() {

  return (

    <Card className="create-note">

      <Box className="create-note-container">

        <InputBase
          placeholder="Take a note..."
          className="note-input"
        />

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

      </Box>

    </Card>

  );

}

export default CreateNote;