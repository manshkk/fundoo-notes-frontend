import { useEffect, useState } from "react";

import Header from "../../components/common/Header/Header";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import CreateNote from "../../components/common/CreateNote/CreateNote";
import NoteCard from "../../components/common/NoteCard/NoteCard";

import noteService from "../../services/noteService";

import "./Dashboard.css";

function Dashboard() {

    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {

        try {

            const response = await noteService.getAllNotes();

            console.log("Notes Response:", response);

            setNotes(response);

        }
        catch (error) {

            console.error("Get Notes Error:", error);

        }

    };

    useEffect(() => {

        fetchNotes();

    }, []);

    const handleCreateNote = async (noteData) => {

        try {

            await noteService.createNote(noteData);

            await fetchNotes();

        }
        catch (error) {

            console.error("Create Note Error:", error);

        }

    };

    return (

        <>

            <Header />

            <Sidebar />

            <main className="dashboard-main">

                <div className="dashboard-content">

                    <CreateNote
                        onCreateNote={handleCreateNote}
                    />

                    <div className="notes-grid">

                        {
                            notes.length > 0 ?

                                notes.map((note) => (

                                    <NoteCard
                                        key={note.id}
                                        note={note}
                                    />

                                ))

                                :

                                <h3
                                    style={{
                                        marginTop: 40,
                                        textAlign: "center",
                                        color: "#666"
                                    }}
                                >
                                    No Notes Available
                                </h3>

                        }

                    </div>

                </div>

            </main>

        </>

    );

}

export default Dashboard;