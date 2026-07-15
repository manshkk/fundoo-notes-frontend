import api from "./api";

const getAllNotes = async () => {
  const response = await api.get("/Notes");
  return response.data;
};

const noteService = {
  getAllNotes,
};

export default noteService;