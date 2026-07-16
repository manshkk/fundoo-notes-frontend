import { useEffect, useState, useContext } from "react";

import Header from "../../components/common/Header/Header";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import CreateNote from "../../components/common/CreateNote/CreateNote";
import NoteCard from "../../components/common/NoteCard/NoteCard";

import noteService from "../../services/noteService";

import { SearchContext } from "../../context/SearchContext";

import "./Dashboard.css";

function Dashboard() {

    const { searchText } = useContext(SearchContext);

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotes = async () => {

        try {

            setLoading(true);

            const response = await noteService.getAllNotes();

            setNotes(response);

        }
        catch (error) {

            console.error("Get Notes Error:", error);

        }
        finally {

            setLoading(false);

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

    const activeNotes = notes.filter(note => {

        if (note.isArchived || note.isDeleted) {

            return false;

        }

        if (searchText.trim() === "") {

            return true;

        }

        return (

            note.title
                ?.toLowerCase()
                .includes(searchText.toLowerCase())

            ||

            note.content
                ?.toLowerCase()
                .includes(searchText.toLowerCase())

        );

    });

    const pinnedNotes = activeNotes.filter(
        note => note.isPinned
    );

    const otherNotes = activeNotes.filter(
        note => !note.isPinned
    );

    return (

        <>

            <Header />

            <Sidebar />

            <main className="dashboard-main">

                <div className="dashboard-content">

                    <CreateNote
                        onCreateNote={handleCreateNote}
                    />

                    {

                        loading ?

                            (

                                <h3
                                    style={{
                                        textAlign: "center",
                                        marginTop: 40,
                                        color: "#666"
                                    }}
                                >
                                    Loading Notes...
                                </h3>

                            )

                            :

                            (

                                <>

                                    {

                                        pinnedNotes.length > 0 &&

                                        <>

                                            <h3 className="section-title">

                                                PINNED

                                            </h3>

                                            <div className="notes-grid">

                                                {

                                                    pinnedNotes.map(note => (

                                                        <NoteCard
                                                            key={note.id}
                                                            note={note}
                                                            page="dashboard"
                                                            onRefresh={fetchNotes}
                                                        />

                                                    ))

                                                }

                                            </div>

                                        </>

                                    }

                                    {

                                        otherNotes.length > 0 &&

                                        <>

                                            <h3 className="section-title">

                                                OTHERS

                                            </h3>

                                            <div className="notes-grid">

                                                {

                                                    otherNotes.map(note => (

                                                        <NoteCard
                                                            key={note.id}
                                                            note={note}
                                                            page="dashboard"
                                                            onRefresh={fetchNotes}
                                                        />

                                                    ))

                                                }

                                            </div>

                                        </>

                                    }

                                    {

                                        activeNotes.length === 0 &&

                                        <h3
                                            style={{
                                                textAlign: "center",
                                                marginTop: 50,
                                                color: "#666"
                                            }}
                                        >
                                            No Notes Found
                                        </h3>

                                    }

                                </>

                            )

                    }

                </div>

            </main>

        </>

    );

}

export default Dashboard;