import api from "./api";

const addCollaborator = async (noteId, collaboratorEmail) => {
    const response = await api.post("/Collaborators", {
        noteId,
        collaboratorEmail,
    });

    return response.data;
};

const getCollaborators = async (noteId) => {
    const response = await api.get(`/Collaborators/${noteId}`);
    return response.data;
};

const removeCollaborator = async (collaboratorId) => {
    const response = await api.delete(`/Collaborators/${collaboratorId}`);
    return response.data;
};

export default {
    addCollaborator,
    getCollaborators,
    removeCollaborator,
};