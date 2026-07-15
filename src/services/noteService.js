import api from "./api";

const getAllNotes = async () => {
    const response = await api.get("/Notes");
    return response.data;
};

const createNote = async (noteData) => {
    const response = await api.post("/Notes", noteData);
    return response.data;
};

const noteService = {
    getAllNotes,
    createNote,
};

export default noteService;