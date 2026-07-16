import api from "./api";

const getAllNotes = async () => {

    const response = await api.get("/Notes");

    return response.data;

};

const getNoteById = async (id) => {

    const response = await api.get(`/Notes/${id}`);

    return response.data;

};

const createNote = async (noteData) => {

    const response = await api.post(
        "/Notes",
        noteData
    );

    return response.data;

};

const updateNote = async (id, noteData) => {

    const response = await api.put(
        `/Notes/${id}`,
        noteData
    );

    return response.data;

};

const trashNote = async (id) => {

    const response = await api.delete(
        `/Notes/${id}`
    );

    return response.data;

};

const getTrashNotes = async () => {

    const response = await api.get(
        "/Notes/trash"
    );

    return response.data;

};

const restoreNote = async (id) => {

    const response = await api.patch(
        `/Notes/${id}/restore`
    );

    return response.data;

};

const archiveNote = async (id) => {

    const response = await api.patch(
        `/Notes/${id}/archive`
    );

    return response.data;

};

const unarchiveNote = async (id) => {

    const response = await api.patch(
        `/Notes/${id}/unarchive`
    );

    return response.data;

};

const pinNote = async (id) => {

    const response = await api.patch(
        `/Notes/${id}/pin`
    );

    return response.data;

};

const unpinNote = async (id) => {

    const response = await api.patch(
        `/Notes/${id}/unpin`
    );

    return response.data;

};

const changeColor = async (id, color) => {

    const response = await api.patch(
        `/Notes/${id}/color`,
        {
            color
        }
    );

    return response.data;

};

/*
    Uncomment after backend Delete Forever API is implemented

const deleteForever = async (id) => {

    const response = await api.delete(
        `/Notes/${id}/permanent`
    );

    return response.data;

};
*/

const noteService = {

    getAllNotes,

    getNoteById,

    createNote,

    updateNote,

    trashNote,

    getTrashNotes,

    restoreNote,

    archiveNote,

    unarchiveNote,

    pinNote,

    unpinNote,

    changeColor,

    // deleteForever

};

export default noteService;